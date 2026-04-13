import { useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { Loader2, CheckCircle2, Download } from 'lucide-react'
import { getWorkflowForm, submitWorkflowForm } from '../../api/endpoints'

export default function InternalOnboarding() {
  const [searchParams] = useSearchParams()
  const instanceId = searchParams.get('instanceId')
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [currentTask, setCurrentTask] = useState<string | null>(null)
  const [completed, setCompleted] = useState(false)

  useEffect(() => {
    if (!instanceId) {
      setError('No workflow instance found.')
      setIsLoading(false)
      return
    }
    loadForm()
  }, [instanceId])

  const loadForm = async () => {
    try {
      const form = await getWorkflowForm(instanceId!)
      setCurrentTask(form.taskName || null)
    } catch {
      setError('Failed to load onboarding state.')
    } finally {
      setIsLoading(false)
    }
  }

  const advanceWorkflow = async () => {
    if (!instanceId) return
    setIsSubmitting(true)
    setError(null)
    try {
      const result = await submitWorkflowForm(instanceId, JSON.stringify({}))
      if (result.completed) {
        setCompleted(true)
      } else if (result.currentTask) {
        setCurrentTask(result.currentTask.taskName)
      } else {
        // Refetch form to see where we are
        const form = await getWorkflowForm(instanceId)
        if (form.taskName) {
          setCurrentTask(form.taskName)
        } else {
          setCompleted(true)
        }
      }
    } catch {
      setError('Failed to advance. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-brand-bg flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 size={36} className="animate-spin text-brand-blue" />
          <p className="text-sm text-gray-500 font-medium">Loading...</p>
        </div>
      </div>
    )
  }

  if (completed) {
    return (
      <div className="min-h-screen bg-brand-bg pt-20 flex items-start justify-center">
        <div className="bg-white rounded-xl shadow-lg p-10 max-w-md w-full mx-4 text-center">
          <CheckCircle2 size={48} className="text-emerald-500 mx-auto mb-4" />
          <h1 className="font-display font-bold text-2xl text-brand-navy mb-2">Welcome aboard!</h1>
          <p className="text-gray-500 text-sm mb-6">
            You're all set. Open Financials Studio and sign in with your account to get started.
          </p>
          <button
            onClick={() => navigate('/')}
            className="w-full bg-brand-navy text-white py-3 rounded-lg text-sm font-semibold hover:bg-brand-blue transition-colors"
          >
            Go to Home
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-brand-bg pt-20 pb-20">
      <div className="max-w-lg mx-auto px-4">
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-6">
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        )}

        {/* Download Card */}
        {(currentTask === 'WaitForAppDownload' || currentTask === 'WaitForFirstLogin') && (
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 text-center">
            <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-brand-bg flex items-center justify-center">
              <Download size={32} className="text-brand-navy" />
            </div>

            <h1 className="font-display font-bold text-3xl text-brand-navy mb-3">
              Download Financials Studio
            </h1>
            <p className="font-body text-gray-500 text-sm leading-relaxed mb-8">
              Install the desktop app to start generating financial statements.
            </p>

            <a
              href="https://github.com/bashinamwila/finstatement-studio/releases/latest/download/Financials-Studio-Setup.exe"
              className="w-full flex items-center justify-center gap-3 bg-brand-navy text-white py-3.5 rounded-lg text-sm font-semibold hover:bg-brand-blue transition-colors mb-3"
              onClick={() => {
                // After user clicks download, advance the workflow
                setTimeout(advanceWorkflow, 1000)
              }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
              </svg>
              Download for Windows
            </a>

            <p className="font-body text-xs text-gray-400 mb-6">Windows 10 or later &middot; ~120 MB</p>

            <button
              onClick={advanceWorkflow}
              disabled={isSubmitting}
              className="text-sm text-brand-blue hover:underline font-medium disabled:opacity-50"
            >
              {isSubmitting ? 'Processing...' : 'I\'ve already downloaded it'}
            </button>
          </div>
        )}

        {/* System requirements */}
        <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-sm font-semibold text-brand-charcoal mb-4">Getting started</h2>
          <ol className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 min-w-[1.5rem] rounded-full bg-brand-navy text-white flex items-center justify-center text-xs font-bold">1</span>
              <span className="font-body text-sm text-gray-600 pt-0.5">Run the installer and follow the setup wizard</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 min-w-[1.5rem] rounded-full bg-brand-navy text-white flex items-center justify-center text-xs font-bold">2</span>
              <span className="font-body text-sm text-gray-600 pt-0.5">Sign in with the email and password you just set</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 min-w-[1.5rem] rounded-full bg-brand-navy text-white flex items-center justify-center text-xs font-bold">3</span>
              <span className="font-body text-sm text-gray-600 pt-0.5">Start processing client financial data</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}
