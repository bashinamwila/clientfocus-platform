import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { authClient } from '../auth/authClient'

export default function EmailConfirmationSent() {
  const location = useLocation()
  const email = (location.state as { email?: string })?.email
  const [resendStatus, setResendStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleResend = async () => {
    if (!email || resendStatus === 'sending') return
    setResendStatus('sending')
    const { error } = await authClient.sendVerificationEmail({ email })
    setResendStatus(error ? 'error' : 'sent')
  }

  return (
    <section className="bg-brand-bg pt-20 pb-20 min-h-screen flex items-start justify-center">
      <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 max-w-md w-full mx-4 text-center">
        <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-brand-bg flex items-center justify-center">
          <svg className="w-8 h-8 text-brand-navy" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
        </div>

        <h1 className="font-display font-bold text-3xl text-brand-navy mb-3">Check your inbox</h1>

        {email && (
          <p className="font-body text-gray-500 text-sm leading-relaxed mb-2">
            We've sent a confirmation link to:
          </p>
        )}
        {email && (
          <p className="font-semibold text-brand-navy text-sm mb-4">{email}</p>
        )}

        <p className="font-body text-gray-500 text-sm leading-relaxed mb-6">
          Click the link in the email to verify your account and get started.
        </p>

        <div className="bg-brand-bg rounded-lg px-5 py-4 mb-6">
          <p className="font-body text-gray-500 text-sm">
            Didn't receive the email? Check your spam folder or{' '}
            <button
              onClick={handleResend}
              disabled={resendStatus === 'sending' || !email}
              className="text-brand-blue font-medium hover:underline disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {resendStatus === 'sending' ? 'Sending...' : resendStatus === 'sent' ? 'Sent!' : 'resend confirmation email'}
            </button>
          </p>
          {resendStatus === 'error' && (
            <p className="text-red-500 text-xs mt-2">Failed to resend. Please try again.</p>
          )}
        </div>

        <Link to="/login" className="text-sm text-gray-400 hover:text-brand-navy transition-colors">Back to Login</Link>
      </div>
    </section>
  )
}
