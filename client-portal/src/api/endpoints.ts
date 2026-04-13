import { apiFetch } from './client'

// --- Workflow Driver ---

export interface WorkflowStartResult {
  workflowInstanceId: string
  status: string
  currentTask?: TaskPayload | null
}

export interface TaskPayload {
  taskName: string
  uiSchema: string
  workflowInstanceId: string
  validationErrors?: ValidationError[] | null
  formData?: Record<string, any> | null
}

export interface ValidationError {
  propertyName: string
  errorMessage: string
}

export interface WorkflowSubmitResult {
  status: string
  subStatus: string
  currentTask?: TaskPayload | null
  completed: boolean
}

export interface WorkflowStatus {
  workflowInstanceId: string
  status: string
  subStatus: string
}

export function startWorkflow(definitionId: string, orgType?: string): Promise<WorkflowStartResult> {
  const params = new URLSearchParams({ definitionId })
  if (orgType) params.append('orgType', orgType)
  return apiFetch(`/api/workflow/start?${params}`, { method: 'POST' })
}

export function getWorkflowForm(instanceId: string): Promise<TaskPayload> {
  return apiFetch(`/api/workflow/${instanceId}/form`)
}

export function submitWorkflowForm(instanceId: string, data: string): Promise<WorkflowSubmitResult> {
  return apiFetch(`/api/workflow/${instanceId}/submit`, {
    method: 'POST',
    body: JSON.stringify({ data }),
  })
}

export function getWorkflowStatus(instanceId: string): Promise<WorkflowStatus> {
  return apiFetch(`/api/workflow/${instanceId}/status`)
}

// --- Onboarding Lookup ---

export interface MyOnboardingResult {
  hasOnboarding: boolean
  workflowType?: string
  workflowInstanceId?: string
  currentTask?: string
  bookmarkId?: string
}

export function getMyOnboarding(): Promise<MyOnboardingResult> {
  return apiFetch('/api/workflow/my-onboarding')
}

// --- Payments ---

export interface CreditBalance {
  tenantId: string
  creditBalance: number
  pdfCredits: number
}

export function getCreditBalance(): Promise<CreditBalance> {
  return apiFetch('/api/payments/balance')
}
