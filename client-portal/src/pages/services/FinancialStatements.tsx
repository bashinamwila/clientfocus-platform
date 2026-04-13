import { Link } from 'react-router-dom';

export default function FinancialStatements() {
  return (
    <>
      <section className="bg-brand-navy pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Financial Statement Preparation</h1>
          <p className="font-body text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">Generate IFRS and SME-compliant financial statements from your source documents or Trial Balance</p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="font-body text-gray-600 text-lg leading-relaxed mb-12">
            Financials Studio takes the manual work out of financial statement preparation. Download the desktop app, point it at the folder containing your client's invoices, receipts, bank statements, or a completed Trial Balance — and receive professionally formatted, standards-compliant financial statements ready for review, filing, or audit. Every figure is traced back to its original source, ensuring full transparency and accuracy.
          </p>

          <h2 className="font-display text-2xl md:text-3xl font-bold text-brand-navy mb-8">What we generate</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {[
              { t: 'Statement of Profit or Loss', d: 'A complete income statement showing revenue, cost of sales, operating expenses, and net profit for your reporting period.' },
              { t: 'Statement of Financial Position', d: 'A detailed balance sheet listing assets, liabilities, and equity with proper classification into current and non-current categories.' },
              { t: 'Statement of Cash Flows', d: 'Cash flow analysis broken down by operating, investing, and financing activities, reconciled to your bank balances.' },
              { t: 'Statement of Changes in Equity', d: 'Tracks movements in share capital, retained earnings, and reserves throughout the reporting period.' },
            ].map((c, i) => (
              <div key={i} className="bg-brand-bg rounded-xl p-6">
                <h3 className="font-semibold text-brand-navy text-lg mb-2">{c.t}</h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl md:text-3xl font-bold text-brand-navy mb-6">How it works</h2>
          <ol className="space-y-4 font-body text-gray-600 text-lg leading-relaxed">
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-brand-navy text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
              <span><strong className="text-brand-navy">Select your client folder</strong> — Download Financials Studio, open the app, and point it at the folder containing your invoices, receipts, bank statements, or Trial Balance.</span>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-brand-navy text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
              <span><strong className="text-brand-navy">Automated processing</strong> — Transactions are extracted, categorised against your Chart of Accounts, and reconciled. Discrepancies are flagged for review.</span>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-brand-navy text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
              <span><strong className="text-brand-navy">Review and download</strong> — Your completed financial statements are presented for review, with every figure linked to its source document.</span>
            </li>
          </ol>
        </div>
      </section>

      <section className="bg-brand-navy py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Ready to get started?</h2>
          <p className="font-body text-gray-300 text-lg mb-8 max-w-xl mx-auto">Generate your first set of financial statements in minutes, not days.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/create-account" className="bg-white text-brand-navy px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors text-center">Create Account</Link>
            <Link to="/pricing" className="border border-white text-white px-8 py-3 rounded font-semibold hover:bg-white/10 transition-colors text-center">View Pricing</Link>
          </div>
        </div>
      </section>
    </>
  );
}
