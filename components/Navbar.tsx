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
    <nav className={`fixed top-0 w-full z-[1000] transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-white/80 backdrop-blur-md'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="font-display font-bold text-xl text-brandNavy tracking-tight">
          IPYNB <span className="text-brandTeal">Solutions</span>
        </a>

        <ul className="hidden md:flex gap-10 list-none">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-slateText font-medium text-sm hover:text-brandNavy transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={handleConsult}
          className="bg-brandTeal text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-teal-700 transition-colors"
        >
          Free Consultation
        </button>
      </div>
    </nav>
  );
}
