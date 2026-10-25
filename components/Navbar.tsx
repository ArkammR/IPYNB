'use client';

import { useState, useEffect } from 'react';
import { WHATSAPP_NUMBER } from '@/lib/constants';
import { openWhatsApp } from '@/lib/utils';

const NAV_LINKS = [
  { href: '#solutions', label: 'Solutions' },
  { href: '#work', label: 'Our Work' },
  { href: '#process', label: 'Process' },
  { href: '#pricing', label: 'Pricing' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleConsult = () => {
    openWhatsApp("Hi IPYNB! I saw your website and I'd like to book a free consultation to discuss a system for my business.", WHATSAPP_NUMBER);
  };

  return (
    <nav className={`fixed top-0 w-full z-[1000] transition-all duration-300 ${
      isScrolled
        ? 'bg-white/70 backdrop-blur-xl backdrop-saturate-150 border-b border-line shadow-[0_1px_12px_rgba(20,23,28,0.06)]'
        : 'bg-white/40 backdrop-blur-md border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="font-display font-bold text-xl tracking-tight flex items-center gap-1.5">
          <span className="text-ink">IPYNB</span>
          <span className="text-brandTeal">Solutions</span>
        </a>

        {/* Nav links */}
        <ul className="hidden md:flex gap-8 list-none">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-muted font-medium text-sm hover:text-ink transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={handleConsult}
          className="bg-brandTeal hover:bg-[#007575] text-white px-5 py-2 rounded-md text-sm font-semibold transition-colors duration-200"
        >
          Contact
        </button>
      </div>
    </nav>
  );
}
