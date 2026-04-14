import { useState, useEffect, useRef } from 'react'
import { useSearchParams, Link, useNavigate } from 'react-router-dom'
import { authClient } from '../auth/authClient'

export default function AcceptInvite() {
  const [searchParams] = useSearchParams()
  const token = searchParams.get('token')
  const navigate = useNavigate()
  const didLogout = useRef(false)

  // Sign out any existing session once on mount — fire-and-forget
  useEffect(() => {
    if (!didLogout.current) {
      didLogout.current = true
      authClient.signOut().catch(() => {})
    }
  }, [])

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters')
      return
    }
    if (!token) {
      setError('Invalid invitation link — no token found')
      return
    }

    setIsSubmitting(true)
    const { error: resetError } = await authClient.resetPassword({
      newPassword: password,
      token,
    })
    setIsSubmitting(false)

    if (resetError) {
      setError(resetError.message ?? 'Failed to set password')
    } else {
      navigate('/login', { state: { passwordSet: true } })
    }
  }

  if (!token) {
    return (
      <section className="bg-brand-bg pt-20 pb-20 min-h-screen flex items-start justify-center">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 max-w-md w-full mx-4 text-center">
          <h1 className="font-display font-bold text-2xl text-brand-navy mb-3">Invalid Link</h1>
          <p className="text-gray-500 text-sm mb-6">This invitation link is invalid or has expired.</p>
          <Link to="/login" className="text-brand-blue font-medium hover:underline text-sm">Go to Login</Link>
        </div>
      </section>
    )
  }

  if (success) {
    return (
      <section className="bg-brand-bg pt-20 pb-20 min-h-screen flex items-start justify-center">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 max-w-md w-full mx-4 text-center">
          <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>
          <h1 className="font-display font-bold text-2xl text-brand-navy mb-3">Password Set</h1>
          <p className="text-gray-500 text-sm mb-6">Your password has been set. Redirecting to login...</p>
          <Link to="/login" className="text-brand-blue font-medium hover:underline text-sm">Go to Login</Link>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-brand-bg pt-20 pb-20 min-h-screen flex items-start justify-center">
      <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 max-w-md w-full mx-4">
        <div className="text-center mb-8">
          <h1 className="font-display font-bold text-3xl text-brand-navy mb-2">Set your password</h1>
          <p className="text-gray-500 text-sm">You've been invited to Financials Studio. Create a password to get started.</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-brand-charcoal mb-1">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="At least 8 characters"
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-brand-charcoal mb-1">Confirm password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Re-enter your password"
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-brand-navy text-white py-3 rounded-lg text-sm font-semibold hover:bg-brand-blue transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Setting password...' : 'Set Password & Continue'}
          </button>
        </form>
      </div>
    </section>
  )
}
