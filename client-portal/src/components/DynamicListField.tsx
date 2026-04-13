import { useState } from 'react'
import { Plus, X } from 'lucide-react'

interface Column {
  key: string
  placeholder: string
}

interface DynamicListFieldProps {
  label: string
  description?: string
  required?: boolean
  columns: Column[]
  value: string
  onChange: (value: string) => void
  error?: string
}

interface Row {
  id: number
  values: Record<string, string>
}

let nextId = 1

function parseRows(value: string, columns: Column[]): Row[] {
  if (!value.trim()) {
    return [{ id: nextId++, values: Object.fromEntries(columns.map(c => [c.key, ''])) }]
  }
  return value.split('\n').filter(Boolean).map(line => {
    const parts = line.split(',').map(s => s.trim())
    const values: Record<string, string> = {}
    columns.forEach((col, i) => {
      values[col.key] = parts[i] ?? ''
    })
    return { id: nextId++, values }
  })
}

function serializeRows(rows: Row[], columns: Column[]): string {
  return rows
    .filter(row => columns.some(col => row.values[col.key]?.trim()))
    .map(row => columns.map(col => row.values[col.key] ?? '').join(', '))
    .join('\n')
}

export default function DynamicListField({ label, description, required, columns, value, onChange, error }: DynamicListFieldProps) {
  const [rows, setRows] = useState<Row[]>(() => parseRows(value, columns))

  const updateRow = (rowId: number, colKey: string, newValue: string) => {
    const updated = rows.map(r =>
      r.id === rowId ? { ...r, values: { ...r.values, [colKey]: newValue } } : r
    )
    setRows(updated)
    onChange(serializeRows(updated, columns))
  }

  const addRow = () => {
    const newRow: Row = { id: nextId++, values: Object.fromEntries(columns.map(c => [c.key, ''])) }
    const updated = [...rows, newRow]
    setRows(updated)
  }

  const removeRow = (rowId: number) => {
    if (rows.length <= 1) return
    const updated = rows.filter(r => r.id !== rowId)
    setRows(updated)
    onChange(serializeRows(updated, columns))
  }

  const isSingleColumn = columns.length === 1
  const gridClass = isSingleColumn ? '' : `grid grid-cols-1 md:grid-cols-${columns.length} gap-2`

  return (
    <div>
      <label className="block text-sm font-medium text-brand-charcoal mb-1">
        {label}{required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {description && <p className="text-xs text-gray-400 mb-2">{description}</p>}

      <div className="space-y-2">
        {rows.map((row, i) => (
          <div key={row.id} className="flex items-start gap-2">
            <div className={`flex-1 ${gridClass}`}>
              {columns.map(col => (
                <input
                  key={col.key}
                  type="text"
                  placeholder={col.placeholder}
                  value={row.values[col.key] ?? ''}
                  onChange={e => updateRow(row.id, col.key, e.target.value)}
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-transparent"
                />
              ))}
            </div>
            {rows.length > 1 && (
              <button
                type="button"
                onClick={() => removeRow(row.id)}
                className="mt-2 text-gray-400 hover:text-red-500 transition-colors"
              >
                <X size={16} />
              </button>
            )}
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={addRow}
        className="mt-2 flex items-center gap-1 text-sm text-brand-blue hover:text-brand-navy font-medium transition-colors"
      >
        <Plus size={16} />
        Add another
      </button>

      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  )
}
