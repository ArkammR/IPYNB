'use client';

import { WHATSAPP_NUMBER } from '@/lib/constants';
import { openWhatsApp } from '@/lib/utils';

export default function Hero() {
  const handleBrowse = () => {
    document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    openWhatsApp('Hi! I\'m interested in IPYNB.site solutions. Can you tell me more?', WHATSAPP_NUMBER);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-amber-50 pt-16">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Floating Icons - Sri Lanka themed */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] left-[10%] text-5xl opacity-10 animate-float">🏝️</div>
        <div className="absolute top-[20%] right-[15%] text-5xl opacity-10 animate-float" style={{ animationDelay: '1s' }}>
          📊
        </div>
        <div className="absolute top-[60%] left-[5%] text-5xl opacity-10 animate-float" style={{ animationDelay: '2s' }}>
          🌴
        </div>
        <div className="absolute top-[70%] right-[10%] text-5xl opacity-10 animate-float" style={{ animationDelay: '1.5s' }}>
          💼
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-grotesk text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-green-700 via-emerald-600 to-amber-600 bg-clip-text text-transparent mb-6 leading-tight">
          Sri Lanka's Premier Business Solutions
        </h1>

        <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed">
          Jupyter Notebooks, POS Systems, Billing Solutions, and Business Websites designed for Sri Lankan enterprises. Trusted by 500+ businesses across the island.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            onClick={handleBrowse}
            className="px-8 py-3 bg-gradient-to-r from-green-700 to-emerald-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all hover:-translate-y-0.5"
          >
            Explore Our Solutions
          </button>
          <button
            onClick={handleWhatsApp}
            className="px-8 py-3 bg-whatsapp text-white rounded-lg font-semibold hover:bg-green-600 transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            Chat on WhatsApp
          </button>
        </div>

        {/* Trust Bar */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center flex-wrap p-6 bg-white/70 backdrop-blur-md rounded-2xl border border-emerald-200/50 shadow-lg">
          <div className="flex items-center gap-2">
            <strong className="text-green-700">500+</strong>
            <span className="text-gray-700">Sri Lankan businesses</span>
          </div>
          <div className="flex items-center gap-2">
            <strong className="text-green-700">4.8/5</strong>
            <span className="text-gray-700">from 180+ reviews</span>
          </div>
          <div className="flex items-center gap-2">
            <strong className="text-green-700">24/7</strong>
            <span className="text-gray-700">WhatsApp support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
