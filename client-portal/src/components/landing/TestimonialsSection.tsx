const STARS = Array(5).fill(null);

const TESTIMONIALS = [
  {
    quote: "We used to spend 3 days on data entry for each client. Now the financial statements are ready in under an hour. It's completely transformed how we run our practice.",
    name: 'Thabo Mokoena',
    title: 'Managing Partner, Mokoena & Associates',
    avatar: '/images/thabo.jpeg',
  },
  {
    quote: "As a freelance consultant, I dreaded tax season. Financials Studio takes my messy receipts and bank statements and gives me clean financials my accountant actually praises.",
    name: 'Lindiwe Ndlovu',
    title: 'Freelance Business Consultant',
    avatar: '/images/lindiwe-ndlovu.jpeg',
  },
  {
    quote: "The source traceability feature alone justified the switch. Auditors can click any figure and see the original invoice. It's cut our audit prep time by 70%.",
    name: 'James Banda',
    title: 'CFO, Lusaka Manufacturing Group',
    avatar: '/images/james_banda.jpeg',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-brand-blue text-sm font-semibold tracking-widest uppercase mb-3">Testimonials</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-navy">Trusted by accountants and business owners</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-brand-bg rounded-xl p-8 flex flex-col">
              <div className="flex gap-1 mb-4">
                {STARS.map((_, j) => (
                  <svg key={j} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="font-body text-gray-600 text-sm leading-relaxed mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-3 mt-auto">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 flex-shrink-0 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-semibold text-brand-charcoal">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
