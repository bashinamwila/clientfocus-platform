import PageHeader from '../components/PageHeader'
import StatusBadge from '../components/StatusBadge'

type EventType = 'generation_completed' | 'payment' | 'login' | 'generation_failed' | 'settings_changed' | 'account_created'

const eventVariant: Record<EventType, 'cyan' | 'green' | 'blue' | 'red' | 'amber' | 'purple'> = {
  generation_completed: 'cyan',
  payment: 'green',
  login: 'blue',
  generation_failed: 'red',
  settings_changed: 'amber',
  account_created: 'purple',
}

const eventTypeOptions: EventType[] = [
  'generation_completed',
  'payment',
  'login',
  'generation_failed',
  'settings_changed',
  'account_created',
]

const logs = [
  { timestamp: '2026-03-28 14:32:05', user: 'Mutale Chilufya', event: 'generation_completed' as EventType, details: 'Trial Balance to Financial Statements - Softech Ltd', ip: '102.22.45.178' },
  { timestamp: '2026-03-28 14:30:12', user: 'Bwalya Mwamba', event: 'payment' as EventType, details: 'K 450 payment via MTN MoMo', ip: '102.22.91.34' },
  { timestamp: '2026-03-28 14:15:22', user: 'Chanda Kapasa', event: 'login' as EventType, details: 'Successful login from Chrome/Windows', ip: '41.72.108.55' },
  { timestamp: '2026-03-28 13:58:10', user: 'Nachilima Banda', event: 'generation_failed' as EventType, details: 'Source Document parsing failed - invalid PDF format', ip: '102.22.67.201' },
  { timestamp: '2026-03-28 13:42:33', user: 'Mwila Tembo', event: 'settings_changed' as EventType, details: 'Updated default AI model to Claude Sonnet 4.5', ip: '41.72.55.89' },
  { timestamp: '2026-03-28 13:30:17', user: 'Kaluba Musonda', event: 'account_created' as EventType, details: 'New user account registered', ip: '102.22.33.144' },
  { timestamp: '2026-03-28 12:45:08', user: 'Chipego Simukonda', event: 'generation_completed' as EventType, details: 'Source Documents to Management Accounts - ZamPower Corp', ip: '41.72.200.12' },
  { timestamp: '2026-03-28 12:20:51', user: 'Lombe Phiri', event: 'payment' as EventType, details: 'K 320 payment via Visa', ip: '102.22.88.76' },
]

const AuditLogs = () => {
  return (
    <div className="min-h-screen bg-[#0F172A] p-8">
      <PageHeader title="Audit Logs" subtitle="System activity and security events" />

      {/* Filter Bar */}
      <div className="flex flex-wrap items-center gap-4 mb-8">
        <div>
          <label className="block text-gray-400 text-xs mb-1">From</label>
          <input
            type="date"
            defaultValue="2026-03-01"
            className="bg-[#1E293B] border border-slate-700 rounded-lg px-4 py-2.5 text-gray-300 text-sm focus:outline-none focus:border-[#4A90C4]"
          />
        </div>
        <div>
          <label className="block text-gray-400 text-xs mb-1">To</label>
          <input
            type="date"
            defaultValue="2026-03-28"
            className="bg-[#1E293B] border border-slate-700 rounded-lg px-4 py-2.5 text-gray-300 text-sm focus:outline-none focus:border-[#4A90C4]"
          />
        </div>
        <div>
          <label className="block text-gray-400 text-xs mb-1">Search</label>
          <input
            type="text"
            placeholder="Filter by user..."
            className="bg-[#1E293B] border border-slate-700 rounded-lg px-4 py-2.5 text-gray-300 text-sm placeholder-gray-500 focus:outline-none focus:border-[#4A90C4]"
          />
        </div>
        <div>
          <label className="block text-gray-400 text-xs mb-1">Event Type</label>
          <select className="bg-[#1E293B] border border-slate-700 rounded-lg px-4 py-2.5 text-gray-300 text-sm focus:outline-none focus:border-[#4A90C4]">
            <option value="">All Events</option>
            {eventTypeOptions.map((evt) => (
              <option key={evt} value={evt}>
                {evt.replace(/_/g, ' ')}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Audit Log Table */}
      <div className="bg-[#1E293B] rounded-xl border border-slate-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-800/50">
                <th className="text-left text-gray-400 font-medium px-6 py-3">Timestamp</th>
                <th className="text-left text-gray-400 font-medium px-6 py-3">User</th>
                <th className="text-left text-gray-400 font-medium px-6 py-3">Event Type</th>
                <th className="text-left text-gray-400 font-medium px-6 py-3">Details</th>
                <th className="text-left text-gray-400 font-medium px-6 py-3">IP Address</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log, i) => (
                <tr key={i} className="border-b border-slate-700 hover:bg-slate-800/30">
                  <td className="px-6 py-3 text-gray-400 whitespace-nowrap">{log.timestamp}</td>
                  <td className="px-6 py-3 text-white">{log.user}</td>
                  <td className="px-6 py-3">
                    <StatusBadge label={log.event.replace(/_/g, ' ')} variant={eventVariant[log.event]} />
                  </td>
                  <td className="px-6 py-3 text-gray-400 max-w-xs truncate">{log.details}</td>
                  <td className="px-6 py-3 text-gray-400 font-mono text-xs">{log.ip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AuditLogs
