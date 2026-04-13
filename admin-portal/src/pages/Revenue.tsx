import KpiCard from '../components/KpiCard'
import PageHeader from '../components/PageHeader'
import StatusBadge from '../components/StatusBadge'

const monthlyRevenue = [
  { month: 'Oct', value: 95000, height: 50.7 },
  { month: 'Nov', value: 112000, height: 59.7 },
  { month: 'Dec', value: 134000, height: 71.5 },
  { month: 'Jan', value: 155000, height: 82.7 },
  { month: 'Feb', value: 168000, height: 89.6 },
  { month: 'Mar', value: 187500, height: 100 },
]

const revenueByType = [
  { label: 'Trial Balance Generations', amount: 'K 680,000', pct: 60 },
  { label: 'Source Document Generations', amount: 'K 445,000', pct: 40 },
]

const donutSegments = [
  { label: 'Visa', pct: 35, color: '#4A90C4', offset: 0 },
  { label: 'MasterCard', pct: 25, color: '#6366F1', offset: 35 },
  { label: 'MTN MoMo', pct: 20, color: '#FBBF24', offset: 60 },
  { label: 'Airtel Money', pct: 12, color: '#F87171', offset: 80 },
  { label: 'Zamtel Money', pct: 8, color: '#34D399', offset: 92 },
]

const transactions = [
  { user: 'Mutale Chilufya', type: 'Trial Balance', amount: 'K 450', method: 'Visa', date: '2026-03-28' },
  { user: 'Bwalya Mwamba', type: 'Source Document', amount: 'K 320', method: 'MTN MoMo', date: '2026-03-27' },
  { user: 'Chanda Kapasa', type: 'Trial Balance', amount: 'K 450', method: 'MasterCard', date: '2026-03-26' },
  { user: 'Nachilima Banda', type: 'Source Document', amount: 'K 320', method: 'Airtel Money', date: '2026-03-25' },
  { user: 'Mwila Tembo', type: 'Trial Balance', amount: 'K 450', method: 'Zamtel Money', date: '2026-03-24' },
  { user: 'Kaluba Musonda', type: 'Source Document', amount: 'K 320', method: 'Visa', date: '2026-03-23' },
]

const Revenue = () => {
  return (
    <div className="min-h-screen bg-[#0F172A] p-8">
      <PageHeader title="Revenue" subtitle="Financial metrics and payment tracking" />

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <KpiCard label="Monthly Recurring Revenue" value="K 187,500" trend="+15.2%" trendColor="green" />
        <KpiCard label="Annual Recurring Revenue" value="K 2,250,000" trend="+15.2%" trendColor="green" />
        <KpiCard label="Total Revenue" value="K 1,125,000" />
        <KpiCard label="Avg Revenue Per User" value="K 902" />
      </div>

      {/* Revenue by Month */}
      <div className="bg-[#1E293B] rounded-xl p-6 border border-slate-700 mb-8">
        <h2 className="text-white text-lg font-semibold mb-6">Revenue by Month</h2>
        <div className="flex items-end gap-4 h-48">
          {monthlyRevenue.map((m) => (
            <div key={m.month} className="flex-1 flex flex-col items-center gap-2">
              <span className="text-gray-400 text-xs">K {(m.value / 1000).toFixed(0)}k</span>
              <div
                className="w-full rounded-t-md"
                style={{
                  height: `${m.height * 1.6}px`,
                  background: 'linear-gradient(to top, #4A90C4, #4A90C4cc)',
                }}
              />
              <span className="text-gray-400 text-xs">{m.month}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Revenue by Type + Payment Method */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Revenue by Type */}
        <div className="bg-[#1E293B] rounded-xl p-6 border border-slate-700">
          <h2 className="text-white text-lg font-semibold mb-6">Revenue by Type</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {revenueByType.map((t) => (
              <div key={t.label} className="bg-slate-800/50 rounded-lg p-4">
                <div className="text-gray-400 text-sm mb-1">{t.label}</div>
                <div className="text-white text-xl font-bold mb-3">{t.amount}</div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div
                    className="h-2 rounded-full"
                    style={{ width: `${t.pct}%`, backgroundColor: '#4A90C4' }}
                  />
                </div>
                <div className="text-gray-400 text-xs mt-1">{t.pct}%</div>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue by Payment Method - Donut */}
        <div className="bg-[#1E293B] rounded-xl p-6 border border-slate-700">
          <h2 className="text-white text-lg font-semibold mb-6">Revenue by Payment Method</h2>
          <div className="flex items-center gap-8">
            <svg width="160" height="160" viewBox="0 0 160 160" className="shrink-0">
              {donutSegments.map((seg) => {
                const circumference = 2 * Math.PI * 56
                const dashLength = (seg.pct / 100) * circumference
                const dashOffset = -((seg.offset / 100) * circumference)
                return (
                  <circle
                    key={seg.label}
                    cx="80"
                    cy="80"
                    r="56"
                    fill="none"
                    stroke={seg.color}
                    strokeWidth="20"
                    strokeDasharray={`${dashLength} ${circumference - dashLength}`}
                    strokeDashoffset={dashOffset}
                    transform="rotate(-90 80 80)"
                  />
                )
              })}
            </svg>
            <div className="flex flex-col gap-2">
              {donutSegments.map((seg) => (
                <div key={seg.label} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: seg.color }} />
                  <span className="text-gray-400 text-sm">{seg.label}</span>
                  <span className="text-white text-sm font-medium ml-auto">{seg.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-[#1E293B] rounded-xl border border-slate-700 mb-8 overflow-hidden">
        <div className="p-6 pb-0">
          <h2 className="text-white text-lg font-semibold mb-4">Recent Transactions</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-800/50">
                <th className="text-left text-gray-400 font-medium px-6 py-3">User</th>
                <th className="text-left text-gray-400 font-medium px-6 py-3">Type</th>
                <th className="text-left text-gray-400 font-medium px-6 py-3">Amount</th>
                <th className="text-left text-gray-400 font-medium px-6 py-3">Payment Method</th>
                <th className="text-left text-gray-400 font-medium px-6 py-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx, i) => (
                <tr key={i} className="border-b border-slate-700 hover:bg-slate-800/30">
                  <td className="px-6 py-3 text-white">{tx.user}</td>
                  <td className="px-6 py-3">
                    <StatusBadge label={tx.type} variant={tx.type === 'Trial Balance' ? 'cyan' : 'purple'} />
                  </td>
                  <td className="px-6 py-3 text-white">{tx.amount}</td>
                  <td className="px-6 py-3 text-gray-400">{tx.method}</td>
                  <td className="px-6 py-3 text-gray-400">{tx.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Internal Usage */}
      <div className="bg-[#1E293B] rounded-xl p-6 border border-slate-700">
        <h2 className="text-white text-lg font-semibold mb-4">Internal Usage</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-800/50 rounded-lg p-4">
            <div className="text-gray-400 text-sm">Internal Generations</div>
            <div className="text-white text-2xl font-bold mt-1">312</div>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4">
            <div className="text-gray-400 text-sm">Equivalent Cost</div>
            <div className="text-white text-2xl font-bold mt-1">K 13,350</div>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4">
            <div className="text-gray-400 text-sm">% of Total Usage</div>
            <div className="text-white text-2xl font-bold mt-1">8.1%</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Revenue
