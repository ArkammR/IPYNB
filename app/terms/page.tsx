import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — IPYNB Solutions',
  description: 'Terms of Service for IPYNB Solutions.',
};

export default function TermsOfService() {
  return (
    <main className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-brandNavy">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <Link href="/" className="text-brandTeal text-sm font-semibold hover:underline mb-6 block">
            ← Back to Home
          </Link>
          <h1 className="font-display font-bold text-4xl text-white tracking-tight">Terms of Service</h1>
          <p className="text-slate-400 mt-3 text-sm">Last updated: July 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <section className="mb-10">
          <h2 className="font-display font-bold text-2xl text-brandNavy mb-4">1. Agreement</h2>
          <p className="text-slateText leading-relaxed">
            By engaging IPYNB Solutions for any service, you agree to these terms. These terms govern all projects, communications, and deliverables between IPYNB Solutions and the client.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display font-bold text-2xl text-brandNavy mb-4">2. Services</h2>
          <p className="text-slateText leading-relaxed">
            IPYNB Solutions provides custom software development services including POS systems, billing platforms, business websites, and related digital solutions. The exact scope of each project is agreed upon in writing before work begins.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display font-bold text-2xl text-brandNavy mb-4">3. Payment</h2>
          <ul className="list-disc pl-6 text-slateText space-y-2">
            <li>All pricing is quoted in LKR (Sri Lankan Rupees) unless stated otherwise.</li>
            <li>Projects require a deposit before work begins. The deposit amount will be agreed upon per project.</li>
            <li>Final payment is due upon project delivery.</li>
            <li>All payments are one-time unless a retainer or maintenance agreement is separately arranged.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="font-display font-bold text-2xl text-brandNavy mb-4">4. Delivery & Timeline</h2>
          <p className="text-slateText leading-relaxed">
            Project timelines are estimated at the start of each engagement. Delays caused by the client (e.g., late content, feedback, or access) may extend the timeline. IPYNB Solutions will communicate any changes promptly.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display font-bold text-2xl text-brandNavy mb-4">5. Ownership</h2>
          <p className="text-slateText leading-relaxed">
            Upon full payment, the client owns the delivered system or website. IPYNB Solutions retains the right to showcase the work in its portfolio unless the client requests otherwise in writing.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display font-bold text-2xl text-brandNavy mb-4">6. Support</h2>
          <p className="text-slateText leading-relaxed">
            Post-delivery support is provided via WhatsApp for the duration agreed in the project scope. Support covers bug fixes and questions related to the delivered system. New features or major changes are scoped separately.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display font-bold text-2xl text-brandNavy mb-4">7. Limitation of Liability</h2>
          <p className="text-slateText leading-relaxed">
            IPYNB Solutions is not liable for any indirect, incidental, or consequential damages arising from the use or inability to use a delivered system. Our total liability is limited to the amount paid for the specific project.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display font-bold text-2xl text-brandNavy mb-4">8. Governing Law</h2>
          <p className="text-slateText leading-relaxed">
            These terms are governed by the laws of Sri Lanka. Any disputes will be resolved through good-faith negotiation first, and if necessary, through the appropriate courts of Sri Lanka.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display font-bold text-2xl text-brandNavy mb-4">9. Contact</h2>
          <p className="text-slateText leading-relaxed">
            For questions about these terms, contact us at <a href="mailto:info@ipynb.site" className="text-brandTeal hover:underline">info@ipynb.site</a>.
          </p>
        </section>
      </div>
    </main>
  );
}
