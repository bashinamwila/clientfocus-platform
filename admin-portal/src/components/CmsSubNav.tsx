import { NavLink } from 'react-router-dom'

const TABS = [
  { to: '/cms', label: 'Overview', end: true },
  { to: '/cms/blog', label: 'Blog Posts', end: false },
  { to: '/cms/resources', label: 'Resources', end: false },
  { to: '/cms/services', label: 'Services', end: false },
  { to: '/cms/approvals', label: 'Approval Queue', end: false },
]

const CmsSubNav = () => (
  <div className="flex gap-1 mb-8 border-b border-slate-700 pb-px">
    {TABS.map(({ to, label, end }) => (
      <NavLink
        key={to}
        to={to}
        end={end}
        className={({ isActive }) =>
          `px-4 py-2.5 text-sm font-medium rounded-t-lg transition-colors ${
            isActive
              ? 'bg-[#1E293B] text-[#4A90C4] border-b-2 border-[#4A90C4]'
              : 'text-gray-400 hover:text-white hover:bg-slate-700/30'
          }`
        }
      >
        {label}
      </NavLink>
    ))}
  </div>
)

export default CmsSubNav
