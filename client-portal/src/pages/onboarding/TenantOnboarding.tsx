import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Loader2, CheckCircle2, ChevronLeft } from 'lucide-react'
import WorkflowForm from '../../components/WorkflowForm'
import DownloadStep from '../../components/DownloadStep'
import { startWorkflow, submitWorkflowForm, getWorkflowForm, type TaskPayload } from '../../api/endpoints'
import { useAuth } from '../../auth/useAuth'

const STEPS = [
  { id: 'OrganisationProfile', label: 'Organisation' },
  { id: 'FirmProfile', label: 'Firm Profile' },
  { id: 'PracticeProfile', label: 'Practice' },
  { id: 'CompanyDetails', label: 'Company' },
  { id: 'DownloadApp', label: 'Download' },
]

// FirmProfile, PracticeProfile, and CompanyDetails are mutually exclusive branch steps.
const BRANCH_STEPS = new Set(['FirmProfile', 'PracticeProfile', 'CompanyDetails'])

export default function TenantOnboarding() {
  const navigate = useNavigate()
  const { user } = useAuth()
  const [workflowId, setWorkflowId] = useState<string | null>(null)
  const [taskPayload, setTaskPayload] = useState<TaskPayload | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [completed, setCompleted] = useState(false)
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set())

  // Only show the branch step the user is on or has completed
  const visibleSteps = STEPS.filter(s => {
    if (!BRANCH_STEPS.has(s.id)) return true
    return s.id === taskPayload?.taskName || completedSteps.has(s.id)
  })

  const currentStepIndex = visibleSteps.findIndex(s => s.id === taskPayload?.taskName) ?? 0

  useEffect(() => {
    initWorkflow()
  }, [])

  const initWorkflow = async () => {
    try {
      const orgType = user?.organisationType
      const result = await startWorkflow('TenantOnboarding', orgType)
      setWorkflowId(result.workflowInstanceId)

      await new Promise(r => setTimeout(r, 1500))
      const form = await getWorkflowForm(result.workflowInstanceId)
      if (form.taskName) {
        setTaskPayload(form)
      }
    } catch (err: any) {
      setError(err.message || 'Failed to start onboarding.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (formDataJson: string) => {
    if (!workflowId) return
    setIsSubmitting(true)
    setError(null)
    try {
      const previousTask = taskPayload?.taskName
      const parsed = JSON.parse(formDataJson)
      const withAction = JSON.stringify({ ...parsed, Action: 'Next' })
      const result = await submitWorkflowForm(workflowId, withAction)

      if (previousTask) {
        setCompletedSteps(prev => new Set(prev).add(previousTask))
      }

      if (result.completed) {
        setCompleted(true)
        return
      }

      const form = await getWorkflowForm(workflowId)
      if (form.taskName) setTaskPayload(form)
    } catch (err: any) {
      setError(err.message || 'Failed to submit.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleBack = async () => {
    if (!workflowId) return
    setIsSubmitting(true)
    try {
      await submitWorkflowForm(workflowId, JSON.stringify({ Action: 'Back' }))
      const form = await getWorkflowForm(workflowId)
      if (form.taskName) setTaskPayload(form)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  // --- Loading state ---
  if (isLoading) {
    return (
      <div className="min-h-screen bg-brand-bg flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 size={36} className="animate-spin text-brand-blue" />
          <p className="text-sm text-gray-500 font-medium">Setting up your workspace...</p>
        </div>
      </div>
    )
  }

  // --- Completion state ---
  if (completed) {
    return (
      <div className="min-h-screen bg-brand-bg pt-20 flex items-start justify-center">
        <div className="bg-white rounded-xl shadow-lg p-10 max-w-md w-full mx-4 text-center">
          <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
            <CheckCircle2 size={36} className="text-emerald-500" />
          </div>
          <h1 className="font-display font-bold text-2xl text-brand-navy mb-2">You're all set!</h1>
          <p className="text-gray-500 text-sm mb-6">Your organisation is ready. Open Financials Studio to start generating professional financial statements.</p>
          <div className="space-y-3">
            <button
              onClick={() => navigate('/download')}
              className="w-full bg-brand-navy text-white py-3 rounded-lg text-sm font-semibold hover:bg-brand-blue transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
              </svg>
              Open download page
            </button>
            <button
              onClick={() => navigate('/')}
              className="w-full border border-gray-200 text-brand-charcoal py-3 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Go to homepage
            </button>
          </div>
        </div>
      </div>
    )
  }

  // --- Parse download info for DownloadApp step ---
  const isDownloadStep = taskPayload?.taskName === 'DownloadApp'
  let downloadInfo = { url: '', platform: '', size: '' }
  if (isDownloadStep && taskPayload) {
    try {
      const schema = JSON.parse(taskPayload.uiSchema)
      downloadInfo = schema.download ?? downloadInfo
    } catch {}
  }

  return (
    <div className="min-h-screen bg-brand-bg pt-24 pb-20">
      <div className="max-w-2xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-display font-bold text-3xl text-brand-navy mb-2">Set up your account</h1>
          <p className="text-gray-500 text-sm">Complete these steps to start generating financial statements</p>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center justify-center mb-10 max-w-lg mx-auto">
          {visibleSteps.map((step, i) => (
            <div key={step.id} className="flex items-center">
              <div className="flex flex-col items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full text-sm font-bold transition-all ${
                  i < currentStepIndex
                    ? 'bg-brand-navy text-white'
                    : i === currentStepIndex
                    ? 'bg-brand-navy text-white shadow-[0_0_0_4px_rgba(26,58,107,0.15)]'
                    : 'border-2 border-gray-300 text-gray-400'
                }`}>
                  {i < currentStepIndex ? <CheckCircle2 size={20} /> : i + 1}
                </div>
                <span className={`mt-2 text-xs whitespace-nowrap ${
                  i <= currentStepIndex ? 'text-brand-navy font-semibold' : 'text-gray-400'
                }`}>
                  {step.label}
                </span>
              </div>
              {i < visibleSteps.length - 1 && (
                <div className={`w-12 h-0.5 mx-3 mt-[-1.25rem] transition-colors ${i < currentStepIndex ? 'bg-brand-navy' : 'bg-gray-200'}`} />
              )}
            </div>
          ))}
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4 flex items-start gap-3">
              <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"/>
              </svg>
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          {taskPayload ? (
            isDownloadStep ? (
              <DownloadStep
                url={downloadInfo.url}
                platform={downloadInfo.platform}
                size={downloadInfo.size}
                onNext={() => handleSubmit(JSON.stringify({}))}
                onBack={handleBack}
                isSubmitting={isSubmitting}
                showBack={currentStepIndex > 0}
              />
            ) : (
              <>
                <WorkflowForm
                  uiSchema={taskPayload.uiSchema}
                  validationErrors={taskPayload.validationErrors}
                  formData={taskPayload.formData}
                  onSubmit={handleSubmit}
                  isSubmitting={isSubmitting}
                />
                {currentStepIndex > 0 && (
                  <button
                    onClick={handleBack}
                    disabled={isSubmitting}
                    className="w-full mt-3 flex items-center justify-center gap-2 text-gray-500 hover:text-brand-navy text-sm font-medium py-2 transition-colors disabled:opacity-50"
                  >
                    <ChevronLeft size={16} /> Back
                  </button>
                )}
              </>
            )
          ) : (
            <div className="text-center py-8 text-gray-400">
              <Loader2 size={24} className="animate-spin mx-auto mb-2" />
              <p className="text-sm">Loading form...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
