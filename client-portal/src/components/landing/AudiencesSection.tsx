export default function AudiencesSection() {
  return (
    <section className="bg-brand-bg py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-brand-blue text-sm font-semibold tracking-widest uppercase mb-3">Who it's for</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-navy">Built for every stage of your business</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <div className="w-10 h-10 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-brand-navy" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" /></svg>
            </div>
            <h3 className="font-body font-bold text-lg text-brand-charcoal mb-2">For Accounting Firms</h3>
            <p className="font-body text-gray-500 text-sm leading-relaxed">Scale your practice by automating the "grunt work" of data entry. Process more clients in less time without sacrificing accuracy.</p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <div className="w-10 h-10 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-brand-navy" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>
            </div>
            <h3 className="font-body font-bold text-lg text-brand-charcoal mb-2">For Freelancers & MSMEs</h3>
            <p className="font-body text-gray-500 text-sm leading-relaxed">Keep your books clean year-round without hiring an expensive full-time bookkeeper. Professional statements at a fraction of the cost.</p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <div className="w-10 h-10 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-brand-navy" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" /></svg>
            </div>
            <h3 className="font-body font-bold text-lg text-brand-charcoal mb-2">For Large Enterprises</h3>
            <p className="font-body text-gray-500 text-sm leading-relaxed">Streamline complex group consolidations and statutory reporting. Ensure compliance across multiple jurisdictions with ease.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
