export default function Contact() {
  return (
    <>
      <section className="bg-brand-navy pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl text-white mb-4">Contact Us</h1>
          <p className="font-body text-gray-300 text-lg max-w-2xl mx-auto">Get in touch with the Client Focus Solutions team</p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="font-display text-2xl text-brand-charcoal mb-6">Send Us a Message</h2>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input type="text" id="name" name="name" required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-transparent" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" id="email" name="email" required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-transparent" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <select id="subject" name="subject" required defaultValue="" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-transparent bg-white">
                    <option value="" disabled>Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="sales">Sales</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea id="message" name="message" rows={5} required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-transparent resize-vertical"></textarea>
                </div>
                <button type="submit" className="bg-brand-navy text-white px-8 py-2.5 rounded-lg text-sm font-semibold hover:bg-brand-blue transition-colors">Send</button>
              </form>
            </div>

            <div>
              <h2 className="font-display text-2xl text-brand-charcoal mb-6">Contact Details</h2>
              <div className="bg-brand-bg rounded-xl p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold text-brand-charcoal uppercase tracking-wider mb-1">Email</h3>
                    <a href="mailto:info@clientfocus.zm" className="text-brand-blue hover:underline text-sm">info@clientfocus.zm</a>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-brand-charcoal uppercase tracking-wider mb-1">Phone</h3>
                    <p className="font-body text-gray-600 text-sm">+260 XXX XXX XXX</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-brand-charcoal uppercase tracking-wider mb-1">Address</h3>
                    <p className="font-body text-gray-600 text-sm">Lusaka, Zambia</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-brand-charcoal uppercase tracking-wider mb-1">Business Hours</h3>
                    <p className="font-body text-gray-600 text-sm">Monday – Friday, 08:00 – 17:00 CAT</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
