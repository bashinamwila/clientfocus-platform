import { Link } from 'react-router-dom';

const StarIcon = () => (
  <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
);

export default function SmallBusinesses() {
  return (
    <>
      <section className="bg-brand-bg pt-20 pb-20 md:pb-28">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-brand-blue text-sm font-semibold tracking-widest uppercase mb-4">For Small Businesses</p>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-brand-navy uppercase leading-tight tracking-wide mb-6">Get Your Books Done Without The Overhead</h1>
          <p className="font-body text-brand-charcoal text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10">Stop spending money on manual bookkeeping that doesn't scale. Generate professional, audit-ready financial statements from the documents you already have.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/create-account" className="bg-brand-navy text-white px-8 py-3 rounded text-base font-semibold hover:bg-brand-blue transition-colors w-full sm:w-auto text-center">Start Free Trial</Link>
            <button className="bg-transparent text-brand-navy border-2 border-brand-navy px-8 py-3 rounded text-base font-semibold hover:bg-brand-navy hover:text-white transition-colors w-full sm:w-auto">Request a Demo</button>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-brand-blue text-sm font-semibold tracking-widest uppercase mb-3">The Challenge</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-navy">Growing businesses need growing clarity</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { t: 'Outgrowing Spreadsheets', d: "Your business has grown past the point where a single Excel file can track everything. But a full accounting department isn't in the budget yet." },
              { t: 'Compliance Pressure', d: 'ZRA, auditors, and investors all want properly formatted financial statements. Producing them manually is slow and error-prone.' },
              { t: 'Scattered Records', d: 'Invoices in email, receipts in drawers, bank statements in PDFs. Getting a clear financial picture means gathering it all first.' },
            ].map((p, i) => (
              <div key={i} className="bg-brand-bg rounded-xl p-8">
                <h3 className="font-body font-bold text-lg text-brand-charcoal mb-2">{p.t}</h3>
                <p className="font-body text-gray-500 text-sm leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-bg py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-brand-blue text-sm font-semibold tracking-widest uppercase mb-3">How It Works</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-navy">From shoebox to financial statements in three steps</h2>
          </div>
          <div className="flex flex-col items-start max-w-xl mx-auto">
            {[
              { n: '1', t: 'Select Your Folder', d: 'Download Financials Studio, open the app, and point it at the folder containing your invoices, bank statements, and spreadsheets — or start from a Trial Balance.' },
              { n: '2', t: 'Automated Processing', d: 'Financials Studio extracts, categorises, reconciles, and maps every transaction to the Chart of Accounts.' },
              { n: '3', t: 'Review & Deliver', d: 'Review your Financial Statements, Management Accounts, or export directly to Xero or QuickBooks.' },
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

      <section className="bg-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-brand-blue text-sm font-semibold tracking-widest uppercase mb-3">Why Small Businesses Choose Us</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-navy">Built for businesses that move fast</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { t: 'No Accounting Department Needed', d: 'Get financial statements and management accounts without the headcount. Financials Studio does the heavy lifting.' },
              { t: 'Investor & Audit Ready', d: 'Generate IFRS and SME-compliant statements that satisfy auditors, banks, and investors.' },
              { t: 'Straight to Xero or QuickBooks', d: 'Export source documents directly into your accounting platform. No manual re-entry, no switching tools.' },
              { t: 'Full Traceability', d: 'Every figure links back to the original invoice or bank statement. Answer any question about your numbers instantly.' },
            ].map((b, i) => (
              <div key={i} className="bg-brand-bg rounded-xl p-8">
                <h3 className="font-body font-bold text-lg text-brand-charcoal mb-2">{b.t}</h3>
                <p className="font-body text-gray-500 text-sm leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-bg py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-brand-blue text-sm font-semibold tracking-widest uppercase mb-8">What Our Clients Say</p>
          <div className="flex gap-1 justify-center mb-6">{[...Array(5)].map((_, i) => <StarIcon key={i} />)}</div>
          <blockquote className="font-body text-gray-600 text-lg md:text-xl leading-relaxed mb-8 italic">"The source traceability feature alone justified the switch. Auditors can click any figure and see the original invoice. It's cut our audit prep time by 70%."</blockquote>
          <div className="flex items-center justify-center gap-4">
            <img src="/images/james_banda.jpeg" alt="James Banda" className="w-14 h-14 rounded-full object-cover" />
            <div className="text-left">
              <p className="text-base font-semibold text-brand-charcoal">James Banda</p>
              <p className="font-body text-sm text-gray-400">CFO, Lusaka Manufacturing Group</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-navy py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">Ready to get your books done?</h2>
          <p className="font-body text-gray-300 text-base md:text-lg mb-10 max-w-xl mx-auto">Join small businesses who have already streamlined their financial reporting. What takes a bookkeeper days, Financials Studio completes in about an hour.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/create-account" className="bg-white text-brand-navy px-8 py-3 rounded text-base font-semibold hover:bg-gray-100 transition-colors w-full sm:w-auto text-center">Create Your Account</Link>
            <button className="bg-transparent text-white border-2 border-white/40 px-8 py-3 rounded text-base font-semibold hover:border-white hover:bg-white/10 transition-colors w-full sm:w-auto">Schedule a Demo</button>
          </div>
        </div>
      </section>
    </>
  );
}
