export default function Careers() {
  const jobs = [
    { title: 'Full-Stack Developer', meta: 'Engineering \u00B7 Lusaka \u00B7 Full-time' },
    { title: 'Product Designer', meta: 'Design \u00B7 Lusaka / Remote \u00B7 Full-time' },
    { title: 'Customer Success Manager', meta: 'Operations \u00B7 Lusaka \u00B7 Full-time' },
  ];

  return (
    <>
      <section className="bg-brand-navy pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl text-white mb-4">Careers</h1>
          <p className="font-body text-gray-300 text-lg max-w-2xl mx-auto">Join the team building the future of financial reporting</p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-3xl text-brand-charcoal mb-6">Work With Us</h2>
          <p className="font-body text-gray-600 text-lg leading-relaxed">We're a small, ambitious team of accountants and engineers based in Lusaka, Zambia. We believe great products come from diverse perspectives, deep collaboration, and a genuine desire to solve real problems. If you're passionate about building tools that make a difference for businesses across Africa, we'd love to hear from you.</p>
        </div>
      </section>

      <section className="bg-brand-bg py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-3xl text-brand-charcoal mb-10 text-center">Open Positions</h2>
          <div className="space-y-6">
            {jobs.map((j, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <h3 className="text-lg font-bold text-brand-charcoal mb-2">{j.title}</h3>
                <p className="font-body text-gray-500 text-sm mb-5">{j.meta}</p>
                <a href="#" className="inline-block bg-brand-navy text-white px-6 py-2.5 rounded text-sm font-semibold hover:bg-brand-blue transition-colors">Apply</a>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="font-body text-gray-600 text-lg">Don't see your role? Send your CV to <a href="mailto:careers@clientfocus.zm" className="text-brand-blue font-semibold hover:underline">careers@clientfocus.zm</a></p>
          </div>
        </div>
      </section>
    </>
  );
}
