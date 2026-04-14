import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../auth/useAuth'
import { getMyOnboarding } from '../api/endpoints'

export default function Login() {
  const { login, loginWithGoogle } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const passwordSet = (location.state as any)?.passwordSet === true
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsSubmitting(true)
    const result = await login(email, password)
    setIsSubmitting(false)
    if (result.error) {
      setError(result.error)
    } else {
      // Check if user has a pending onboarding workflow
      try {
        const onboarding = await getMyOnboarding()
        if (onboarding.hasOnboarding && onboarding.workflowType === 'InternalStaffInvitation') {
          navigate(`/internal-onboarding?instanceId=${onboarding.workflowInstanceId}`)
          return
        }
        if (onboarding.hasOnboarding && onboarding.workflowType === 'TenantOnboarding') {
          navigate('/onboarding')
          return
        }
        // First-time user with no record in the backend yet — start onboarding
        if (onboarding.needsOnboarding) {
          navigate('/onboarding')
          return
        }
      } catch {
        // If the lookup fails, just go to home
      }
      navigate('/')
    }
  }

  return (
    <section className="bg-brand-bg pt-20 pb-20 min-h-screen flex items-start justify-center">
      <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 max-w-md w-full mx-4">
        <div className="text-center mb-8">
          <h1 className="font-display font-bold text-3xl text-brand-navy mb-2">Welcome back</h1>
          <p className="text-gray-500 text-sm">Sign in to your Financials Studio account</p>
        </div>

        {passwordSet && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
            <p className="text-green-700 text-sm font-medium">Password set successfully. Sign in to continue.</p>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-brand-charcoal mb-1">Email address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-brand-charcoal mb-1">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-transparent"
            />
          </div>

          <div className="text-right">
            <a href="#" className="text-brand-blue text-sm hover:underline">Forgot password?</a>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-brand-navy text-white py-3 rounded-lg text-sm font-semibold hover:bg-brand-blue transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-gray-400 text-xs uppercase tracking-wider">or</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        <button
          onClick={() => loginWithGoogle()}
          className="w-full flex items-center justify-center gap-3 border border-gray-200 py-3 rounded-lg text-sm font-medium text-brand-charcoal hover:bg-gray-50 transition-colors"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
          Continue with Google
        </button>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don't have an account? <Link to="/create-account" className="text-brand-blue font-medium hover:underline">Create one</Link>
        </p>
      </div>
    </section>
  )
}
