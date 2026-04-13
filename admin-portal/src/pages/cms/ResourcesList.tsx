import { Link } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'
import StatusBadge from '../../components/StatusBadge'
import CmsSubNav from '../../components/CmsSubNav'

const resources = [
  { id: 1, name: 'Getting Started Guide', status: 'Published', updated: '2026-04-05' },
  { id: 2, name: 'How to Submit Documents', status: 'Published', updated: '2026-03-28' },
  { id: 3, name: 'Understanding Your Financial Reports', status: 'Published', updated: '2026-03-15' },
  { id: 4, name: 'FAQ: Cloud Accounting Migration', status: 'Published', updated: '2026-02-20' },
]

const ResourcesList = () => (
  <div className="min-h-screen bg-[#0F172A] p-8">
    <PageHeader title="Resource Articles" subtitle="Manage help articles and guides" />
    <CmsSubNav />

    <div className="bg-[#1E293B] border border-slate-700 rounded-xl">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-slate-800/50 text-gray-400 text-left">
            <th className="px-6 py-3 font-medium">Page Name</th>
            <th className="px-6 py-3 font-medium">Status</th>
            <th className="px-6 py-3 font-medium">Last Updated</th>
            <th className="px-6 py-3 font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {resources.map((r) => (
            <tr key={r.id} className="border-b border-slate-700 hover:bg-slate-800/30">
              <td className="px-6 py-4 text-white font-medium">{r.name}</td>
              <td className="px-6 py-4">
                <StatusBadge label={r.status} variant="green" />
              </td>
              <td className="px-6 py-4 text-gray-400">{r.updated}</td>
              <td className="px-6 py-4">
                <Link to={`/cms/resources/edit/${r.id}`} className="text-[#4A90C4] hover:underline">
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)

export default ResourcesList
