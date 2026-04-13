import { useState } from 'react';
import { Link } from 'react-router-dom';

const CheckIcon = () => (
  <svg className="w-5 h-5 text-brand-navy flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
);

const faqItems = [
  { q: 'What is a generation?', a: 'A generation is one complete run of Financials Studio on a set of client data. Each run produces your selected outputs — Financial Statements, Management Accounts, or exports to Xero/QuickBooks.' },
  { q: 'Do generations expire?', a: 'No. Once purchased, your generations remain in your account until you use them.' },
  { q: 'Can I try before I buy?', a: 'Yes. New accounts receive one free generation to test the platform.' },
  { q: 'Where do I purchase generations?', a: 'Generations are purchased directly inside the Financials Studio desktop app. Download it, sign in, and navigate to the purchase section.' },
];

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-bg pt-20 pb-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-brand-blue text-sm font-semibold tracking-widest uppercase mb-4">Pricing</p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-brand-navy uppercase leading-tight tracking-wide mb-4">Simple, transparent pricing</h1>
          <p className="font-body text-brand-charcoal text-base md:text-lg leading-relaxed max-w-xl mx-auto">Pay per generation. No subscriptions, no hidden fees. Purchase generations directly inside Financials Studio.</p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="bg-brand-bg pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col">
              <span className="inline-block bg-brand-bg text-brand-blue text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full mb-6 self-start">From Trial Balance</span>
              <div className="mb-6">
                <span className="font-display font-bold text-4xl text-brand-navy">K1,000</span>
                <span className="text-gray-400 text-base">.00</span>
                <p className="text-gray-400 text-sm mt-1">per generation</p>
              </div>
              <p className="font-body text-gray-500 text-sm mb-6">Start from an existing Trial Balance and generate:</p>
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-center gap-3"><CheckIcon /><span className="text-sm text-brand-charcoal">Financial Statements</span></li>
                <li className="flex items-center gap-3"><CheckIcon /><span className="text-sm text-brand-charcoal">Management Accounts</span></li>
              </ul>
              <Link to="/create-account" className="block text-center bg-brand-navy text-white py-3 rounded-lg text-sm font-semibold hover:bg-brand-blue transition-colors">Get Started</Link>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col border-2 border-brand-navy relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-navy text-white text-xs font-semibold tracking-wider uppercase px-4 py-1 rounded-full">Most Popular</span>
              <span className="inline-block bg-brand-bg text-brand-blue text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full mb-6 self-start">From Source Documents</span>
              <div className="mb-6">
                <span className="font-display font-bold text-4xl text-brand-navy">K2,500</span>
                <span className="text-gray-400 text-base">.00</span>
                <p className="text-gray-400 text-sm mt-1">per generation</p>
              </div>
              <p className="font-body text-gray-500 text-sm mb-6">Start from raw invoices, receipts, and bank statements and generate:</p>
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-center gap-3"><CheckIcon /><span className="text-sm text-brand-charcoal">Financial Statements</span></li>
                <li className="flex items-center gap-3"><CheckIcon /><span className="text-sm text-brand-charcoal">Management Accounts</span></li>
                <li className="flex items-center gap-3"><CheckIcon /><span className="text-sm text-brand-charcoal">Xero Export</span></li>
                <li className="flex items-center gap-3"><CheckIcon /><span className="text-sm text-brand-charcoal">QuickBooks Export</span></li>
              </ul>
              <Link to="/create-account" className="block text-center bg-brand-navy text-white py-3 rounded-lg text-sm font-semibold hover:bg-brand-blue transition-colors">Get Started</Link>
            </div>
          </div>
        </div>
      </section>

      {/* How Purchasing Works */}
      <section className="bg-white py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-brand-navy mb-10">How purchasing works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="w-10 h-10 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-sm mx-auto mb-4">1</div>
              <p className="font-body text-sm text-gray-600 leading-relaxed">Create your free account and download Financials Studio</p>
            </div>
            <div>
              <div className="w-10 h-10 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-sm mx-auto mb-4">2</div>
              <p className="font-body text-sm text-gray-600 leading-relaxed">Select your generation type and the number of generations you need</p>
            </div>
            <div>
              <div className="w-10 h-10 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-sm mx-auto mb-4">3</div>
              <p className="font-body text-sm text-gray-600 leading-relaxed">Pay securely via card or mobile money, then start generating</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-bg py-20 md:py-28">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-brand-blue text-sm font-semibold tracking-widest uppercase mb-3">FAQ</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-navy">Frequently asked questions</h2>
          </div>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-body font-semibold text-brand-charcoal text-sm">{item.q}</span>
                  <svg className={`w-5 h-5 text-gray-400 transition-transform duration-200 flex-shrink-0 ${openFaq === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="font-body text-gray-500 text-sm leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">Ready to get started?</h2>
          <p className="font-body text-gray-300 text-base md:text-lg mb-10 max-w-xl mx-auto">Create your free account and download Financials Studio to purchase your first generations.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/create-account" className="bg-white text-brand-navy px-8 py-3 rounded text-base font-semibold hover:bg-gray-100 transition-colors w-full sm:w-auto text-center">Create Your Account</Link>
            <Link to="/download" className="bg-transparent text-white border-2 border-white/40 px-8 py-3 rounded text-base font-semibold hover:border-white hover:bg-white/10 transition-colors w-full sm:w-auto text-center">Download App</Link>
          </div>
        </div>
      </section>
    </>
  );
}
