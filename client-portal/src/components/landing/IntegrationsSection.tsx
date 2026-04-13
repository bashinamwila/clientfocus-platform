export default function IntegrationsSection() {
  return (
    <section className="bg-brand-bg pb-20 md:pb-28">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-display font-bold text-xl md:text-2xl text-brand-charcoal mb-3">Export to Quickbooks or Xero</h2>
        <p className="font-body text-gray-500 text-base md:text-lg max-w-xl mx-auto mb-10">Connect to QuickBooks or Xero and export sources documents to your accounting system</p>
        <div className="flex justify-center items-center gap-8 md:gap-12">
          <img src="/images/quickbook-removebg-preview.png" alt="QuickBooks" className="w-20 h-20 md:w-28 md:h-28 object-contain" />
          <img src="/images/xero-removebg-preview.png" alt="Xero" className="w-20 h-20 md:w-28 md:h-28 object-contain" />
        </div>
      </div>
    </section>
  );
}
