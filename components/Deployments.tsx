'use client';

import { useState } from 'react';
import MacFrame from '@/components/MacFrame';

const deployments = [
  {
    name: 'Ceylon Chai POS',
    tag: 'Retail · POS System',
    headline: 'Billing, stock and staff in one place.',
    body: 'A point of sale system with a live dashboard, billing, stock, sales, expenses and staff accounts, built for a busy retail shop.',
    highlights: ['Real-time cloud sync', 'Full inventory control', 'Expense & promotions module', 'Multi-user with activity logs'],
    image: '/products/pos-system.png',
  },
  {
    name: 'Hardware Appliance Store POS',
    tag: 'Retail · Billing System',
    headline: 'Running bills and price lists made simple.',
    body: 'A POS built for a hardware store, with customer records, price lists, running bills, reports and backups.',
    highlights: ['Customer management', 'Price list & running bills', 'Analytics dashboard', 'Backup & export'],
    image: '/products/pos-inventory.png',
  },
  {
    name: 'Auto Pilot — Auto Parts Importer',
    tag: 'Import Business · Management System',
    headline: 'Stock, credit and profit for an importer.',
    body: 'A management system with purchase invoices, stock history, billing, returns, creditors, expenses and profit reports, with access control for each staff member.',
    highlights: ['Inventory & stock history', 'Creditor & customer management', 'P&L and profit analytics', 'Module management & access control'],
    image: '/products/complete-suite.png',
  },
];

export default function Deployments() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = deployments.length;
  const go = (i: number) => setIndex((i + count) % count);
  const d = deployments[index];

  return (
    <section className="bg-brandGray py-24" id="work">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-display text-4xl font-bold tracking-tight text-brandNavy lg:text-5xl">
            Systems we have built
          </h2>
          <p className="mx-auto max-w-xl text-lg text-slateText">
            Screenshots from systems built for Sri Lankan businesses.
          </p>
        </div>

        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Systems we have built"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
            {/* Mac with stacked screenshots that cross-fade; zooms a little on hover */}
            <div className="group relative px-[7%] pb-4">
              <div className="transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none">
                <div className="relative">
                  {deployments.map((item, i) => (
                    <div
                      key={item.name}
                      aria-hidden={i !== index}
                      className={`transition-opacity duration-700 ${i === index ? 'relative opacity-100' : 'absolute inset-0 opacity-0'}`}
                    >
                      <MacFrame
                        src={item.image}
                        alt={`${item.name} screenshot`}
                        imageClassName="transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Details — keyed by slide so each change replays the entrance animation */}
            <div key={index} aria-live={paused ? 'polite' : 'off'}>
              <span className="mb-4 block animate-fade-up text-xs font-bold uppercase tracking-widest text-brandTeal">
                {d.tag}
              </span>
              <h3
                className="mb-3 animate-fade-up font-display text-3xl font-bold tracking-tight text-brandNavy"
                style={{ animationDelay: '60ms' }}
              >
                {d.name}
              </h3>
              <p className="mb-4 animate-fade-up font-semibold text-brandTeal" style={{ animationDelay: '120ms' }}>
                {d.headline}
              </p>
              <p className="mb-8 animate-fade-up leading-relaxed text-slateText" style={{ animationDelay: '180ms' }}>
                {d.body}
              </p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {d.highlights.map((h, j) => (
                  <li
                    key={h}
                    className="flex animate-fade-up items-center gap-3 rounded-lg border border-line bg-white px-3 py-2.5 text-sm font-medium text-brandNavy"
                    style={{ animationDelay: `${260 + j * 80}ms` }}
                  >
                    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brandTeal/10 text-xs font-bold text-brandTeal">
                      ✓
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Controls: progress bars double as slide picker; the active bar's animation drives autoplay */}
          <div className="mt-12 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous system"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors hover:border-ink/30"
            >
              ←
            </button>
            <div className="flex gap-2">
              {deployments.map((item, i) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Show ${item.name}`}
                  aria-current={i === index}
                  className="relative h-1.5 w-12 overflow-hidden rounded-full bg-line sm:w-16"
                >
                  {i === index && (
                    <span
                      key={index}
                      onAnimationEnd={() => go(index + 1)}
                      className="absolute inset-0 origin-left animate-slide-progress rounded-full bg-brandTeal motion-reduce:animate-none motion-reduce:scale-x-100"
                      style={{ animationPlayState: paused ? 'paused' : 'running' }}
                    />
                  )}
                  {i < index && <span className="absolute inset-0 rounded-full bg-brandTeal/40" />}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next system"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors hover:border-ink/30"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
