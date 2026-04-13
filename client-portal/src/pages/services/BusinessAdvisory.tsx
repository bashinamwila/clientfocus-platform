import { Link } from 'react-router-dom';

export default function BusinessAdvisory() {
  return (
    <>
      <section className="bg-brand-navy pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Business Advisory</h1>
          <p className="font-body text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">Management accounts and financial insights for smarter decisions</p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="font-body text-gray-600 text-lg leading-relaxed mb-12">
            Financial statements are not just for compliance — they are a window into the health of your business. Financials Studio generates management accounts and financial breakdowns that help you understand where your money is going, which revenue streams are growing, and where to focus your efforts. Turn your accounting data into actionable business intelligence.
          </p>

          <h2 className="font-display text-2xl md:text-3xl font-bold text-brand-navy mb-8">Insights that drive decisions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { t: 'Management Accounts', d: 'Generate monthly or quarterly management reports from your source documents, giving you a clear picture of financial performance without waiting for year-end.' },
              { t: 'Financial Insights', d: 'Understand revenue trends, expense patterns, and margin analysis. See which areas of your business are performing and which need attention.' },
              { t: 'Growth Planning', d: 'Use data-driven financial breakdowns to plan investments, manage cash flow, and make confident decisions about the direction of your business.' },
            ].map((c, i) => (
              <div key={i} className="bg-brand-bg rounded-xl p-6">
                <h3 className="font-semibold text-brand-navy text-lg mb-2">{c.t}</h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-navy py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Ready to get started?</h2>
          <p className="font-body text-gray-300 text-lg mb-8 max-w-xl mx-auto">Turn your financial data into the insights you need to grow.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/create-account" className="bg-white text-brand-navy px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors text-center">Create Account</Link>
            <Link to="/pricing" className="border border-white text-white px-8 py-3 rounded font-semibold hover:bg-white/10 transition-colors text-center">View Pricing</Link>
          </div>
        </div>
      </section>
    </>
  );
}
