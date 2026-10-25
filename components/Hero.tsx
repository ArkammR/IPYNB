'use client';

import { WHATSAPP_NUMBER } from '@/lib/constants';
import { openWhatsApp } from '@/lib/utils';
import MacFrame from '@/components/MacFrame';

export default function Hero() {
  const handleCTA = () => {
    openWhatsApp("Hi! I'd like to explore a custom solution for my business.", WHATSAPP_NUMBER);
  };

  return (
    <section className="relative overflow-hidden bg-paper pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Background grid, fading out towards the bottom */}
      <div
        className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(20,23,28,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(20,23,28,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '56px 56px',
        }}
      />
      <div className="pointer-events-none absolute -top-24 right-0 h-[480px] w-[640px] rounded-full bg-brandTeal/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-16">
        {/* Left column */}
        <div>
          <div className="mb-8 inline-flex animate-fade-up items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brandTeal" />
            <span className="text-xs font-medium uppercase tracking-widest text-muted">
              Custom business software · Sri Lanka
            </span>
          </div>

          <h1
            className="mb-6 animate-fade-up font-display text-5xl font-bold leading-[1.1] tracking-tight text-ink lg:text-6xl"
            style={{ animationDelay: '80ms' }}
          >
            Business systems
            <br />
            built around
            <br />
            <span className="text-brandTeal">how you work</span>
          </h1>

          <p
            className="mb-10 max-w-lg animate-fade-up text-lg leading-relaxed text-muted"
            style={{ animationDelay: '160ms' }}
          >
            POS, billing and inventory systems set up for the way your shop already runs.
            Systems start with a one-time setup fee, with optional monthly support for ongoing updates.
          </p>

          <div className="flex animate-fade-up flex-wrap gap-4" style={{ animationDelay: '240ms' }}>
            <button
              onClick={handleCTA}
              className="inline-flex items-center gap-2 rounded-md bg-brandTeal px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_20px_-8px_rgba(0,139,139,0.6)] transition-colors hover:bg-[#007575]"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Get free consultation
            </button>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-md border border-ink/15 bg-white px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink/30"
            >
              See systems we built
              <span className="text-muted">→</span>
            </a>
          </div>

          {/* Stats */}
          <div
            className="mt-12 flex animate-fade-up flex-wrap gap-x-10 gap-y-4 border-t border-line pt-8"
            style={{ animationDelay: '320ms' }}
          >
            <div>
              <p className="font-display text-2xl font-bold text-ink">LKR 30,000</p>
              <p className="mt-0.5 text-sm text-muted">One-time setup, from</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-ink">On-site</p>
              <p className="mt-0.5 text-sm text-muted">Setup &amp; staff training</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-brandTeal">WhatsApp</p>
              <p className="mt-0.5 text-sm text-muted">Support from the team that built it</p>
            </div>
          </div>
        </div>

        {/* Right column — real client system */}
        <figure className="animate-fade-up lg:pl-4" style={{ animationDelay: '200ms' }}>
          <MacFrame
            src="/products/pos-system.png"
            alt="Ceylon Chai POS dashboard built by IPYNB"
            priority
          />
          <figcaption className="mt-6 text-center text-xs text-muted">
            Ceylon Chai POS — a system we built for a Sri Lankan retailer.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
