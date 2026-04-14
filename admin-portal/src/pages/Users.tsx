import { useState, useEffect, useCallback } from 'react'
import { UserPlus, X } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import StatusBadge from '../components/StatusBadge'
import { apiFetch } from '../api/client'

interface UserDto {
  user_id: string
  email: string
  full_name: string
  organisation_name: string
  organisation_type: string
  is_internal: boolean
  must_change_password: boolean
  status: string
  created_at: string
  last_login_at: string | null
}

interface PagedResult {
  items: UserDto[]
  total: number
  page: number
  pageSize: number
}

const inputClass =
  'bg-[#1E293B] border border-slate-700 rounded-lg px-4 py-2.5 text-gray-300 text-sm placeholder-gray-500 focus:outline-none focus:border-[#4A90C4]'

const modalInputClass =
  'w-full bg-[#0F172A] border border-slate-700 rounded-lg px-4 py-2.5 text-gray-300 text-sm placeholder-gray-500 focus:outline-none focus:border-[#4A90C4]'

const Users = () => {
  const [search, setSearch] = useState('')
  const [orgFilter, setOrgFilter] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [users, setUsers] = useState<UserDto[]>([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [showInviteModal, setShowInviteModal] = useState(false)

  const fetchUsers = useCallback(async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams()
      params.set('page', String(page))
      params.set('pageSize', '20')
      if (search) params.set('search', search)
      if (orgFilter) params.set('orgType', orgFilter)
      if (statusFilter) params.set('status', statusFilter)

      const data = await apiFetch<PagedResult>(`/api/admin/users?${params}`)
      setUsers(data.items)
      setTotal(data.total)
    } catch (err) {
      console.error('Failed to fetch users:', err)
    } finally {
      setLoading(false)
    }
  }, [page, search, orgFilter, statusFilter])

  useEffect(() => { fetchUsers() }, [fetchUsers])

  return (
    <div>
      <PageHeader
        title="Users"
        subtitle="Manage user accounts and permissions"
        action={
          <button
            onClick={() => setShowInviteModal(true)}
            className="flex items-center gap-2 bg-[#4A90C4] text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-[#5BA0D4] transition-colors"
          >
            <UserPlus size={16} />
            Invite User
          </button>
        }
      />

      {/* Filter Bar */}
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => { setSearch(e.target.value); setPage(1) }}
          className={`${inputClass} flex-1`}
        />
        <select
          value={orgFilter}
          onChange={(e) => { setOrgFilter(e.target.value); setPage(1) }}
          className={inputClass}
        >
          <option value="">All Types</option>
          <option value="Accounting Firm">Accounting Firm</option>
          <option value="Individual">Individual</option>
          <option value="Small Business">Small Business</option>
          <option value="AccountingFirm">Internal</option>
        </select>
        <select
          value={statusFilter}
          onChange={(e) => { setStatusFilter(e.target.value); setPage(1) }}
          className={inputClass}
        >
          <option value="">All Statuses</option>
          <option value="Active">Active</option>
          <option value="PendingVerification">Pending</option>
          <option value="Suspended">Suspended</option>
        </select>
      </div>

      {/* Users Table */}
      <div className="bg-[#1E293B] rounded-xl border border-slate-700 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-800/50">
              <th className="text-left text-gray-400 font-medium px-6 py-3">Name</th>
              <th className="text-left text-gray-400 font-medium px-6 py-3">Email</th>
              <th className="text-left text-gray-400 font-medium px-6 py-3">Organisation</th>
              <th className="text-left text-gray-400 font-medium px-6 py-3">Type</th>
              <th className="text-left text-gray-400 font-medium px-6 py-3">Status</th>
              <th className="text-left text-gray-400 font-medium px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan={6} className="px-6 py-8 text-center text-gray-500">Loading...</td></tr>
            ) : users.length === 0 ? (
              <tr><td colSpan={6} className="px-6 py-8 text-center text-gray-500">No users found</td></tr>
            ) : users.map((u) => (
              <tr key={u.user_id} className="border-b border-slate-700 hover:bg-slate-800/30">
                <td className="px-6 py-3 text-white">{u.full_name}</td>
                <td className="px-6 py-3 text-gray-400">{u.email}</td>
                <td className="px-6 py-3 text-gray-400">{u.organisation_name}</td>
                <td className="px-6 py-3">
                  <StatusBadge
                    label={u.is_internal ? 'Internal' : u.organisation_type}
                    variant={u.is_internal ? 'amber' : u.organisation_type === 'Accounting Firm' ? 'blue' : 'purple'}
                  />
                </td>
                <td className="px-6 py-3">
                  <StatusBadge
                    label={u.status}
                    variant={u.status === 'Active' ? 'green' : u.status === 'Suspended' ? 'red' : 'amber'}
                  />
                </td>
                <td className="px-6 py-3">
                  <div className="flex gap-2">
                    <button className="text-xs text-[#4A90C4] hover:text-[#6BB0E4] font-medium">Edit</button>
                    <button
                      className="text-xs text-red-400 hover:text-red-300 font-medium"
                      onClick={async () => {
                        const newStatus = u.status === 'Active' ? 'Suspended' : 'Active'
                        await apiFetch(`/api/admin/users/${u.user_id}/status`, {
                          method: 'PUT',
                          body: JSON.stringify({ status: newStatus }),
                        })
                        fetchUsers()
                      }}
                    >
                      {u.status === 'Active' ? 'Suspend' : 'Activate'}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        {total > 20 && (
          <div className="flex items-center justify-between px-6 py-3 border-t border-slate-700">
            <p className="text-xs text-gray-500">{total} users total</p>
            <div className="flex gap-2">
              <button
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
                className="text-xs text-gray-400 hover:text-white disabled:opacity-30"
              >Prev</button>
              <span className="text-xs text-gray-500">Page {page}</span>
              <button
                onClick={() => setPage(p => p + 1)}
                disabled={page * 20 >= total}
                className="text-xs text-gray-400 hover:text-white disabled:opacity-30"
              >Next</button>
            </div>
          </div>
        )}
      </div>

      {/* Invite User Modal */}
      {showInviteModal && (
        <InviteModal
          onClose={() => setShowInviteModal(false)}
          onSuccess={() => { setShowInviteModal(false); fetchUsers() }}
        />
      )}
    </div>
  )
}

