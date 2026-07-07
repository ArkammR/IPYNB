import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — IPYNB Solutions',
  description: 'Privacy Policy for IPYNB Solutions. Learn how we handle your data.',
};

export default function PrivacyPolicy() {
  return (
    <main className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-brandNavy">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <Link href="/" className="text-brandTeal text-sm font-semibold hover:underline mb-6 block">
            ← Back to Home
          </Link>
          <h1 className="font-display font-bold text-4xl text-white tracking-tight">Privacy Policy</h1>
          <p className="text-slate-400 mt-3 text-sm">Last updated: July 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16 prose prose-slate max-w-none">
        <section className="mb-10">
          <h2 className="font-display font-bold text-2xl text-brandNavy mb-4">1. Who We Are</h2>
          <p className="text-slateText leading-relaxed">
            IPYNB Solutions is a business software agency based in Sri Lanka. We build custom POS systems, billing platforms, and business websites for Sri Lankan enterprises. Our website is <strong>ipynbsolutions.lk</strong>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display font-bold text-2xl text-brandNavy mb-4">2. Information We Collect</h2>
          <p className="text-slateText leading-relaxed mb-4">When you submit the contact form on our website, we collect:</p>
          <ul className="list-disc pl-6 text-slateText space-y-2">
            <li>Full name</li>
            <li>Business name (optional)</li>
            <li>Email address</li>
            <li>Phone number (optional)</li>
            <li>Industry and project details</li>
            <li>Any message you provide</li>
          </ul>
          <p className="text-slateText leading-relaxed mt-4">
            We do not collect payment information, and we do not use cookies for tracking or advertising.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display font-bold text-2xl text-brandNavy mb-4">3. How We Use Your Information</h2>
          <p className="text-slateText leading-relaxed mb-4">We use the information you submit solely to:</p>
          <ul className="list-disc pl-6 text-slateText space-y-2">
            <li>Respond to your inquiry</li>
            <li>Discuss and scope your project</li>
            <li>Contact you about our services</li>
          </ul>
          <p className="text-slateText leading-relaxed mt-4">
            We do not sell, rent, or share your personal information with third parties for marketing purposes.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display font-bold text-2xl text-brandNavy mb-4">4. Third-Party Services</h2>
          <p className="text-slateText leading-relaxed">
            We use <strong>Resend</strong> to deliver contact form emails. Your submitted data is transmitted through Resend's infrastructure to reach our inbox. Resend's privacy policy is available at <a href="https://resend.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brandTeal hover:underline">resend.com/privacy</a>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display font-bold text-2xl text-brandNavy mb-4">5. Data Retention</h2>
          <p className="text-slateText leading-relaxed">
            We retain contact form submissions in our email inbox for as long as necessary to manage the business relationship. You may request deletion of your data at any time by contacting us.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display font-bold text-2xl text-brandNavy mb-4">6. Your Rights</h2>
          <p className="text-slateText leading-relaxed mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 text-slateText space-y-2">
            <li>Request access to the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
          </ul>
          <p className="text-slateText leading-relaxed mt-4">
            To exercise any of these rights, contact us at <a href="mailto:info@ipynb.site" className="text-brandTeal hover:underline">info@ipynb.site</a>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display font-bold text-2xl text-brandNavy mb-4">7. Contact</h2>
          <p className="text-slateText leading-relaxed">
            If you have questions about this privacy policy, please contact us at <a href="mailto:info@ipynb.site" className="text-brandTeal hover:underline">info@ipynb.site</a>.
          </p>
        </section>
      </div>
    </main>
  );
}
