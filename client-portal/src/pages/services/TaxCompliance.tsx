import { Link } from 'react-router-dom';

export default function TaxCompliance() {
  return (
    <>
      <section className="bg-brand-navy pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Tax Compliance</h1>
          <p className="font-body text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">ZRA-ready financial outputs with complete audit trails</p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="font-body text-gray-600 text-lg leading-relaxed mb-12">
            Tax compliance in Zambia requires accurate, well-organised financial records that meet Zambia Revenue Authority (ZRA) standards. Financials Studio generates financial statements with the structure, detail, and traceability that tax authorities expect — giving you and your accountant confidence at filing time.
          </p>

          <h2 className="font-display text-2xl md:text-3xl font-bold text-brand-navy mb-8">Built for compliance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { t: 'ZRA-Ready Reporting', d: 'Financial statements are formatted and structured to meet ZRA filing requirements, with proper account classifications and disclosure notes.' },
              { t: 'VAT-Inclusive Processing', d: 'Automatically identifies and separates VAT components from transactions, ensuring accurate tax calculations across all your documents.' },
              { t: 'Complete Audit Trails', d: 'Every figure in your financial statements is traced back to the original source document, providing a clear trail for tax authority reviews.' },
            ].map((c, i) => (
              <div key={i} className="bg-brand-bg rounded-xl p-6">
                <h3 className="font-semibold text-brand-navy text-lg mb-2">{c.t}</h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>

          <div className="bg-brand-bg rounded-xl p-8">
            <h3 className="font-semibold text-brand-navy text-lg mb-3">Work with your accountant</h3>
            <p className="font-body text-gray-600 leading-relaxed">
              Financials Studio generates the financial statements and supporting schedules your accountant needs for tax filing. The outputs are designed to be reviewed by a qualified professional before submission. We recommend working closely with your accountant or tax adviser to ensure all business-specific adjustments are applied and filing deadlines are met.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand-navy py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Ready to get started?</h2>
          <p className="font-body text-gray-300 text-lg mb-8 max-w-xl mx-auto">Stay compliant with financial statements built for Zambian tax requirements.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/create-account" className="bg-white text-brand-navy px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors text-center">Create Account</Link>
            <Link to="/pricing" className="border border-white text-white px-8 py-3 rounded font-semibold hover:bg-white/10 transition-colors text-center">View Pricing</Link>
          </div>
        </div>
      </section>
    </>
  );
}
