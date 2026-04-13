import { Link } from 'react-router-dom';

export default function IfrsComplianceChecklist() {
  const items = [
    { t: 'Statement of Financial Position (Balance Sheet)', d: 'Assets, liabilities, and equity classified and presented in accordance with IFRS for SMEs Section 4.' },
    { t: 'Statement of Comprehensive Income (P&L)', d: 'Revenue, expenses, and profit or loss presented with proper line-item classification per Section 5.' },
    { t: 'Statement of Changes in Equity', d: 'Movements in equity components including retained earnings, share capital, and reserves per Section 6.' },
    { t: 'Statement of Cash Flows', d: 'Cash inflows and outflows classified into operating, investing, and financing activities per Section 7.' },
    { t: 'Notes to Financial Statements', d: 'Supporting notes with accounting policies, explanatory information, and required disclosures per Section 8.' },
    { t: "Director's Responsibilities Statement", d: "A template statement of directors' responsibilities for the preparation of financial statements." },
    { t: 'Proper Classification of Current/Non-Current Items', d: 'Assets and liabilities are automatically classified as current or non-current based on the reporting period and maturity dates.' },
    { t: 'Consistent Accounting Policy Disclosures', d: "Accounting policies are disclosed consistently across all statements, ensuring alignment with the entity's chosen framework." },
  ];

  return (
    <>
      <section className="bg-brand-navy pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl text-white mb-4">IFRS Compliance Checklist</h1>
          <p className="font-body text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">How Financials Studio meets IFRS for SMEs reporting standards</p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="font-body text-gray-600 text-lg mb-10">Financials Studio generates outputs that align with the IFRS for SMEs framework. Every financial statement pack includes the following components, structured for professional review and audit readiness.</p>

          <div className="space-y-6 mb-12">
            {items.map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 bg-brand-bg rounded-xl">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-brand-navy text-lg">{item.t}</h3>
                  <p className="font-body text-gray-600 text-sm mt-1">{item.d}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-brand-navy/5 border border-brand-navy/10 rounded-xl p-6">
            <p className="font-body text-gray-700 leading-relaxed"><strong className="text-brand-navy">Audit-ready by design.</strong> All outputs from Financials Studio are structured and formatted to support the audit review process. Line items are traceable to source documents, and the statement pack follows the presentation and disclosure requirements expected by external auditors.</p>
          </div>
        </div>
      </section>

      <section className="bg-brand-bg py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl text-brand-navy mb-4">Generate IFRS-Compliant Statements</h2>
          <p className="font-body text-gray-600 mb-8">Start producing financial statements that meet international reporting standards.</p>
          <Link to="/create-account" className="inline-block bg-brand-navy text-white px-8 py-3 rounded-lg text-base font-semibold hover:bg-brand-blue transition-colors">Get Started Free</Link>
        </div>
      </section>
    </>
  );
}
