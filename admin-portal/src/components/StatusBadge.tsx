type BadgeVariant = 'green' | 'amber' | 'red' | 'blue' | 'cyan' | 'purple' | 'gray'

const variants: Record<BadgeVariant, string> = {
  green: 'text-green-400 bg-green-400/10',
  amber: 'text-amber-400 bg-amber-400/10',
  red: 'text-red-400 bg-red-400/10',
  blue: 'text-blue-400 bg-blue-400/10',
  cyan: 'text-cyan-400 bg-cyan-400/10',
  purple: 'text-purple-400 bg-purple-400/10',
  gray: 'text-gray-400 bg-gray-400/10',
}

const StatusBadge = ({ label, variant = 'gray' }: { label: string; variant?: BadgeVariant }) => (
  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${variants[variant]}`}>
    {label}
  </span>
)

export default StatusBadge
