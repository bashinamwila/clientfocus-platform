import KpiCard from '../components/KpiCard'
import PageHeader from '../components/PageHeader'
import StatusBadge from '../components/StatusBadge'

const breakdownData = [
  { label: 'TB to Financial Statements', pct: 45, color: 'bg-[#4A90C4]' },
  { label: 'TB to Management Accounts', pct: 10, color: 'bg-purple-500' },
  { label: 'Source Docs to Financial Statements', pct: 32, color: 'bg-emerald-500' },
  { label: 'Source Docs to Management Accounts', pct: 13, color: 'bg-amber-500' },
]

const recentGenerations = [
  { user: 'Mwila Chanda', type: 'TB to FS', status: 'Completed', duration: '2m 34s', cost: 'K 4.12', date: '2026-04-11' },
  { user: 'Kondwani Phiri', type: 'SD to FS', status: 'Completed', duration: '4m 08s', cost: 'K 5.80', date: '2026-04-11' },
  { user: 'Bwalya Mutale', type: 'TB to MA', status: 'Processing', duration: '--', cost: '--', date: '2026-04-11' },
  { user: 'Chisomo Tembo', type: 'SD to MA', status: 'Completed', duration: '3m 52s', cost: 'K 4.95', date: '2026-04-10' },
  { user: 'Thandiwe Banda', type: 'TB to FS', status: 'Failed', duration: '1m 12s', cost: 'K 1.20', date: '2026-04-10' },
  { user: 'Musonda Kasongo', type: 'SD to FS', status: 'Completed', duration: '3m 45s', cost: 'K 5.10', date: '2026-04-09' },
]

const statusVariant = (s: string) => {
  if (s === 'Completed') return 'green' as const
  if (s === 'Processing') return 'amber' as const
  return 'red' as const
}

const Generations = () => (
  <div>
    <PageHeader title="Generations" subtitle="Document generation history and statistics" />

    {/* KPI Cards */}
    <div className="grid grid-cols-4 gap-6 mb-8">
      <KpiCard label="Total Generations" value="3,847" />
      <KpiCard label="TB Generations" value="2,104" />
      <KpiCard label="Source Doc Generations" value="1,743" />
      <KpiCard label="Avg Cost Per Generation" value="K 3.47" />
    </div>

    {/* Generation Breakdown */}
    <div className="bg-[#1E293B] rounded-xl p-6 border border-slate-700 mb-8">
      <h3 className="text-white text-lg font-semibold mb-6">Generation Breakdown</h3>
      <div className="flex flex-col gap-5">
        {breakdownData.map((d) => (
          <div key={d.label}>
            <div className="flex justify-between text-sm mb-1.5">
              <span className="text-gray-400">{d.label}</span>
              <span className="text-white font-medium">{d.pct}%</span>
            </div>
            <div className="w-full h-2.5 bg-slate-700 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full ${d.color}`}
                style={{ width: `${d.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Recent Generations Table */}
    <div>
      <h3 className="text-white text-lg font-semibold mb-4">Recent Generations</h3>
      <div className="bg-[#1E293B] rounded-xl border border-slate-700 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-800/50">
              <th className="text-left text-gray-400 font-medium px-6 py-3">User</th>
              <th className="text-left text-gray-400 font-medium px-6 py-3">Type</th>
              <th className="text-left text-gray-400 font-medium px-6 py-3">Status</th>
              <th className="text-left text-gray-400 font-medium px-6 py-3">Duration</th>
              <th className="text-left text-gray-400 font-medium px-6 py-3">API Cost</th>
              <th className="text-left text-gray-400 font-medium px-6 py-3">Date</th>
            </tr>
          </thead>
          <tbody>
            {recentGenerations.map((g, i) => (
              <tr key={i} className="border-b border-slate-700 hover:bg-slate-800/30">
                <td className="px-6 py-3 text-white">{g.user}</td>
                <td className="px-6 py-3 text-gray-400">{g.type}</td>
                <td className="px-6 py-3">
                  <StatusBadge label={g.status} variant={statusVariant(g.status)} />
                </td>
                <td className="px-6 py-3 text-gray-400">{g.duration}</td>
                <td className="px-6 py-3 text-white">{g.cost}</td>
                <td className="px-6 py-3 text-gray-400">{g.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
)

export default Generations
