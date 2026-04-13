import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/useAuth'

const ORG_TYPES = [
  'Sole Trader',
  'Partnership',
  'Limited Company',
  'Non-Profit',
  'Other',
]

export default function CreateAccount() {
  const navigate = useNavigate()
  const { signup, loginWithGoogle } = useAuth()
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    organisationName: '',
    organisationType: '',
    phone: '',
  })
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match')
      return
    }
    if (form.password.length < 8) {
      setError('Password must be at least 8 characters')
      return
    }

    setIsSubmitting(true)
    const result = await signup({
      email: form.email,
      password: form.password,
      name: `${form.firstName} ${form.lastName}`,
      firstName: form.firstName,
      lastName: form.lastName,
      organisationName: form.organisationName,
      organisationType: form.organisationType,
      phone: form.phone || undefined,
    })
    setIsSubmitting(false)

    if (result.error) {
      setError(result.error)
    } else {
      // Signup succeeded — email verification required
      navigate('/email-confirmation-sent', { state: { email: form.email } })
    }
  }

  return (
    <section className="bg-brand-bg pt-20 pb-20 min-h-screen flex items-start justify-center">
      <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 max-w-md w-full mx-4">
        <div className="text-center mb-8">
          <h1 className="font-display font-bold text-3xl text-brand-navy mb-2">Create your account</h1>
          <p className="text-gray-500 text-sm">Get started with Financials Studio</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-brand-charcoal mb-1">First name</label>
              <input type="text" id="firstName" value={form.firstName} onChange={(e) => update('firstName', e.target.value)} required className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-transparent" />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-brand-charcoal mb-1">Last name</label>
              <input type="text" id="lastName" value={form.lastName} onChange={(e) => update('lastName', e.target.value)} required className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-transparent" />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-brand-charcoal mb-1">Email address</label>
            <input type="email" id="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="you@example.com" required className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-transparent" />
          </div>

          <div>
            <label htmlFor="organisationName" className="block text-sm font-medium text-brand-charcoal mb-1">Organisation name</label>
            <input type="text" id="organisationName" value={form.organisationName} onChange={(e) => update('organisationName', e.target.value)} placeholder="Your company or practice" required className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-transparent" />
          </div>

          <div>
            <label htmlFor="organisationType" className="block text-sm font-medium text-brand-charcoal mb-1">Organisation type</label>
            <select id="organisationType" value={form.organisationType} onChange={(e) => update('organisationType', e.target.value)} required className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-transparent bg-white">
              <option value="">Select type...</option>
              {ORG_TYPES.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-brand-charcoal mb-1">Phone <span className="text-gray-400">(optional)</span></label>
            <input type="tel" id="phone" value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="+260 97 1234567" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-transparent" />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-brand-charcoal mb-1">Password</label>
            <input type="password" id="password" value={form.password} onChange={(e) => update('password', e.target.value)} placeholder="At least 8 characters" required className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-transparent" />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-brand-charcoal mb-1">Confirm password</label>
            <input type="password" id="confirmPassword" value={form.confirmPassword} onChange={(e) => update('confirmPassword', e.target.value)} placeholder="Re-enter your password" required className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-transparent" />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-brand-navy text-white py-3 rounded-lg text-sm font-semibold hover:bg-brand-blue transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Creating account...' : 'Create Account'}
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
          Already have an account? <Link to="/login" className="text-brand-blue font-medium hover:underline">Sign in</Link>
        </p>
      </div>
    </section>
  )
}
