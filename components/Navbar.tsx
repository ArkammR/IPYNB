'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useCartStore } from '@/lib/store';
import { WHATSAPP_NUMBER } from '@/lib/constants';
import { openWhatsApp } from '@/lib/utils';
import Cart from './Cart';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const itemCount = useCartStore((state) => state.getItemCount());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsApp = () => {
    openWhatsApp('Hi! I\'m interested in IPYNB.site solutions. Can you tell me more?', WHATSAPP_NUMBER);
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-[1000] transition-all duration-300 ${
          isScrolled
            ? 'bg-white/98 backdrop-blur-md border-b border-grid/30 shadow-md'
            : 'bg-white/95 backdrop-blur-md border-b border-grid/30'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 font-grotesk text-2xl font-bold bg-gradient-to-r from-green-700 to-amber-600 bg-clip-text text-transparent">
            <Image
              src="/logo.png"
              alt="IPYNB.site Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            IPYNB.site
          </a>

          <ul className="hidden md:flex gap-8 list-none">
            <li>
              <a href="#solutions" className="text-gray-900 font-medium hover:text-orange transition-colors">
                Solutions
              </a>
            </li>
            <li>
              <a href="#pricing" className="text-gray-900 font-medium hover:text-orange transition-colors">
                Pricing
              </a>
            </li>
            <li>
              <a href="#examples" className="text-gray-900 font-medium hover:text-orange transition-colors">
                Examples
              </a>
            </li>
            <li>
              <a href="#support" className="text-gray-900 font-medium hover:text-orange transition-colors">
                Support
              </a>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative text-2xl hover:scale-110 transition-transform"
            >
              🛒
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                  {itemCount}
                </span>
              )}
            </button>
            <button
              onClick={handleWhatsApp}
              className="bg-whatsapp text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              Chat on WhatsApp
            </button>
          </div>
        </div>
      </nav>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
