import { Link } from 'react-router-dom';

export default function GettingStarted() {
  const steps = [
    { t: 'Create Your Account', d: 'Sign up at the Financials Studio website and confirm your email address. Your account gives you access to the desktop application and all online features. Registration takes less than a minute.' },
    { t: 'Download Financials Studio', d: 'Install the desktop application on your Windows computer. The installer walks you through setup in a few clicks.' },
    { t: 'Select Your Client Folder', d: "Point the app at the folder containing your client's documents \u2014 invoices, bank statements, spreadsheets, or a Trial Balance. Financials Studio scans the folder and identifies all relevant files automatically." },
    { t: 'Choose Your Generation Type', d: 'Select whether you want to generate financial statements from a Trial Balance or directly from source documents. The system reads, categorises, and reconciles your data, then builds your statements.' },
    { t: 'Review & Deliver', d: 'Review the generated Financial Statements, Management Accounts, or export directly to Xero or QuickBooks. Every output is structured for professional delivery to your clients or auditors.' },
  ];

  return (
    <>
      <section className="bg-brand-navy pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl text-white mb-4">Getting Started Guide</h1>
          <p className="font-body text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">Everything you need to go from signup to your first financial statements</p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="font-body text-gray-600 text-lg mb-12">Follow these five steps to set up Financials Studio and generate your first set of financial statements. The entire process takes just a few minutes.</p>

          {steps.map((s, i) => (
            <div key={i} className="flex gap-6 mb-12">
              <div className="flex-shrink-0 w-12 h-12 bg-brand-navy text-white rounded-full flex items-center justify-center font-bold text-lg">{i + 1}</div>
              <div>
                <h2 className="text-xl font-bold text-brand-navy mb-2">{s.t}</h2>
                <p className="font-body text-gray-600 leading-relaxed">
                  {s.d}
                  {i === 1 && <>{' '}<Link to="/download" className="text-brand-blue hover:text-brand-navy underline font-medium">Download Financials Studio here</Link>.</>}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-bg py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl text-brand-navy mb-4">Ready to start?</h2>
          <p className="font-body text-gray-600 mb-8">Create your free account and generate your first financial statements today.</p>
          <Link to="/create-account" className="inline-block bg-brand-navy text-white px-8 py-3 rounded-lg text-base font-semibold hover:bg-brand-blue transition-colors">Create Account</Link>
        </div>
      </section>
    </>
  );
}
