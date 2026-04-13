import { Link } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'
import StatusBadge from '../../components/StatusBadge'
import CmsSubNav from '../../components/CmsSubNav'

const services = [
  { id: 1, name: 'Bookkeeping Services', status: 'Published', updated: '2026-04-02' },
  { id: 2, name: 'Payroll Management', status: 'Published', updated: '2026-03-30' },
  { id: 3, name: 'Tax Compliance & Planning', status: 'Published', updated: '2026-03-25' },
  { id: 4, name: 'Financial Reporting', status: 'Published', updated: '2026-03-18' },
  { id: 5, name: 'Business Advisory', status: 'Published', updated: '2026-03-10' },
]

const ServicesList = () => (
  <div className="min-h-screen bg-[#0F172A] p-8">
    <PageHeader title="Service Pages" subtitle="Manage service offerings" />
    <CmsSubNav />

    <div className="bg-[#1E293B] border border-slate-700 rounded-xl">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-slate-800/50 text-gray-400 text-left">
            <th className="px-6 py-3 font-medium">Service Name</th>
            <th className="px-6 py-3 font-medium">Status</th>
            <th className="px-6 py-3 font-medium">Last Updated</th>
            <th className="px-6 py-3 font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {services.map((s) => (
            <tr key={s.id} className="border-b border-slate-700 hover:bg-slate-800/30">
              <td className="px-6 py-4 text-white font-medium">{s.name}</td>
              <td className="px-6 py-4">
                <StatusBadge label={s.status} variant="green" />
              </td>
              <td className="px-6 py-4 text-gray-400">{s.updated}</td>
              <td className="px-6 py-4">
                <Link to={`/cms/services/edit/${s.id}`} className="text-[#4A90C4] hover:underline">
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

export default ServicesList
