import { Link } from 'react-router-dom';

export default function BookkeepingAutomation() {
  return (
    <>
      <section className="bg-brand-navy pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Bookkeeping Automation</h1>
          <p className="font-body text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">Automated data extraction, categorisation, and Chart of Accounts mapping</p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="font-body text-gray-600 text-lg leading-relaxed mb-12">
            Stop spending hours manually entering transactions. Financials Studio reads your invoices, receipts, and bank statements, extracts the relevant data, and maps every transaction to the correct account in your Chart of Accounts. The entire process runs within the application — your data never leaves your machine.
          </p>

          <h2 className="font-display text-2xl md:text-3xl font-bold text-brand-navy mb-8">What gets automated</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { t: 'Data Extraction', d: 'Reads invoices, receipts, and bank statements to extract dates, amounts, descriptions, and reference numbers automatically.' },
              { t: 'Smart Categorisation', d: 'Maps each transaction to the appropriate account in your Chart of Accounts, following standard accounting conventions and your business context.' },
              { t: 'Reconciliation', d: 'Matches transactions across documents and reconciles balances, flagging discrepancies for your review before finalising.' },
            ].map((c, i) => (
              <div key={i} className="bg-brand-bg rounded-xl p-6">
                <h3 className="font-semibold text-brand-navy text-lg mb-2">{c.t}</h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>

          <div className="bg-brand-bg rounded-xl p-8">
            <h3 className="font-semibold text-brand-navy text-lg mb-3">Everything happens inside Financials Studio</h3>
            <p className="font-body text-gray-600 leading-relaxed">
              Bookkeeping automation is built into the core of Financials Studio. When you select a folder of source documents and start an analysis, the application scans every file, extracts transaction data, categorises it against your Chart of Accounts, and reconciles the results — all before generating your financial statements. There is no separate setup or configuration required. Simply point Financials Studio at your documents and let it handle the rest.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand-navy py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Ready to get started?</h2>
          <p className="font-body text-gray-300 text-lg mb-8 max-w-xl mx-auto">Automate your bookkeeping and free up hours every week.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/create-account" className="bg-white text-brand-navy px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors text-center">Create Account</Link>
            <Link to="/pricing" className="border border-white text-white px-8 py-3 rounded font-semibold hover:bg-white/10 transition-colors text-center">View Pricing</Link>
          </div>
        </div>
      </section>
    </>
  );
}
