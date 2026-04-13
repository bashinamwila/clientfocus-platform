import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section className="bg-brand-navy py-20 md:py-24">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">Ready to get your books done?</h2>
        <p className="font-body text-gray-300 text-base md:text-lg mb-10 max-w-xl mx-auto">Join accounting firms and businesses who have already made the switch. Start transforming your raw data into professional financial statements today.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/create-account" className="bg-white text-brand-navy px-8 py-3 rounded text-base font-semibold hover:bg-gray-100 transition-colors w-full sm:w-auto text-center">Create Your Account</Link>
          <button className="bg-transparent text-white border-2 border-white/40 px-8 py-3 rounded text-base font-semibold hover:border-white hover:bg-white/10 transition-colors w-full sm:w-auto">Schedule a Demo</button>
        </div>
      </div>
    </section>
  );
}
