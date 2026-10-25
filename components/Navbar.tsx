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
        ? 'bg-[#0a0f1a]/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20'
        : 'bg-[#0a0f1a]/80 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="font-display font-bold text-xl tracking-tight flex items-center gap-2">
          <span className="text-white">IP</span>
          <span className="w-px h-5 bg-white/20" />
          <span className="text-white/90 font-light text-sm tracking-widest uppercase">IPYNB</span>
        </a>

        {/* Nav links */}
        <ul className="hidden md:flex gap-8 list-none">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-white/60 font-medium text-sm hover:text-white transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={handleConsult}
          className="bg-brandTeal/90 hover:bg-brandTeal text-white px-5 py-2 rounded-md text-sm font-semibold transition-all duration-200 border border-brandTeal/50 hover:border-brandTeal hover:shadow-[0_0_20px_rgba(0,139,139,0.3)]"
        >
          Contact
        </button>
      </div>
    </nav>
  );
}
