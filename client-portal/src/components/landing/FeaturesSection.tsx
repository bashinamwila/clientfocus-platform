export default function FeaturesSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-brand-blue text-sm font-semibold tracking-widest uppercase mb-3">Core Features</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-navy mb-4">Everything you need to get your books done</h2>
          <p className="font-body text-gray-500 text-base md:text-lg max-w-2xl mx-auto">Stop chasing files. From raw data to audit-ready statements, all in one place.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6">
            <div className="w-14 h-14 flex items-center justify-center mx-auto mb-5">
              <svg className="w-7 h-7 text-brand-navy" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12-3-3m0 0-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>
            </div>
            <h3 className="font-body font-bold text-lg text-brand-charcoal mb-2">Intelligent Document Convergence</h3>
            <p className="font-body text-gray-500 text-sm leading-relaxed">Drag and drop your Excel spreadsheets, PDF invoices, and CSV bank statements. Our system categorises and converges your raw data into a single source of truth.</p>
          </div>
          <div className="text-center p-6">
            <div className="w-14 h-14 flex items-center justify-center mx-auto mb-5">
              <svg className="w-7 h-7 text-brand-navy" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" /></svg>
            </div>
            <h3 className="font-body font-bold text-lg text-brand-charcoal mb-2">Automated Data Mapping</h3>
            <p className="font-body text-gray-500 text-sm leading-relaxed">Automatically extracts dates, amounts, and tax codes, mapping them directly to your Chart of Accounts with total accuracy, saving you hours of manual entry.</p>
          </div>
          <div className="text-center p-6">
            <div className="w-14 h-14 flex items-center justify-center mx-auto mb-5">
              <svg className="w-7 h-7 text-brand-navy" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" /></svg>
            </div>
            <h3 className="font-body font-bold text-lg text-brand-charcoal mb-2">Automated Statutory Reporting</h3>
            <p className="font-body text-gray-500 text-sm leading-relaxed">Generate full IFRS or SME-compliant financial statements instantly. From the Director's Responsibilities to the P&L and Balance Sheet, every report is audit-ready.</p>
          </div>
          <div className="text-center p-6">
            <div className="w-14 h-14 flex items-center justify-center mx-auto mb-5">
              <svg className="w-7 h-7 text-brand-navy" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6" /></svg>
            </div>
            <h3 className="font-body font-bold text-lg text-brand-charcoal mb-2">Direct Source Traceability</h3>
            <p className="font-body text-gray-500 text-sm leading-relaxed">Every figure in your financial statement is deep-linked back to its original source. Trace any amount directly to the specific invoice or bank statement that generated it.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
