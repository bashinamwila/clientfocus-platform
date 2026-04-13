export default function About() {
  return (
    <>
      <section className="bg-brand-navy pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl text-white mb-4">About Client Focus Solutions</h1>
          <p className="font-body text-gray-300 text-lg max-w-2xl mx-auto">Chartered Accountants making professional financial reporting accessible to every business</p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-3xl text-brand-charcoal mb-6">Our Story</h2>
          <p className="font-body text-gray-600 text-lg leading-relaxed mb-4">Client Focus Solutions is a Zambia-based chartered accounting firm. We built Financials Studio to solve a problem we saw every day — businesses struggling with messy records and manual data entry.</p>
          <p className="font-body text-gray-600 text-lg leading-relaxed">Our mission is to make professional financial reporting accessible to accounting firms, freelancers, and small businesses alike. By combining deep accounting expertise with intelligent automation, we created a tool that transforms disorganised financial documents into complete, standards-compliant financial statements.</p>
        </div>
      </section>

      <section className="bg-brand-bg py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-3xl text-brand-charcoal mb-10 text-center">Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { t: 'Accuracy', d: 'Every figure is traceable back to its source document. No black boxes, no guesswork — just reliable numbers you can stand behind.' },
              { t: 'Accessibility', d: 'Professional financial statements should be available to everyone — not just businesses that can afford large accounting teams.' },
              { t: 'Efficiency', d: 'What used to take days of manual work now takes about an hour. Spend less time on data entry and more time on the work that matters.' },
            ].map((m, i) => (
              <div key={i} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
                <h3 className="font-semibold text-brand-charcoal text-lg mb-2">{m.t}</h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed">{m.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl text-brand-charcoal mb-6">Proudly Based in Zambia</h2>
          <p className="font-body text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">We are proudly Zambian, building technology that serves businesses across the region. From our base in Lusaka, we are committed to raising the standard of financial reporting for African businesses — making it faster, more accurate, and more accessible than ever before.</p>
        </div>
      </section>
    </>
  );
}
