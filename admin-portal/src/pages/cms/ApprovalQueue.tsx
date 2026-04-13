import PageHeader from '../../components/PageHeader'
import StatusBadge from '../../components/StatusBadge'
import CmsSubNav from '../../components/CmsSubNav'

const pendingItems = [
  { id: 1, title: 'How AI is Transforming Accounting in Zambia', type: 'Blog', submittedBy: 'Mwamba Chishimba', date: '9 Apr 2026' },
  { id: 2, title: 'Getting Started with FinStatement Studio', type: 'Resource', submittedBy: 'Natasha Mulenga', date: '8 Apr 2026' },
  { id: 3, title: 'Tax Compliance Services', type: 'Service', submittedBy: 'Joseph Banda', date: '7 Apr 2026' },
]

const recentlyReviewed = [
  { id: 1, title: 'Automating Trial Balance Generation', type: 'Blog', reviewedBy: 'Admin User', decision: 'Approved', date: '6 Apr 2026', notes: 'Good to publish' },
  { id: 2, title: 'Financial Statements Guide', type: 'Resource', reviewedBy: 'Admin User', decision: 'Approved', date: '5 Apr 2026', notes: '' },
  { id: 3, title: 'Bank Reconciliation Tips', type: 'Blog', reviewedBy: 'Admin User', decision: 'Rejected', date: '4 Apr 2026', notes: 'Needs more detail on ZRA requirements' },
]

const typeBadge = (type: string) => {
  const v = type === 'Blog' ? 'blue' : type === 'Service' ? 'purple' : 'cyan'
  return <StatusBadge label={type} variant={v as any} />
}

const ApprovalQueue = () => (
  <>
    <PageHeader title="Approval Queue" subtitle="Review and approve content submissions" />
    <CmsSubNav />

    {/* Stats */}
    <div className="flex gap-6 mb-8">
      <div className="bg-[#1E293B] rounded-lg px-5 py-3 border border-slate-700 flex items-center gap-3">
        <span className="text-amber-400 text-2xl font-bold" style={{ fontVariantNumeric: 'tabular-nums' }}>3</span>
        <span className="text-gray-400 text-sm">Pending</span>
      </div>
      <div className="bg-[#1E293B] rounded-lg px-5 py-3 border border-slate-700 flex items-center gap-3">
        <span className="text-green-400 text-2xl font-bold" style={{ fontVariantNumeric: 'tabular-nums' }}>12</span>
        <span className="text-gray-400 text-sm">Approved This Month</span>
      </div>
      <div className="bg-[#1E293B] rounded-lg px-5 py-3 border border-slate-700 flex items-center gap-3">
        <span className="text-red-400 text-2xl font-bold" style={{ fontVariantNumeric: 'tabular-nums' }}>1</span>
        <span className="text-gray-400 text-sm">Rejected This Month</span>
      </div>
    </div>

    {/* Pending Approval */}
    <h3 className="text-white text-lg font-semibold mb-4">Pending Approval</h3>
    <div className="bg-[#1E293B] rounded-xl border border-slate-700 overflow-hidden mb-8">
      <table className="w-full">
        <thead>
          <tr className="bg-slate-800/50">
            <th className="text-left text-gray-400 text-xs uppercase tracking-wider px-6 py-3">Content Title</th>
            <th className="text-left text-gray-400 text-xs uppercase tracking-wider px-6 py-3">Type</th>
            <th className="text-left text-gray-400 text-xs uppercase tracking-wider px-6 py-3">Submitted By</th>
            <th className="text-left text-gray-400 text-xs uppercase tracking-wider px-6 py-3">Date</th>
            <th className="text-left text-gray-400 text-xs uppercase tracking-wider px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {pendingItems.map(item => (
            <tr key={item.id} className="border-b border-slate-700 hover:bg-slate-800/30">
              <td className="px-6 py-4 text-gray-300 text-sm font-medium">{item.title}</td>
              <td className="px-6 py-4">{typeBadge(item.type)}</td>
              <td className="px-6 py-4 text-gray-300 text-sm">{item.submittedBy}</td>
              <td className="px-6 py-4 text-gray-300 text-sm">{item.date}</td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1.5 text-xs font-medium text-gray-300 border border-slate-600 rounded-lg hover:bg-slate-700 transition-colors">Preview</button>
                  <button className="px-3 py-1.5 text-xs font-medium text-green-400 border border-green-400/30 rounded-lg hover:bg-green-400/10 transition-colors">Approve</button>
                  <button className="px-3 py-1.5 text-xs font-medium text-red-400 border border-red-400/30 rounded-lg hover:bg-red-400/10 transition-colors">Reject</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Recently Reviewed */}
    <h3 className="text-white text-lg font-semibold mb-4">Recently Reviewed</h3>
    <div className="bg-[#1E293B] rounded-xl border border-slate-700 overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="bg-slate-800/50">
            <th className="text-left text-gray-400 text-xs uppercase tracking-wider px-6 py-3">Content</th>
            <th className="text-left text-gray-400 text-xs uppercase tracking-wider px-6 py-3">Type</th>
            <th className="text-left text-gray-400 text-xs uppercase tracking-wider px-6 py-3">Reviewed By</th>
            <th className="text-left text-gray-400 text-xs uppercase tracking-wider px-6 py-3">Decision</th>
            <th className="text-left text-gray-400 text-xs uppercase tracking-wider px-6 py-3">Date</th>
            <th className="text-left text-gray-400 text-xs uppercase tracking-wider px-6 py-3">Notes</th>
          </tr>
        </thead>
        <tbody>
          {recentlyReviewed.map(item => (
            <tr key={item.id} className="border-b border-slate-700 hover:bg-slate-800/30">
              <td className="px-6 py-4 text-gray-300 text-sm font-medium">{item.title}</td>
              <td className="px-6 py-4">{typeBadge(item.type)}</td>
              <td className="px-6 py-4 text-gray-300 text-sm">{item.reviewedBy}</td>
              <td className="px-6 py-4">
                <StatusBadge label={item.decision} variant={item.decision === 'Approved' ? 'green' : 'red'} />
              </td>
              <td className="px-6 py-4 text-gray-300 text-sm">{item.date}</td>
              <td className="px-6 py-4 text-gray-400 text-sm">{item.notes || '—'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
)

export default ApprovalQueue
