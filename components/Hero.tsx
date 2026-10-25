'use client';

import Image from 'next/image';
import { WHATSAPP_NUMBER } from '@/lib/constants';
import { openWhatsApp } from '@/lib/utils';

export default function Hero() {
  const handleCTA = () => {
    openWhatsApp("Hi! I'd like to explore a custom solution for my business.", WHATSAPP_NUMBER);
  };

  return (
    <section className="md:min-h-screen flex items-center bg-[#080d17] relative overflow-hidden pt-20">

      {/* Background grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow blobs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-brandTeal/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* ── Left column ── */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-brandTeal animate-pulse" />
            <span className="text-white/60 text-xs font-medium tracking-widest uppercase">
              Custom business software · Sri Lanka
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-bold text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-6">
            <span className="text-white">Business systems</span>
            <br />
            <span className="text-white">built around</span>
            <br />
            <span className="text-brandTeal">how you work</span>
          </h1>

          {/* Subtext */}
          <p className="text-white/50 text-lg leading-relaxed mb-10 max-w-lg">
            POS, billing and inventory systems set up for the way your shop already runs.
            Systems start with a one-time setup fee, with optional monthly support for ongoing updates.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={handleCTA}
              className="group inline-flex items-center gap-2 bg-brandTeal hover:bg-brandTeal/90 text-white px-6 py-3.5 rounded-md font-semibold text-sm transition-all duration-200 hover:shadow-[0_0_30px_rgba(0,139,139,0.4)]"
            >
              {/* WhatsApp icon */}
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Get free consultation
            </button>
            <a
              href="#work"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium px-6 py-3.5 rounded-md border border-white/10 hover:border-white/30 transition-all duration-200"
            >
              See systems we built
              <span className="text-white/40">→</span>
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-x-8 gap-y-4 mt-12 pt-8 border-t border-white/10">
            <div>
              <p className="font-display font-bold text-2xl text-white">LKR 30,000</p>
              <p className="text-white/40 text-sm mt-0.5">One-time setup, from</p>
            </div>
            <div>
              <p className="font-display font-bold text-2xl text-white">On-site</p>
              <p className="text-white/40 text-sm mt-0.5">Setup &amp; staff training</p>
            </div>
            <div>
              <p className="font-display font-bold text-2xl text-brandTeal">WhatsApp</p>
              <p className="text-white/40 text-sm mt-0.5">Support from the team that built it</p>
            </div>
          </div>
        </div>

        {/* ── Right column — real client system ── */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-80 h-80 rounded-full bg-brandTeal/15 blur-[80px]" />
          </div>

          <figure className="relative z-10">
            <div className="bg-[#0f1824] border border-white/10 rounded-xl overflow-hidden shadow-2xl shadow-black/60">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10 bg-[#0c1520]">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              </div>
              <div className="relative aspect-[1919/918]">
                <Image
                  src="/products/pos-system.png"
                  alt="Ceylon Chai POS dashboard built by IPYNB"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <figcaption className="text-white/40 text-xs mt-3 px-1">
              Ceylon Chai POS — a system we built for a Sri Lankan retailer.
            </figcaption>
          </figure>
        </div>

      </div>
    </section>
  );
}
