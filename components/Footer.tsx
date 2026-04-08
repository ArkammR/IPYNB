'use client';

import { WHATSAPP_NUMBER } from '@/lib/constants';
import { openWhatsApp } from '@/lib/utils';

export default function Footer() {
  const handleCTA = () => {
    openWhatsApp("Hi! I'd like to replace my manual system with a custom IPYNB solution.", WHATSAPP_NUMBER);
  };

  return (
    <footer className="bg-brandNavy text-white">
      {/* CTA Block */}
      <div className="max-w-4xl mx-auto px-6 py-32 text-center">
        <h2 className="font-display font-bold text-4xl lg:text-5xl tracking-tight mb-6">
          Ready to Replace Your<br />
          <span className="text-brandTeal">Ledger with a System?</span>
        </h2>
        <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
          Bespoke builds starting from LKR 65,000. No monthly fees. Lifetime support.
        </p>
        <button
          onClick={handleCTA}
          className="bg-brandTeal text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-teal-600 transition-colors"
        >
          Chat on WhatsApp
        </button>
      </div>

      {/* Footer Links */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-display font-bold text-white">
            IPYNB <span className="text-brandTeal">Solutions</span>
          </p>
          <div className="flex gap-8 text-sm text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Support</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Documentation</a>
          </div>
          <p className="text-slate-500 text-sm">© 2026 IPYNB Solutions. Made with ❤️ for Sri Lankan Business.</p>
        </div>
      </div>
    </footer>
  );
}
