export default function Privacy() {
  return (
    <>
      <section className="bg-brand-navy pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl text-white mb-4">Privacy Policy</h1>
          <p className="font-body text-gray-300 text-lg max-w-2xl mx-auto">How we collect, use, and protect your data</p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="font-body text-gray-500 text-sm mb-10">Effective Date: 1 January 2025</p>

          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-semibold text-brand-charcoal mb-3">1. Information We Collect</h3>
              <p className="font-body text-gray-600 leading-relaxed mb-3">When you create an account or use Financials Studio, we may collect the following information:</p>
              <ul className="list-disc list-inside font-body text-gray-600 leading-relaxed space-y-1.5 ml-2">
                <li><strong>Account information:</strong> Your name, email address, and password when you register for an account.</li>
                <li><strong>Usage data:</strong> Information about how you interact with Financials Studio, including features used, session duration, and error reports.</li>
                <li><strong>Financial documents:</strong> The invoices, receipts, bank statements, and other files you select are processed locally on your device. We do not store or transmit your financial documents to our servers.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-brand-charcoal mb-3">2. How We Use Your Information</h3>
              <p className="font-body text-gray-600 leading-relaxed mb-3">We use the information we collect for the following purposes:</p>
              <ul className="list-disc list-inside font-body text-gray-600 leading-relaxed space-y-1.5 ml-2">
                <li><strong>Account management:</strong> To create and maintain your account, authenticate your identity, and manage your generation purchases.</li>
                <li><strong>Service improvement:</strong> To understand how Financials Studio is used and to improve the product experience.</li>
                <li><strong>Support:</strong> To respond to your enquiries and provide customer support.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-brand-charcoal mb-3">3. Data Storage and Security</h3>
              <p className="font-body text-gray-600 leading-relaxed mb-3">We take the security of your data seriously:</p>
              <ul className="list-disc list-inside font-body text-gray-600 leading-relaxed space-y-1.5 ml-2">
                <li>All account data is encrypted in transit and at rest.</li>
                <li>Your financial documents are processed entirely on your local device. They are never stored on our servers.</li>
                <li>Generated financial statements remain on your device unless you choose to export them to a third-party service.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-brand-charcoal mb-3">4. Third-Party Services</h3>
              <p className="font-body text-gray-600 leading-relaxed mb-3">Financials Studio may integrate with the following third-party services:</p>
              <ul className="list-disc list-inside font-body text-gray-600 leading-relaxed space-y-1.5 ml-2">
                <li><strong>Payment processors:</strong> We use third-party payment processors to handle generation purchases. We do not store your full payment card details.</li>
                <li><strong>Accounting platforms:</strong> If you choose to export your financial statements to Xero or QuickBooks, this connection is initiated by you and governed by their respective privacy policies.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-brand-charcoal mb-3">5. Cookies</h3>
              <p className="font-body text-gray-600 leading-relaxed">We use minimal, session-based cookies solely to maintain your authenticated session. We do not use tracking cookies or third-party advertising cookies.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-brand-charcoal mb-3">6. Your Rights</h3>
              <p className="font-body text-gray-600 leading-relaxed mb-3">You have the right to:</p>
              <ul className="list-disc list-inside font-body text-gray-600 leading-relaxed space-y-1.5 ml-2">
                <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
                <li><strong>Correction:</strong> Request that we correct any inaccurate or incomplete personal data.</li>
                <li><strong>Deletion:</strong> Request that we delete your account and associated personal data.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-brand-charcoal mb-3">7. Contact Us</h3>
              <p className="font-body text-gray-600 leading-relaxed">If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at <a href="mailto:privacy@clientfocus.zm" className="text-brand-blue hover:underline">privacy@clientfocus.zm</a>.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
