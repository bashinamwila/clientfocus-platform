import { Link } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'
import StatusBadge from '../../components/StatusBadge'
import CmsSubNav from '../../components/CmsSubNav'

const summaryCards = [
  { label: 'Blog Posts', count: 4, to: '/cms/blog', color: 'bg-[#4A90C4]/10' },
  { label: 'Resource Articles', count: 4, to: '/cms/resources', color: 'bg-purple-500/10' },
  { label: 'Service Pages', count: 5, to: '/cms/services', color: 'bg-cyan-500/10' },
]

const recentEdits = [
  { content: 'AI in Modern Accounting', type: 'Blog' as const, edited: '2 hours ago', editor: 'Sarah Chen' },
  { content: 'Bookkeeping Services', type: 'Service' as const, edited: '5 hours ago', editor: 'James Mwangi' },
  { content: 'Getting Started Guide', type: 'Resource' as const, edited: '1 day ago', editor: 'Sarah Chen' },
  { content: 'Tax Planning for SMEs', type: 'Blog' as const, edited: '2 days ago', editor: 'Liam O\'Brien' },
  { content: 'Payroll Management', type: 'Service' as const, edited: '3 days ago', editor: 'James Mwangi' },
]

const typeBadge: Record<string, { label: string; variant: 'blue' | 'purple' | 'cyan' }> = {
  Blog: { label: 'Blog', variant: 'blue' },
  Service: { label: 'Service', variant: 'purple' },
  Resource: { label: 'Resource', variant: 'cyan' },
}

const CmsOverview = () => (
  <div className="min-h-screen bg-[#0F172A] p-8">
    <PageHeader title="Content Management" subtitle="Manage blog posts, resources, and service pages" />
    <CmsSubNav />

    <div className="grid grid-cols-3 gap-6 mb-8">
      {summaryCards.map((card) => (
        <div key={card.label} className="bg-[#1E293B] border border-slate-700 rounded-xl p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className={`w-10 h-10 rounded-lg ${card.color} flex items-center justify-center`}>
              <span className="text-[#4A90C4] text-lg font-bold">{card.count}</span>
            </div>
            <h3 className="text-white font-semibold">{card.label}</h3>
          </div>
          <Link to={card.to} className="text-[#4A90C4] text-sm font-medium hover:underline">
            Manage &gt;
          </Link>
        </div>
      ))}
    </div>

    <div className="bg-[#1E293B] border border-slate-700 rounded-xl">
      <div className="px-6 py-4 border-b border-slate-700">
        <h2 className="text-white font-semibold">Recently Edited</h2>
      </div>
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-slate-800/50 text-gray-400 text-left">
            <th className="px-6 py-3 font-medium">Content</th>
            <th className="px-6 py-3 font-medium">Type</th>
            <th className="px-6 py-3 font-medium">Last Edited</th>
            <th className="px-6 py-3 font-medium">Editor</th>
          </tr>
        </thead>
        <tbody>
          {recentEdits.map((row) => (
            <tr key={row.content} className="border-b border-slate-700 hover:bg-slate-800/30">
              <td className="px-6 py-4 text-white">{row.content}</td>
              <td className="px-6 py-4">
                <StatusBadge label={typeBadge[row.type].label} variant={typeBadge[row.type].variant} />
              </td>
              <td className="px-6 py-4 text-gray-400">{row.edited}</td>
              <td className="px-6 py-4 text-gray-400">{row.editor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)

export default CmsOverview
