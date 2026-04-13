import { Link } from 'react-router-dom';

const StarIcon = () => (
  <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
);

export default function AccountingFirms() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-bg pt-20 pb-20 md:pb-28">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-brand-blue text-sm font-semibold tracking-widest uppercase mb-4">For Accounting Firms</p>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-brand-navy uppercase leading-tight tracking-wide mb-6">Scale Your Practice Without Scaling Your Team</h1>
          <p className="font-body text-brand-charcoal text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10">Automate the grunt work of data entry and financial statement preparation. Process more clients in less time without sacrificing accuracy or compliance.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/create-account" className="bg-brand-navy text-white px-8 py-3 rounded text-base font-semibold hover:bg-brand-blue transition-colors w-full sm:w-auto text-center">Start Free Trial</Link>
            <button className="bg-transparent text-brand-navy border-2 border-brand-navy px-8 py-3 rounded text-base font-semibold hover:bg-brand-navy hover:text-white transition-colors w-full sm:w-auto">Request a Demo</button>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-brand-blue text-sm font-semibold tracking-widest uppercase mb-3">The Challenge</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-navy">Your team is drowning in data entry</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand-bg rounded-xl p-8">
              <div className="w-10 h-10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-navy" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
              </div>
              <h3 className="font-body font-bold text-lg text-brand-charcoal mb-2">Manual Data Entry</h3>
              <p className="font-body text-gray-500 text-sm leading-relaxed">Hours spent re-keying invoices, receipts, and bank statements into spreadsheets and accounting systems.</p>
            </div>
            <div className="bg-brand-bg rounded-xl p-8">
              <div className="w-10 h-10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-navy" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>
              </div>
              <h3 className="font-body font-bold text-lg text-brand-charcoal mb-2">Inconsistent Source Documents</h3>
              <p className="font-body text-gray-500 text-sm leading-relaxed">Every client delivers records differently — PDFs, photos of receipts, Excel dumps, paper bundles. Standardising them eats your time.</p>
            </div>
            <div className="bg-brand-bg rounded-xl p-8">
              <div className="w-10 h-10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-navy" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" /></svg>
              </div>
              <h3 className="font-body font-bold text-lg text-brand-charcoal mb-2">Audit Season Bottlenecks</h3>
              <p className="font-body text-gray-500 text-sm leading-relaxed">Year-end crunches and audit deadlines create burnout, overtime, and risk of costly errors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-brand-bg py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-brand-blue text-sm font-semibold tracking-widest uppercase mb-3">How It Works</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-navy">From shoebox to financial statements in three steps</h2>
          </div>
          <div className="flex flex-col items-start max-w-xl mx-auto">
            {[
              { n: '1', t: 'Select Your Client Folder', d: "Download Financials Studio, open the app, and point it at the folder containing your client's invoices, bank statements, and spreadsheets." },
              { n: '2', t: 'Automated Processing', d: 'Financials Studio extracts, categorises, reconciles, and maps every transaction to the Chart of Accounts.' },
              { n: '3', t: 'Review & Deliver', d: 'Review audit-ready Trial Balance, P&L, Balance Sheet, and Cash Flow — export as PDF or to Xero/QuickBooks.' },
            ].map((step, i) => (
              <div key={i}>
                {i > 0 && <div className="w-[3px] h-12 bg-gray-300 ml-6"></div>}
                <div className="flex items-start gap-5">
                  <div className="w-[52px] h-[52px] min-w-[52px] rounded-full bg-brand-navy flex items-center justify-center font-bold text-lg text-white">{step.n}</div>
                  <div className="pt-2">
                    <h3 className="font-body font-bold text-lg text-brand-charcoal mb-1">{step.t}</h3>
                    <p className="font-body text-gray-500 text-sm leading-relaxed">{step.d}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-brand-blue text-sm font-semibold tracking-widest uppercase mb-3">Why Firms Choose Us</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-navy">Built for accounting professionals</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { t: 'Process 5x More Clients', d: 'Scale capacity without hiring. What takes a bookkeeper days, Financials Studio completes in about an hour.' },
              { t: 'Audit-Ready Output', d: 'IFRS and SME-compliant statements with full source traceability. Every report is structured correctly and ready for signature.' },
              { t: 'Seamless Integration', d: 'Export directly to QuickBooks or Xero. Fits into your existing workflow without disruption.' },
              { t: 'Complete Transparency', d: 'Every figure deep-linked to its source document. Auditors click, not chase.' },
            ].map((b, i) => (
              <div key={i} className="bg-brand-bg rounded-xl p-8">
                <h3 className="font-body font-bold text-lg text-brand-charcoal mb-2">{b.t}</h3>
                <p className="font-body text-gray-500 text-sm leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-brand-bg py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-brand-blue text-sm font-semibold tracking-widest uppercase mb-8">What Our Clients Say</p>
          <div className="flex gap-1 justify-center mb-6">{[...Array(5)].map((_, i) => <StarIcon key={i} />)}</div>
          <blockquote className="font-body text-gray-600 text-lg md:text-xl leading-relaxed mb-8 italic">"We used to spend 3 days on data entry for each client. Now the financial statements are ready in under an hour. It's completely transformed how we run our practice."</blockquote>
          <div className="flex items-center justify-center gap-4">
            <img src="/images/thabo.jpeg" alt="Thabo Mokoena" className="w-14 h-14 rounded-full object-cover" />
            <div className="text-left">
              <p className="text-base font-semibold text-brand-charcoal">Thabo Mokoena</p>
              <p className="font-body text-sm text-gray-400">Managing Partner, Mokoena & Associates</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">Ready to transform your practice?</h2>
          <p className="font-body text-gray-300 text-base md:text-lg mb-10 max-w-xl mx-auto">Join accounting firms who have already eliminated manual data entry. What takes a bookkeeper days, Financials Studio completes in about an hour.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/create-account" className="bg-white text-brand-navy px-8 py-3 rounded text-base font-semibold hover:bg-gray-100 transition-colors w-full sm:w-auto text-center">Create Your Account</Link>
            <button className="bg-transparent text-white border-2 border-white/40 px-8 py-3 rounded text-base font-semibold hover:border-white hover:bg-white/10 transition-colors w-full sm:w-auto">Schedule a Demo</button>
          </div>
        </div>
      </section>
    </>
  );
}
