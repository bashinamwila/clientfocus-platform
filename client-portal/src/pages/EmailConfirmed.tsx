import { Link } from 'react-router-dom';

export default function EmailConfirmed() {
  return (
    <section className="bg-brand-bg pt-20 pb-20 min-h-screen flex items-start justify-center">
      <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 max-w-md w-full mx-4 text-center">
        <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </div>

        <h1 className="font-display font-bold text-3xl text-brand-navy mb-3">Email confirmed</h1>
        <p className="font-body text-gray-500 text-sm leading-relaxed mb-8">Your account is verified and ready to go. Download Financials Studio to start generating professional financial statements.</p>

        <Link to="/download" className="block w-full bg-brand-navy text-white py-3 rounded-lg text-sm font-semibold hover:bg-brand-blue transition-colors mb-4 text-center">Download Financials Studio</Link>

        <Link to="/login" className="text-sm text-gray-400 hover:text-brand-navy transition-colors">Go to Login</Link>
      </div>
    </section>
  );
}
