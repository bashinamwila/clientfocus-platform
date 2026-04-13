export default function Blog() {
  const articles = [
    { tag: 'Business Growth', title: '5 Signs Your Business Has Outgrown Spreadsheets', date: 'March 2026', excerpt: 'Spreadsheets are a great starting point, but there comes a time when they hold your business back. Here are the warning signs that it is time to move to proper financial statement tools.' },
    { tag: 'Compliance', title: 'Understanding IFRS for SMEs: A Practical Guide', date: 'February 2026', excerpt: 'IFRS for SMEs can seem overwhelming at first. This guide breaks down the key requirements into plain language and shows you what matters most for your financial reporting.' },
    { tag: 'Audit Preparation', title: 'How to Prepare for Your First Audit', date: 'January 2026', excerpt: 'Your first audit does not have to be stressful. With the right preparation and organised records, the process can be smooth and straightforward. Here is what to expect and how to get ready.' },
    { tag: 'Efficiency', title: 'The True Cost of Manual Bookkeeping', date: 'December 2025', excerpt: 'Manual bookkeeping costs more than you think. Beyond the hours spent on data entry, there are hidden costs in errors, missed deductions, and delayed decision-making.' },
  ];

  return (
    <>
      <section className="bg-brand-navy pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl text-white mb-4">Blog</h1>
          <p className="font-body text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">Insights, guides, and updates from the Financials Studio team</p>
        </div>
      </section>

      <section className="bg-brand-bg py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((a, i) => (
              <article key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
                <div className="p-6 flex flex-col flex-1">
                  <span className="inline-block bg-brand-bg text-brand-navy text-xs font-semibold px-3 py-1 rounded-full mb-4 w-fit">{a.tag}</span>
                  <h2 className="font-bold text-brand-navy text-xl mb-2">{a.title}</h2>
                  <p className="font-body text-gray-500 text-sm mb-3">{a.date}</p>
                  <p className="font-body text-gray-600 text-sm leading-relaxed flex-1 line-clamp-2">{a.excerpt}</p>
                  <a href="#" className="text-brand-blue text-sm font-semibold hover:text-brand-navy transition-colors mt-4 inline-block">Read more &rarr;</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
