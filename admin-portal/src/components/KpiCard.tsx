interface KpiCardProps {
  label: string
  value: string
  trend?: string
  trendColor?: 'green' | 'amber' | 'gray' | 'blue'
}

const trendColors = {
  green: 'text-green-400 bg-green-400/10',
  amber: 'text-amber-400 bg-amber-400/10',
  gray: 'text-gray-400 bg-gray-400/10',
  blue: 'text-blue-400 bg-blue-400/10',
}

const KpiCard = ({ label, value, trend, trendColor = 'green' }: KpiCardProps) => (
  <div className="bg-[#1E293B] rounded-xl p-6 border border-slate-700 min-h-[140px]">
    <div className="text-gray-400 text-sm uppercase tracking-wider">{label}</div>
    <div className="text-white text-3xl font-bold mt-2" style={{ fontVariantNumeric: 'tabular-nums' }}>
      {value}
    </div>
    {trend && (
      <span className={`inline-block mt-2 text-xs font-medium px-2 py-0.5 rounded-full ${trendColors[trendColor]}`}>
        {trend}
      </span>
    )}
  </div>
)

export default KpiCard
