import KpiCard from '../components/KpiCard'
import PageHeader from '../components/PageHeader'
import StatusBadge from '../components/StatusBadge'

const signupData = [
  { month: 'Apr', value: 45 },
  { month: 'May', value: 52 },
  { month: 'Jun', value: 60 },
  { month: 'Jul', value: 55 },
  { month: 'Aug', value: 70 },
  { month: 'Sep', value: 65 },
  { month: 'Oct', value: 78 },
  { month: 'Nov', value: 82 },
  { month: 'Dec', value: 72 },
  { month: 'Jan', value: 90 },
  { month: 'Feb', value: 95 },
  { month: 'Mar', value: 100 },
]

const revenuePoints = [
  { x: 0, y: 70 },
  { x: 1, y: 65 },
  { x: 2, y: 72 },
  { x: 3, y: 68 },
  { x: 4, y: 78 },
  { x: 5, y: 75 },
  { x: 6, y: 82 },
  { x: 7, y: 88 },
  { x: 8, y: 85 },
  { x: 9, y: 92 },
  { x: 10, y: 95 },
  { x: 11, y: 100 },
]

const recentSignups = [
  { name: 'Mwila Chanda', email: 'mwila.chanda@kpmgzm.com', org: 'KPMG Zambia', type: 'Accounting Firm', date: '2026-04-10' },
  { name: 'Bwalya Mutale', email: 'bwalya@mutaleenterprises.co.zm', org: 'Mutale Enterprises', type: 'Small Business', date: '2026-04-09' },
  { name: 'Chisomo Tembo', email: 'chisomo.tembo@deloitte.co.zm', org: 'Deloitte Zambia', type: 'Accounting Firm', date: '2026-04-08' },
  { name: 'Natasha Mulenga', email: 'natasha@gmail.com', org: 'Individual', type: 'Individual', date: '2026-04-07' },
  { name: 'Kondwani Phiri', email: 'kondwani@phiriaccounting.co.zm', org: 'Phiri & Associates', type: 'Accounting Firm', date: '2026-04-06' },
  { name: 'Thandiwe Banda', email: 'thandiwe@bandatrading.co.zm', org: 'Banda Trading Ltd', type: 'Small Business', date: '2026-04-05' },
]

