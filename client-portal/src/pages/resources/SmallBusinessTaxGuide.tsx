import { Link } from 'react-router-dom';

export default function SmallBusinessTaxGuide() {
  const taxTypes = [
    { t: 'Income Tax', d: 'Tax on your business profits. Rates vary depending on whether you operate as a sole trader, partnership, or company. Companies pay corporate income tax at the applicable rate set by ZRA.' },
    { t: 'Value Added Tax (VAT)', d: 'Required for businesses with annual turnover above the VAT registration threshold. You must charge VAT on taxable supplies and file regular VAT returns.' },
    { t: 'Pay As You Earn (PAYE)', d: 'If you employ staff, you must deduct PAYE from their salaries and remit it to ZRA monthly. This applies to all employers regardless of business size.' },
    { t: 'Withholding Tax', d: 'Deducted at source on certain payments including rent, interest, dividends, and payments to non-residents. You must remit the withheld amount to ZRA within the prescribed period.' },
  ];

  const deadlines = [
    { t: 'Provisional Tax', d: 'Paid quarterly \u2014 due on 31 March, 30 June, 30 September, and 31 December. Estimate your annual income and pay in four equal instalments.' },
    { t: 'Annual Tax Returns', d: 'Filed by 21 June of the following year for companies, or by the date specified in your assessment notice. Late filing incurs automatic penalties.' },
    { t: 'VAT Filing', d: 'VAT returns must be filed by the 18th of the month following the end of each tax period. Ensure your input and output VAT records are accurate and up to date.' },
  ];

  return (
    <>
      <section className="bg-brand-navy pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl text-white mb-4">Small Business Tax Guide</h1>
          <p className="font-body text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">A practical guide to tax compliance for Zambian small businesses</p>
        </div>
      </section>

      {/* Know Your Obligations */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-3xl text-brand-navy mb-6">Know Your Obligations</h2>
          <p className="font-body text-gray-600 text-lg mb-8">Every business operating in Zambia must be registered with the Zambia Revenue Authority (ZRA). Your registration determines which taxes apply to you. Here are the main tax types every small business should understand:</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {taxTypes.map((item, i) => (
              <div key={i} className="bg-brand-bg rounded-xl p-6">
                <h3 className="font-bold text-brand-navy text-lg mb-2">{item.t}</h3>
                <p className="font-body text-gray-600 text-sm">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Deadlines */}
      <section className="bg-brand-bg py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-3xl text-brand-navy mb-6">Key Deadlines</h2>
          <p className="font-body text-gray-600 text-lg mb-8">Missing tax deadlines results in penalties and interest. Keep these critical dates on your calendar:</p>

          <div className="space-y-4">
            {deadlines.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-brand-navy text-white rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-navy">{item.t}</h3>
                    <p className="font-body text-gray-600 text-sm mt-1">{item.d}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Record-Keeping Essentials */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-3xl text-brand-navy mb-6">Record-Keeping Essentials</h2>
          <p className="font-body text-gray-600 text-lg mb-8">Good record-keeping is not just a legal requirement &mdash; it protects your business during audits and helps you make better financial decisions.</p>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-brand-navy text-lg mb-2">What records to keep</h3>
              <ul className="font-body text-gray-600 space-y-2">
                <li className="flex items-start gap-3"><span className="text-brand-cyan mt-1">&bull;</span><span>Sales invoices and receipts for all income received</span></li>
                <li className="flex items-start gap-3"><span className="text-brand-cyan mt-1">&bull;</span><span>Purchase invoices and supplier receipts for all expenses</span></li>
                <li className="flex items-start gap-3"><span className="text-brand-cyan mt-1">&bull;</span><span>Bank statements for every business account</span></li>
                <li className="flex items-start gap-3"><span className="text-brand-cyan mt-1">&bull;</span><span>Payroll records including PAYE and NAPSA contributions</span></li>
                <li className="flex items-start gap-3"><span className="text-brand-cyan mt-1">&bull;</span><span>Contracts, agreements, and asset purchase documents</span></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-brand-navy text-lg mb-2">How long to keep them</h3>
              <p className="font-body text-gray-600">ZRA requires businesses to retain financial records for a minimum of six years. Keep both digital and physical copies where possible, stored securely and organised by financial year.</p>
            </div>

            <div>
              <h3 className="font-bold text-brand-navy text-lg mb-2">Why it matters</h3>
              <p className="font-body text-gray-600">Incomplete records can lead to estimated assessments by ZRA, which are almost always higher than what you would owe with proper documentation. Accurate records also make it easier to claim legitimate deductions and reduce your tax liability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How Financials Studio Helps */}
      <section className="bg-brand-bg py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-3xl text-brand-navy mb-6">How Financials Studio Helps</h2>
          <p className="font-body text-gray-600 text-lg mb-8">Financials Studio simplifies your tax preparation workflow by turning your raw financial documents into structured, professional statements.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-brand-navy text-lg mb-2">Automated Statement Generation</h3>
              <p className="font-body text-gray-600 text-sm">Drop your invoices, bank statements, and receipts into a folder. Financials Studio reads, categorises, and reconciles everything &mdash; then generates your financial statements automatically.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-brand-navy text-lg mb-2">Complete Audit Trails</h3>
              <p className="font-body text-gray-600 text-sm">Every figure in your financial statements is traceable back to its source document. When ZRA asks questions, you have the documentation ready.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl text-brand-navy mb-4">Stay Compliant with Less Effort</h2>
          <p className="font-body text-gray-600 mb-8">Let Financials Studio handle the heavy lifting so you can focus on growing your business.</p>
          <Link to="/create-account" className="inline-block bg-brand-navy text-white px-8 py-3 rounded-lg text-base font-semibold hover:bg-brand-blue transition-colors">Get Started Free</Link>
        </div>
      </section>
    </>
  );
}
