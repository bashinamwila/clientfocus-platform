import { Link } from 'react-router-dom';

const SmallCheck = () => (
  <svg className="w-4 h-4 text-brand-cyan flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
);

export default function Download() {
  return (
    <section className="bg-brand-bg pt-20 pb-20 min-h-screen">
      <div className="max-w-lg mx-auto px-4">
        {/* Download card */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 text-center">
          <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-brand-bg flex items-center justify-center">
            <svg className="w-8 h-8 text-brand-navy" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
          </div>

          <h1 className="font-display font-bold text-3xl text-brand-navy mb-3">Download Financials Studio</h1>
          <p className="font-body text-gray-500 text-sm leading-relaxed mb-8">Get started by installing the desktop app for Windows.</p>

          <a href="https://github.com/bashinamwila/finstatement-studio/releases/latest/download/Financials-Studio-Setup.exe" className="w-full flex items-center justify-center gap-3 bg-brand-navy text-white py-3.5 rounded-lg text-sm font-semibold hover:bg-brand-blue transition-colors mb-3">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
            </svg>
            Download for Windows
          </a>

          <p className="font-body text-xs text-gray-400">Windows 10 or later &middot; ~120 MB</p>
        </div>

        {/* System requirements */}
        <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-sm font-semibold text-brand-charcoal mb-4">System requirements</h2>
          <ul className="space-y-2">
            <li className="flex items-center gap-3"><SmallCheck /><span className="font-body text-sm text-gray-600">Windows 10 or later (64-bit)</span></li>
            <li className="flex items-center gap-3"><SmallCheck /><span className="font-body text-sm text-gray-600">4 GB RAM minimum</span></li>
            <li className="flex items-center gap-3"><SmallCheck /><span className="font-body text-sm text-gray-600">500 MB available disk space</span></li>
            <li className="flex items-center gap-3"><SmallCheck /><span className="font-body text-sm text-gray-600">Internet connection required</span></li>
          </ul>
        </div>

        {/* Getting started */}
        <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-sm font-semibold text-brand-charcoal mb-4">Getting started</h2>
          <ol className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 min-w-[1.5rem] rounded-full bg-brand-navy text-white flex items-center justify-center text-xs font-bold">1</span>
              <span className="font-body text-sm text-gray-600 pt-0.5">Run the installer and follow the setup wizard</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 min-w-[1.5rem] rounded-full bg-brand-navy text-white flex items-center justify-center text-xs font-bold">2</span>
              <span className="font-body text-sm text-gray-600 pt-0.5">Sign in with your Financials Studio account</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 min-w-[1.5rem] rounded-full bg-brand-navy text-white flex items-center justify-center text-xs font-bold">3</span>
              <span className="font-body text-sm text-gray-600 pt-0.5">Purchase generations and start processing client data</span>
            </li>
          </ol>
        </div>

        <p className="text-center text-sm text-gray-400 mt-8">Need help? <Link to="/company/contact" className="text-brand-blue hover:underline">Contact support</Link></p>
      </div>
    </section>
  );
}
