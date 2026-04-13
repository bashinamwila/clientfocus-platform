const STATEMENTS = [
  { src: '/images/DLPG AFS 2025 - Financial statements - SME-12_page-0001.jpg', alt: 'Statement of Changes in Equity' },
  { src: '/images/DLPG AFS 2025 - Financial statements - SME-11_page-0001.jpg', alt: 'Statement of Financial Position' },
  { src: '/images/DLPG AFS 2025 - Financial statements - SME-10_page-0001.jpg', alt: 'Statement of Profit or Loss' },
];

export default function StatementsSection() {
  return (
    <section id="statements-section" className="bg-brand-bg py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {STATEMENTS.map((s, i) => (
            <div key={i} className="bg-white rounded-lg shadow-lg p-3">
              <img src={s.src} alt={s.alt} className="w-full h-auto" />
            </div>
          ))}
        </div>
        <div className="text-center">
          <h2 className="font-display font-bold text-xl md:text-2xl text-brand-charcoal mb-3">Automated Statutory Reporting</h2>
          <p className="font-body text-gray-500 text-base md:text-lg max-w-2xl mx-auto">Generate full IFRS or SME-compliant financial statements instantly.</p>
        </div>
      </div>
    </section>
  );
}
