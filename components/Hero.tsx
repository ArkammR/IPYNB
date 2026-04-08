'use client';

import Image from 'next/image';
import { WHATSAPP_NUMBER } from '@/lib/constants';
import { openWhatsApp } from '@/lib/utils';

export default function Hero() {
  const handleCTA = () => {
    openWhatsApp("Hi! I'd like to explore a custom solution for my business.", WHATSAPP_NUMBER);
  };

  return (
    <section className="min-h-screen flex items-center bg-white pt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <span className="inline-block text-brandTeal text-sm font-semibold tracking-widest uppercase mb-6">
            Engineering-Led Business Systems
          </span>
          <h1 className="font-display font-bold text-5xl lg:text-6xl text-brandNavy leading-tight tracking-tight mb-6">
            End the Era of<br />
            <span className="text-brandTeal">Pen and Paper.</span>
          </h1>
          <p className="text-slateText text-lg leading-relaxed mb-10 max-w-lg">
            We architect custom-built business systems for Sri Lankan enterprises that have outgrown manual tracking. Integrated. Scalable. Engineering-led.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={handleCTA}
              className="bg-brandTeal text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
            >
              Explore Your Custom Solution
            </button>
            <a
              href="#work"
              className="border-2 border-brandNavy text-brandNavy px-8 py-4 rounded-lg font-semibold hover:bg-brandNavy hover:text-white transition-colors"
            >
              View Recent Deployments
            </a>
          </div>

          {/* Trust bar */}
          <div className="flex gap-8 mt-12 pt-8 border-t border-slate-100">
            <div>
              <p className="font-display font-bold text-2xl text-brandNavy">500+</p>
              <p className="text-slateText text-sm">Businesses served</p>
            </div>
            <div>
              <p className="font-display font-bold text-2xl text-brandNavy">24/7</p>
              <p className="text-slateText text-sm">WhatsApp support</p>
            </div>
            <div>
              <p className="font-display font-bold text-2xl text-brandNavy">0</p>
              <p className="text-slateText text-sm">Monthly fees</p>
            </div>
          </div>
        </div>

        {/* Right — MacBook mockup */}
        <div className="relative flex items-center justify-center">
          {/* Radial teal glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-96 h-96 rounded-full bg-brandTeal/10 blur-3xl" />
          </div>
          {/* MacBook frame */}
          <div className="relative z-10 w-full max-w-lg">
            <div className="bg-brandNavy rounded-2xl p-3 shadow-2xl">
              <div className="flex items-center gap-1.5 mb-2 px-1">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
              <div className="rounded-lg overflow-hidden bg-gray-900 aspect-video relative">
                <Image
                  src="/products/pos-system.png"
                  alt="IPYNB POS Dashboard"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  loading="eager"
                />
              </div>
            </div>
            {/* Base */}
            <div className="h-3 bg-slate-700 rounded-b-xl mx-8" />
            <div className="h-1.5 bg-slate-600 rounded-b-lg mx-16" />
          </div>
        </div>
      </div>
    </section>
  );
}