const Dashboard = () => {
  const maxSignup = Math.max(...signupData.map(d => d.value))

  // Build SVG line path
  const width = 500
  const height = 200
  const padding = 20
  const chartW = width - padding * 2
  const chartH = height - padding * 2
  const linePath = revenuePoints
    .map((p, i) => {
      const x = padding + (i / (revenuePoints.length - 1)) * chartW
      const y = padding + chartH - (p.y / 100) * chartH
      return `${i === 0 ? 'M' : 'L'}${x},${y}`
    })
    .join(' ')
  const areaPath =
    linePath +
    ` L${padding + chartW},${padding + chartH} L${padding},${padding + chartH} Z`

  return (
    <div>
      <PageHeader title="Dashboard" subtitle="Overview of your Financials Studio platform" />

      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <KpiCard label="Total Signups" value="1,247" trend="+12.5%" trendColor="green" />
        <KpiCard label="Documents Processed" value="8,392" trend="+8.3%" trendColor="green" />
        <KpiCard label="MRR" value="K 187,500" trend="+15.2%" trendColor="green" />
        <KpiCard label="ARR" value="K 2,250,000" trend="+15.2%" trendColor="green" />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        {/* Signups Bar Chart */}
        <div className="bg-[#1E293B] rounded-xl p-6 border border-slate-700">
          <h3 className="text-white text-lg font-semibold mb-4">Signups</h3>
          <div className="flex items-end gap-2 h-48">
            {signupData.map((d) => (
              <div key={d.month} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className="w-full bg-[#4A90C4] rounded-t"
                  style={{ height: `${(d.value / maxSignup) * 100}%` }}
                />
                <span className="text-gray-400 text-xs">{d.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue Trend Line Chart */}
        <div className="bg-[#1E293B] rounded-xl p-6 border border-slate-700">
          <h3 className="text-white text-lg font-semibold mb-4">Revenue Trend</h3>
          <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-48">
            <defs>
              <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4A90C4" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#4A90C4" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d={areaPath} fill="url(#areaGrad)" />
            <path d={linePath} fill="none" stroke="#4A90C4" strokeWidth="2.5" />
            {revenuePoints.map((p, i) => {
              const x = padding + (i / (revenuePoints.length - 1)) * chartW
              const y = padding + chartH - (p.y / 100) * chartH
              return <circle key={i} cx={x} cy={y} r="3" fill="#4A90C4" />
            })}
          </svg>
        </div>
      </div>

      {/* Usage Segmentation */}
      <div className="mb-8">
        <h3 className="text-white text-lg font-semibold mb-4">Usage Segmentation</h3>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-[#1E293B] rounded-xl p-6 border border-slate-700">
            <div className="text-gray-400 text-sm uppercase tracking-wider">External Clients</div>
            <div className="text-white text-3xl font-bold mt-2">1,198</div>
            <span className="inline-block mt-2 text-xs font-medium px-2 py-0.5 rounded-full text-cyan-400 bg-cyan-400/10">
              96%
            </span>
          </div>
          <div className="bg-[#1E293B] rounded-xl p-6 border border-slate-700">
            <div className="text-gray-400 text-sm uppercase tracking-wider">Client Focus Staff</div>
            <div className="text-white text-3xl font-bold mt-2">49</div>
            <span className="inline-block mt-2 text-xs font-medium px-2 py-0.5 rounded-full text-purple-400 bg-purple-400/10">
              4%
            </span>
          </div>
          <div className="bg-[#1E293B] rounded-xl p-6 border border-slate-700">
            <div className="text-gray-400 text-sm uppercase tracking-wider">Internal Generations</div>
            <div className="text-white text-3xl font-bold mt-2">312</div>
          </div>
        </div>
      </div>

      {/* Download Statistics */}
      <div className="mb-8">
        <h3 className="text-white text-lg font-semibold mb-4">Download Statistics</h3>
        <div className="grid grid-cols-4 gap-6">
          <KpiCard label="Total Downloads" value="2,841" />
          <KpiCard label="Active Installs" value="1,089" />
          <KpiCard label="Downloads This Month" value="347" />
          <KpiCard label="Current Version" value="1.0.0" />
        </div>
      </div>

      {/* Users by Organisation Type - Donut Chart */}
      <div className="mb-8">
        <h3 className="text-white text-lg font-semibold mb-4">Users by Organisation Type</h3>
        <div className="bg-[#1E293B] rounded-xl p-6 border border-slate-700 flex items-center gap-12">
          <svg viewBox="0 0 200 200" className="w-56 h-56">
            {/* Accounting Firms 52% = 187.2deg, Small Businesses 31% = 111.6deg, Individuals 17% = 61.2deg */}
            <circle cx="100" cy="100" r="80" fill="none" stroke="#4A90C4" strokeWidth="30"
              strokeDasharray={`${0.52 * 502.65} ${502.65}`}
              strokeDashoffset="0"
              transform="rotate(-90 100 100)" />
            <circle cx="100" cy="100" r="80" fill="none" stroke="#8B5CF6" strokeWidth="30"
              strokeDasharray={`${0.31 * 502.65} ${502.65}`}
              strokeDashoffset={`${-0.52 * 502.65}`}
              transform="rotate(-90 100 100)" />
            <circle cx="100" cy="100" r="80" fill="none" stroke="#10B981" strokeWidth="30"
              strokeDasharray={`${0.17 * 502.65} ${502.65}`}
              strokeDashoffset={`${-(0.52 + 0.31) * 502.65}`}
              transform="rotate(-90 100 100)" />
            <circle cx="100" cy="100" r="55" fill="#1E293B" />
          </svg>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#4A90C4]" />
              <span className="text-gray-400 text-sm">Accounting Firms</span>
              <span className="text-white font-semibold ml-auto">52%</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-purple-500" />
              <span className="text-gray-400 text-sm">Small Businesses</span>
              <span className="text-white font-semibold ml-auto">31%</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="text-gray-400 text-sm">Individuals</span>
              <span className="text-white font-semibold ml-auto">17%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Signups Table */}
      <div>
        <h3 className="text-white text-lg font-semibold mb-4">Recent Signups</h3>
        <div className="bg-[#1E293B] rounded-xl border border-slate-700 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-800/50">
                <th className="text-left text-gray-400 font-medium px-6 py-3">Name</th>
                <th className="text-left text-gray-400 font-medium px-6 py-3">Email</th>
                <th className="text-left text-gray-400 font-medium px-6 py-3">Organisation</th>
                <th className="text-left text-gray-400 font-medium px-6 py-3">Type</th>
                <th className="text-left text-gray-400 font-medium px-6 py-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {recentSignups.map((u) => (
                <tr key={u.email} className="border-b border-slate-700 hover:bg-slate-800/30">
                  <td className="px-6 py-3 text-white">{u.name}</td>
                  <td className="px-6 py-3 text-gray-400">{u.email}</td>
                  <td className="px-6 py-3 text-gray-400">{u.org}</td>
                  <td className="px-6 py-3">
                    <StatusBadge
                      label={u.type}
                      variant={u.type === 'Accounting Firm' ? 'blue' : u.type === 'Small Business' ? 'purple' : 'gray'}
                    />
                  </td>
                  <td className="px-6 py-3 text-gray-400">{u.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
