'use client';

import { motion } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';
import { WHATSAPP_NUMBER } from '@/lib/constants';
import { openWhatsApp } from '@/lib/utils';

const QUICK_LINKS = [
  { href: '/solutions', label: 'Solutions', sectionId: 'solutions' },
  { href: '/work', label: 'Our Work', sectionId: 'work' },
  { href: '/process', label: 'Process', sectionId: 'process' },
  { href: '/pricing', label: 'Pricing', sectionId: 'pricing' },
  { href: '/contact', label: 'Contact', sectionId: 'contact' },
];

const SERVICES = ['POS Systems', 'Billing Platforms', 'Business Websites', 'E-Commerce', 'Mobile Apps', 'Custom Systems'];

const SOCIALS = [
  {
    label: 'Facebook',
    href: 'https://facebook.com/ipynbsolutions',
    icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/ipynbsolutions',
    icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/ipynbsolutions',
    icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  },
];

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();

    // If not on home page, navigate to home first
    if (pathname !== '/') {
      router.push('/' + '#' + sectionId);
      return;
    }

    // Smooth scroll to section on same page
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  const handleCTA = () => {
    openWhatsApp("Hi! I'd like to replace my manual system with a custom IPYNB solution.", WHATSAPP_NUMBER);
  };

  return (
    <footer className="bg-brandNavy text-white relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brandTeal/30 to-transparent" />

      {/* CTA Block */}
      <div className="relative z-10">
        <div className="max-w-5xl mx-auto px-6 py-28 text-center">
          {/* Glow orb */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-5"
            style={{ background: 'radial-gradient(circle, #6366F1 0%, transparent 70%)' }} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative z-10"
          >
            <span className="inline-block text-brandTeal text-xs font-bold uppercase tracking-widest mb-6 px-4 py-2 rounded-full glass-teal border border-brandTeal/20">
              Ready to Upgrade?
            </span>
            <h2 className="font-display font-black text-5xl lg:text-6xl tracking-tight mb-6 leading-tight">
              Replace Your Ledger
              <br />
              <span className="gradient-text">with a System That Scales.</span>
            </h2>
            <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto">
              Custom-built systems starting from LKR 65,000. One-time payment. Zero monthly fees. Lifetime support included.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                onClick={handleCTA}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="bg-brandTeal text-white px-10 py-4 rounded-2xl font-black text-lg teal-glow hover:bg-indigo-500 transition-colors flex items-center gap-3"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Chat on WhatsApp
              </motion.button>
              <motion.a
                href="/contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="border border-white/20 text-white px-10 py-4 rounded-2xl font-black text-lg hover:border-brandTeal/50 hover:bg-brandTeal/5 transition-all"
              >
                Send an Inquiry
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <p className="font-display font-black text-xl text-white mb-3">
              IPYNB <span className="text-brandTeal">Solutions</span>
            </p>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Custom-built business systems for Sri Lankan enterprises. Engineering-led. Results-focused.
            </p>
            <div className="flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl glass hover:bg-brandTeal/20 hover:text-brandTeal text-slate-400 flex items-center justify-center transition-all hover:scale-110 border border-white/10"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">Quick Links</p>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    onClick={(e) => handleNavClick(e, link.sectionId)}
                    className="text-slate-300 hover:text-white text-sm transition-colors underline-animate"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">Services</p>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s} className="text-slate-300 text-sm">{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">Contact</p>
            <ul className="space-y-4">
              {[
                { icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', text: 'info@ipynb.site', href: 'mailto:info@ipynb.site' },
                { icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z', text: '+94 72 421 8840', href: 'tel:+94724218840' },
                { icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z', text: 'Colombo, Sri Lanka', href: null },
                { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', text: 'Mon – Sat, 9AM – 5PM', href: null },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-brandTeal flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                  {item.href ? (
                    <a href={item.href} className="text-slate-300 hover:text-white text-sm transition-colors">{item.text}</a>
                  ) : (
                    <span className="text-slate-300 text-sm">{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">© 2026 IPYNB Solutions. Built with ❤️ for Sri Lankan Business.</p>
          <div className="flex gap-6 text-sm text-slate-400">
            <a href="#contact" className="hover:text-white transition-colors underline-animate">Support</a>
            <a href="/privacy" className="hover:text-white transition-colors underline-animate">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors underline-animate">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