function InviteModal({ onClose, onSuccess }: { onClose: () => void; onSuccess: () => void }) {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsSubmitting(true)

    try {
      // 1. Start the InternalStaffInvitation workflow
      const { workflowInstanceId } = await apiFetch<{ workflowInstanceId: string }>(
        '/api/workflow/start?definitionId=InternalStaffInvitation',
        { method: 'POST' }
      )

      // 2. Wait briefly for the workflow to reach the InviteStaffForm UserTask
      await new Promise(r => setTimeout(r, 1500))

      // 3. Submit the invite form data to the workflow
      await apiFetch(`/api/workflow/${workflowInstanceId}/submit`, {
        method: 'POST',
        body: JSON.stringify({ data: JSON.stringify({ Data: { FullName: fullName, Email: email }, Action: 'Next' }) }),
      })

      onSuccess()
    } catch (err: any) {
      setError(err.message || 'Failed to send invitation')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-[#1E293B] rounded-xl border border-slate-700 p-6 w-full max-w-md">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white font-semibold text-lg">Invite Internal User</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={20} />
          </button>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 mb-4">
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="inv-name" className="block text-sm text-gray-400 mb-1">Full Name</label>
            <input
              type="text"
              id="inv-name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              placeholder="e.g. Bashi Namwila"
              className={modalInputClass}
            />
          </div>

          <div>
            <label htmlFor="inv-email" className="block text-sm text-gray-400 mb-1">Email Address</label>
            <input
              type="email"
              id="inv-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="e.g. bashi@clientfocus.co.zm"
              className={modalInputClass}
            />
          </div>

          <p className="text-xs text-gray-500">
            An invitation email will be sent with a link to set their password.
          </p>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 border border-slate-700 text-gray-300 py-2.5 rounded-lg text-sm hover:bg-slate-700/50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-[#4A90C4] text-white py-2.5 rounded-lg text-sm font-medium hover:bg-[#5BA0D4] transition-colors disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Invitation'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Users
