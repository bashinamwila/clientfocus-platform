import { Link } from 'react-router-dom';

export default function FreelancerFinanceToolkit() {
  return (
    <>
      <section className="bg-brand-navy pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl text-white mb-4">Freelancer Finance Toolkit</h1>
          <p className="font-body text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">Practical tips for managing your finances as a freelancer</p>
        </div>
      </section>

      {/* Separate Personal and Business */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-3xl text-brand-navy mb-4">Separate Personal and Business</h2>
          <p className="font-body text-gray-600 text-lg mb-6">The single most important thing you can do for your freelance finances is to keep personal and business money apart. Open a dedicated business bank account and use it exclusively for client payments, business expenses, and tax savings.</p>
          <p className="font-body text-gray-600 mb-4">This separation makes it dramatically easier to:</p>
          <ul className="font-body text-gray-600 space-y-2 mb-4">
            <li className="flex items-start gap-3"><span className="text-brand-cyan mt-1">&bull;</span><span>Track your actual business income and expenses</span></li>
            <li className="flex items-start gap-3"><span className="text-brand-cyan mt-1">&bull;</span><span>Calculate your tax obligations accurately</span></li>
            <li className="flex items-start gap-3"><span className="text-brand-cyan mt-1">&bull;</span><span>Provide clean records to your accountant or auditor</span></li>
            <li className="flex items-start gap-3"><span className="text-brand-cyan mt-1">&bull;</span><span>Apply for business loans or credit facilities</span></li>
          </ul>
        </div>
      </section>

      {/* Track Every Transaction */}
      <section className="bg-brand-bg py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-3xl text-brand-navy mb-4">Track Every Transaction</h2>
          <p className="font-body text-gray-600 text-lg mb-6">As a freelancer, every receipt matters. Whether it is a client payment, a software subscription, or a taxi to a meeting &mdash; record it. Small expenses add up, and unclaimed deductions mean you pay more tax than necessary.</p>
          <p className="font-body text-gray-600">Get into the habit of filing receipts the same day. Use a simple folder structure on your computer: one folder per month, with subfolders for income and expenses. Digital copies of receipts are accepted by most tax authorities, so take photos of paper receipts immediately.</p>
        </div>
      </section>

      {/* Do Quarterly Reviews */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-3xl text-brand-navy mb-4">Do Quarterly Reviews</h2>
          <p className="font-body text-gray-600 text-lg mb-6">Do not wait until year-end to look at your numbers. Set aside time every three months to review your income, expenses, and profit. This quarterly check-in helps you:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-brand-bg rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-brand-navy text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
              <h3 className="font-bold text-brand-navy mb-2">Spot trends early</h3>
              <p className="font-body text-gray-600 text-sm">Identify whether income is growing, flat, or declining &mdash; and adjust your strategy accordingly.</p>
            </div>
            <div className="bg-brand-bg rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-brand-navy text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="font-bold text-brand-navy mb-2">Estimate taxes owed</h3>
              <p className="font-body text-gray-600 text-sm">Calculate your provisional tax before the deadline instead of scrambling at the last minute.</p>
            </div>
            <div className="bg-brand-bg rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-brand-navy text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="font-bold text-brand-navy mb-2">Catch errors fast</h3>
              <p className="font-body text-gray-600 text-sm">Find missing invoices, duplicate entries, or uncategorised transactions before they become problems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Prepare for Tax Season Early */}
      <section className="bg-brand-bg py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-3xl text-brand-navy mb-4">Prepare for Tax Season Early</h2>
          <p className="font-body text-gray-600 text-lg mb-6">Tax season is stressful only when you are unprepared. If you have been tracking transactions and doing quarterly reviews, preparing your annual return becomes straightforward.</p>
          <p className="font-body text-gray-600 mb-4">Before the deadline, make sure you have:</p>
          <ul className="font-body text-gray-600 space-y-2">
            <li className="flex items-start gap-3"><span className="text-brand-cyan mt-1">&bull;</span><span>All bank statements for the full financial year</span></li>
            <li className="flex items-start gap-3"><span className="text-brand-cyan mt-1">&bull;</span><span>Invoices for every payment you received</span></li>
            <li className="flex items-start gap-3"><span className="text-brand-cyan mt-1">&bull;</span><span>Receipts for every deductible expense</span></li>
            <li className="flex items-start gap-3"><span className="text-brand-cyan mt-1">&bull;</span><span>Records of any assets purchased or disposed of</span></li>
            <li className="flex items-start gap-3"><span className="text-brand-cyan mt-1">&bull;</span><span>Provisional tax payment confirmations</span></li>
          </ul>
        </div>
      </section>

      {/* Use Financials Studio */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-3xl text-brand-navy mb-4">Use Financials Studio</h2>
          <p className="font-body text-gray-600 text-lg mb-6">Financials Studio is built for people who want professional financial statements without the complexity of traditional accounting software. As a freelancer, here is how it helps you:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-brand-navy text-lg mb-2">Drop in your documents</h3>
              <p className="font-body text-gray-600 text-sm">Put your invoices, bank statements, and receipts in a folder. Financials Studio reads and organises them for you.</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-brand-navy text-lg mb-2">Get instant statements</h3>
              <p className="font-body text-gray-600 text-sm">Receive a complete set of financial statements &mdash; Profit &amp; Loss, Balance Sheet, and Cash Flow &mdash; in minutes, not days.</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-brand-navy text-lg mb-2">Share with your accountant</h3>
              <p className="font-body text-gray-600 text-sm">Export your statements and share them directly with your accountant or tax advisor. Everything is formatted and ready for review.</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-brand-navy text-lg mb-2">Stay organised year-round</h3>
              <p className="font-body text-gray-600 text-sm">Run Financials Studio quarterly to keep your records current. When tax season arrives, you are already prepared.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-bg py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl text-brand-navy mb-4">Take Control of Your Freelance Finances</h2>
          <p className="font-body text-gray-600 mb-8">Create your free account and generate your first financial statements in minutes.</p>
          <Link to="/create-account" className="inline-block bg-brand-navy text-white px-8 py-3 rounded-lg text-base font-semibold hover:bg-brand-blue transition-colors">Get Started Free</Link>
        </div>
      </section>
    </>
  );
}
