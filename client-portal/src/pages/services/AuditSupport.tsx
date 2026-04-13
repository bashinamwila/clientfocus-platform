import { Link } from 'react-router-dom';

export default function AuditSupport() {
  return (
    <>
      <section className="bg-brand-navy pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Audit Support</h1>
          <p className="font-body text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">Every figure traced back to its original source document</p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="font-body text-gray-600 text-lg leading-relaxed mb-12">
            Audit preparation is one of the most time-consuming tasks in accounting. Financials Studio eliminates the scramble by building traceability into every financial statement from the start. When auditors ask where a number comes from, you have the answer — linked directly to the source document.
          </p>

          <h2 className="font-display text-2xl md:text-3xl font-bold text-brand-navy mb-8">Audit-ready from day one</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { t: 'Source Traceability', d: 'Every figure in your financial statements is deep-linked to the invoice, receipt, or bank statement it was derived from. No guesswork, no manual cross-referencing.' },
              { t: 'Audit-Ready Formatting', d: 'Financial statements follow IFRS and IFRS for SMEs standards with proper classifications, disclosure notes, and comparative period formatting that auditors expect.' },
              { t: 'Reduced Prep Time', d: 'What used to take days of pulling files and reconciling schedules now takes hours. Your audit file is assembled as your financial statements are generated.' },
            ].map((c, i) => (
              <div key={i} className="bg-brand-bg rounded-xl p-6">
                <h3 className="font-semibold text-brand-navy text-lg mb-2">{c.t}</h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>

          <div className="bg-brand-bg rounded-xl p-8">
            <svg className="w-10 h-10 text-brand-cyan mb-4" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" /></svg>
            <p className="font-body text-gray-700 text-lg leading-relaxed italic mb-4">
              "We used to spend the better part of a week pulling together schedules and tracking down source documents before our auditors arrived. With Financials Studio, we cut our audit prep time by 70%. Every number is already linked to its source."
            </p>
            <p className="text-brand-navy font-semibold">James Banda</p>
          </div>
        </div>
      </section>

      <section className="bg-brand-navy py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Ready to get started?</h2>
          <p className="font-body text-gray-300 text-lg mb-8 max-w-xl mx-auto">Make your next audit the smoothest one yet.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/create-account" className="bg-white text-brand-navy px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors text-center">Create Account</Link>
            <Link to="/pricing" className="border border-white text-white px-8 py-3 rounded font-semibold hover:bg-white/10 transition-colors text-center">View Pricing</Link>
          </div>
        </div>
      </section>
    </>
  );
}
