import { useState } from 'react'
import type { ValidationError } from '../api/endpoints'
import DynamicListField from './DynamicListField'

interface UiField {
  name: string
  label: string
  type: string
  required?: boolean
  options?: string[]
  description?: string
  defaultValue?: string
  placeholder?: string
  listMode?: boolean
  listColumns?: { key: string; placeholder: string }[]
}

interface UiSchema {
  title: string
  description?: string
  fields?: UiField[]
}

interface Props {
  uiSchema: string
  validationErrors?: ValidationError[] | null
  formData?: Record<string, any> | null
  onSubmit: (data: string) => void
  isSubmitting: boolean
}

const PARTNER_COLUMNS = [
  { key: 'name', placeholder: 'Full name' },
  { key: 'title', placeholder: 'Title (e.g. Partner)' },
  { key: 'reg', placeholder: 'Auditor reg. no.' },
]

const DIRECTOR_COLUMNS = [
  { key: 'name', placeholder: 'Full name' },
]

function getListColumns(fieldName: string, field: UiField) {
  if (field.listColumns) return field.listColumns
  const lower = fieldName.toLowerCase()
  if (lower === 'partners') return PARTNER_COLUMNS
  if (lower === 'directors') return DIRECTOR_COLUMNS
  return [{ key: 'value', placeholder: 'Enter value' }]
}

function isListField(field: UiField): boolean {
  if (field.listMode) return true
  const lower = field.name.toLowerCase()
  return lower === 'partners' || lower === 'directors'
}

const WorkflowForm = ({ uiSchema, validationErrors, formData, onSubmit, isSubmitting }: Props) => {
  let schema: UiSchema
  try {
    schema = JSON.parse(uiSchema)
  } catch {
    schema = { title: 'Form', fields: [] }
  }

  const fields = schema.fields ?? []
  const [values, setValues] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {}
    for (const f of fields) {
      initial[f.name] = (formData?.[f.name] as string) ?? f.defaultValue ?? ''
    }
    return initial
  })

  const getError = (fieldName: string) =>
    validationErrors?.find(e => e.propertyName.toLowerCase() === fieldName.toLowerCase())?.errorMessage

  const handleChange = (name: string, value: string) => {
    setValues(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(JSON.stringify(values))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="font-display font-bold text-xl text-brand-navy mb-1">{schema.title}</h2>
      {schema.description && (
        <p className="text-gray-400 text-sm mb-2">{schema.description}</p>
      )}

      {validationErrors && validationErrors.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-700 text-sm font-medium mb-1">Please fix the following errors:</p>
          <ul className="text-red-600 text-sm list-disc list-inside">
            {validationErrors.map((e, i) => (
              <li key={i}>{e.errorMessage}</li>
            ))}
          </ul>
        </div>
      )}

      {fields.map(field => {
        if (field.type === 'textarea' && isListField(field)) {
          const columns = getListColumns(field.name, field)
          return (
            <DynamicListField
              key={field.name}
              label={field.label}
              description={field.description}
              required={field.required}
              columns={columns}
              value={values[field.name] ?? ''}
              onChange={val => handleChange(field.name, val)}
              error={getError(field.name)}
            />
          )
        }

        return (
          <div key={field.name}>
            <label htmlFor={field.name} className="block text-sm font-medium text-brand-charcoal mb-1">
              {field.label}{field.required && <span className="text-red-500 ml-0.5">*</span>}
            </label>
            {field.description && (
              <p className="text-xs text-gray-400 mb-1">{field.description}</p>
            )}

            {field.type === 'select' ? (
              <select
                id={field.name}
                value={values[field.name] ?? ''}
                onChange={e => handleChange(field.name, e.target.value)}
                required={field.required}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-transparent bg-white"
              >
                <option value="">Select {field.label.toLowerCase()}</option>
                {field.options?.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            ) : field.type === 'textarea' ? (
              <textarea
                id={field.name}
                value={values[field.name] ?? ''}
                onChange={e => handleChange(field.name, e.target.value)}
                required={field.required}
                rows={3}
                placeholder={field.placeholder}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-transparent"
              />
            ) : (
              <input
                id={field.name}
                type={field.type || 'text'}
                value={values[field.name] ?? ''}
                onChange={e => handleChange(field.name, e.target.value)}
                required={field.required}
                placeholder={field.placeholder}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-transparent"
              />
            )}

            {getError(field.name) && (
              <p className="text-red-500 text-xs mt-1">{getError(field.name)}</p>
            )}
          </div>
        )
      })}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-brand-navy text-white py-3 rounded-lg text-sm font-semibold hover:bg-brand-blue transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Processing...' : 'Continue'}
      </button>
    </form>
  )
}

export default WorkflowForm
