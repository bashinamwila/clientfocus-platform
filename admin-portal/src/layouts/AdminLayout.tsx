import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import {
  LayoutDashboard, Users, FileText, DollarSign,
  Activity, ScrollText, Newspaper, LogOut,
} from 'lucide-react'
import { useAuth } from '../auth/useAuth'

const NAV_ITEMS = [
  { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/users', icon: Users, label: 'Users' },
  { to: '/generations', icon: FileText, label: 'Generations' },
  { to: '/revenue', icon: DollarSign, label: 'Revenue' },
  { to: '/api-usage', icon: Activity, label: 'API Usage' },
  { to: '/audit-logs', icon: ScrollText, label: 'Audit Logs' },
  { to: '/cms', icon: Newspaper, label: 'CMS' },
]

const AdminLayout = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-[#0F172A]">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 w-60 h-full bg-[#1E293B] flex flex-col z-50">
        <div className="px-6 py-6">
          <span className="text-white font-semibold text-lg">Financials Studio</span>
        </div>
        <nav className="flex-1 px-3 space-y-1">
          {NAV_ITEMS.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/' || to === '/cms'}
              className={({ isActive }) =>
                `flex items-center gap-3 py-2.5 px-4 rounded-lg text-sm transition-colors ${
                  isActive
                    ? 'bg-[#0F172A] text-[#4A90C4] font-medium'
                    : 'text-gray-400 hover:text-white hover:bg-slate-700/50'
                }`
              }
            >
              <Icon size={18} />
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="px-4 py-4 border-t border-slate-700">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-full bg-[#4A90C4] flex items-center justify-center text-white font-semibold text-sm">
              {user?.name?.charAt(0)?.toUpperCase() || 'A'}
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-white text-sm font-medium truncate">{user?.name || 'Admin'}</div>
              <div className="text-gray-400 text-xs truncate">{user?.email || ''}</div>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-gray-400 hover:text-white text-xs transition-colors w-full px-1"
          >
            <LogOut size={14} />
            Sign out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="ml-60 min-h-screen p-8">
        <Outlet />
      </main>
    </div>
  )
}

export default AdminLayout
