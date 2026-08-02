'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';
import { WHATSAPP_NUMBER } from '@/lib/constants';
import { openWhatsApp } from '@/lib/utils';

const NAV_LINKS = [
  { href: '/solutions', label: 'Solutions', sectionId: 'solutions' },
  { href: '/work', label: 'Our Work', sectionId: 'work' },
  { href: '/process', label: 'Process', sectionId: 'process' },
  { href: '/pricing', label: 'Pricing', sectionId: 'pricing' },
  { href: '/contact', label: 'Contact', sectionId: 'contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setMenuOpen(false);

    // If not on home page, navigate to home first
    if (pathname !== '/') {
      router.push('/' + '#' + sectionId);
      return;
    }

    // Smooth scroll to section on same page
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed navbar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  const handleConsult = () => {
    setMenuOpen(false);
    openWhatsApp(
      "Hi IPYNB! I saw your website and I'd like to book a free consultation to discuss a system for my business.",
      WHATSAPP_NUMBER
    );
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 w-full z-[1000] transition-all duration-500 ${
          isScrolled
            ? 'bg-brandNavy/90 backdrop-blur-2xl shadow-[0_2px_30px_rgba(99,102,241,0.12)] border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="IPYNB"
              width={36}
              height={36}
              className="object-contain transition-transform duration-200 hover:scale-110"
            />
          </a>

          <ul className="hidden md:flex gap-1 list-none">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.sectionId)}
                  className="relative px-4 py-2 text-slate-300 font-medium text-sm hover:text-white transition-colors group rounded-lg hover:bg-white/5 block"
                >
                  {link.label}
                  <span className="absolute bottom-1 left-4 right-4 h-px bg-brandTeal scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA
          <div className="hidden md:flex items-center gap-3">
            <motion.button
              onClick={handleConsult}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="relative overflow-hidden bg-brandTeal text-white px-5 py-2.5 rounded-xl text-sm font-bold teal-glow-sm group"
            >
              <span className="relative z-10">Free Consultation</span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-teal-600 to-brandTeal"
                initial={{ x: '100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </div> */}

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 text-white z-[1001]"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-current rounded-full"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              className="block w-6 h-0.5 bg-current rounded-full"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-current rounded-full"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed inset-0 z-[999] bg-brandNavy/95 menu-overlay flex flex-col items-center justify-center gap-6 md:hidden"
          >
            {/* Decorative orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-10"
              style={{ background: 'radial-gradient(circle, #6366F1 0%, transparent 70%)' }} />

            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.sectionId)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 + 0.1 }}
                className="text-3xl font-display font-black text-white hover:text-brandTeal transition-colors relative z-10"
              >
                {link.label}
              </motion.a>
            ))}

            <motion.button
              onClick={handleConsult}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="mt-4 bg-brandTeal text-white px-10 py-4 rounded-2xl font-black text-lg teal-glow relative z-10"
            >
              Free Consultation
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
