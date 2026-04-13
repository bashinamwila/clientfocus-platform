import KpiCard from '../components/KpiCard'
import PageHeader from '../components/PageHeader'

const monthlyCosts = [
  { month: 'Oct', value: 1450, height: 45 },
  { month: 'Nov', value: 1780, height: 55 },
  { month: 'Dec', value: 2100, height: 65 },
  { month: 'Jan', value: 2540, height: 79 },
  { month: 'Feb', value: 2880, height: 89 },
  { month: 'Mar', value: 3221, height: 100 },
]

const modelBreakdown = [
  { label: 'Claude Sonnet 4.5', pct: 62, color: '#4A90C4' },
  { label: 'Gemini 2.0 Flash', pct: 38, color: '#6366F1' },
]

const generationBreakdown = [
  { label: 'TB to FS', pct: 45, color: '#4A90C4' },
  { label: 'SD to FS', pct: 32, color: '#6366F1' },
  { label: 'TB to MA', pct: 13, color: '#FBBF24' },
  { label: 'SD to MA', pct: 10, color: '#34D399' },
]

const recentCalls = [
  { id: 'gen_7f3a2b91', model: 'Claude Sonnet 4.5', tokensIn: '12,450', tokensOut: '8,230', cost: 'K 4.12', timestamp: '2026-03-28 14:32:05' },
  { id: 'gen_4e8c1d03', model: 'Gemini 2.0 Flash', tokensIn: '9,870', tokensOut: '6,540', cost: 'K 1.85', timestamp: '2026-03-28 14:28:41' },
  { id: 'gen_a2f09b47', model: 'Claude Sonnet 4.5', tokensIn: '15,200', tokensOut: '11,340', cost: 'K 5.28', timestamp: '2026-03-28 14:15:22' },
  { id: 'gen_6d1e4c89', model: 'Gemini 2.0 Flash', tokensIn: '8,310', tokensOut: '5,120', cost: 'K 1.52', timestamp: '2026-03-28 13:58:10' },
  { id: 'gen_b3c72f15', model: 'Claude Sonnet 4.5', tokensIn: '11,900', tokensOut: '9,780', cost: 'K 4.67', timestamp: '2026-03-28 13:42:33' },
  { id: 'gen_8a5d0e62', model: 'Gemini 2.0 Flash', tokensIn: '7,640', tokensOut: '4,890', cost: 'K 1.41', timestamp: '2026-03-28 13:30:17' },
]

const ApiUsage = () => {
  return (
    <div className="min-h-screen bg-[#0F172A] p-8">
      <PageHeader title="API Usage" subtitle="Model consumption and cost tracking" />

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <KpiCard label="Total API Calls" value="24,891" />
        <KpiCard label="Total Tokens" value="148.2M" />
        <KpiCard label="Total API Cost" value="K 13,371" />
        <KpiCard label="Avg Cost Per Generation" value="K 3.47" />
      </div>

      {/* API Costs Over Time */}
      <div className="bg-[#1E293B] rounded-xl p-6 border border-slate-700 mb-8">
        <h2 className="text-white text-lg font-semibold mb-6">API Costs Over Time</h2>
        <div className="flex items-end gap-4 h-48">
          {monthlyCosts.map((m) => (
            <div key={m.month} className="flex-1 flex flex-col items-center gap-2">
              <span className="text-gray-400 text-xs">K {m.value.toLocaleString()}</span>
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

      {/* Cost Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* By Model */}
        <div className="bg-[#1E293B] rounded-xl p-6 border border-slate-700">
          <h2 className="text-white text-lg font-semibold mb-6">Cost Breakdown by Model</h2>
          <div className="flex flex-col gap-5">
            {modelBreakdown.map((item) => (
              <div key={item.label}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">{item.label}</span>
                  <span className="text-white font-medium">{item.pct}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2.5">
                  <div
                    className="h-2.5 rounded-full"
                    style={{ width: `${item.pct}%`, backgroundColor: item.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* By Generation Type */}
        <div className="bg-[#1E293B] rounded-xl p-6 border border-slate-700">
          <h2 className="text-white text-lg font-semibold mb-6">Cost Breakdown by Generation Type</h2>
          <div className="flex flex-col gap-5">
            {generationBreakdown.map((item) => (
              <div key={item.label}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">{item.label}</span>
                  <span className="text-white font-medium">{item.pct}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2.5">
                  <div
                    className="h-2.5 rounded-full"
                    style={{ width: `${item.pct}%`, backgroundColor: item.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent API Calls */}
      <div className="bg-[#1E293B] rounded-xl border border-slate-700 overflow-hidden">
        <div className="p-6 pb-0">
          <h2 className="text-white text-lg font-semibold mb-4">Recent API Calls</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-800/50">
                <th className="text-left text-gray-400 font-medium px-6 py-3">Generation ID</th>
                <th className="text-left text-gray-400 font-medium px-6 py-3">Model</th>
                <th className="text-left text-gray-400 font-medium px-6 py-3">Tokens In</th>
                <th className="text-left text-gray-400 font-medium px-6 py-3">Tokens Out</th>
                <th className="text-left text-gray-400 font-medium px-6 py-3">Cost</th>
                <th className="text-left text-gray-400 font-medium px-6 py-3">Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {recentCalls.map((call, i) => (
                <tr key={i} className="border-b border-slate-700 hover:bg-slate-800/30">
                  <td className="px-6 py-3 text-white font-mono text-xs">{call.id}</td>
                  <td className="px-6 py-3 text-gray-400">{call.model}</td>
                  <td className="px-6 py-3 text-white">{call.tokensIn}</td>
                  <td className="px-6 py-3 text-white">{call.tokensOut}</td>
                  <td className="px-6 py-3 text-white">{call.cost}</td>
                  <td className="px-6 py-3 text-gray-400">{call.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ApiUsage
