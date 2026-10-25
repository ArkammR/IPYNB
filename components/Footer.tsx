'use client';

import Image from 'next/image';
import { CONTACT_EMAIL, PRICING_PLANS, WHATSAPP_DISPLAY, WHATSAPP_NUMBER } from '@/lib/constants';
import { openWhatsApp } from '@/lib/utils';

type FooterLink = { label: string; href?: string; onClick?: () => void; external?: boolean };

const quickLinks: FooterLink[] = [
  { label: 'Home', href: '#' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Our Work', href: '#work' },
  { label: 'How it works', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About Us', href: '#about' },
];

const industryLinks: FooterLink[] = [
  { label: 'Retail shops', href: '#solutions' },
  { label: 'Hardware & auto parts', href: '#solutions' },
  { label: 'Restaurants & cafés', href: '#solutions' },
];

function LinkColumn({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div>
      <h3 className="mb-5 text-[15px] font-semibold text-ink">{title}</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            {link.onClick ? (
              <button type="button" onClick={link.onClick} className="text-left text-sm text-muted transition-colors hover:text-brandTeal">
                {link.label}
              </button>
            ) : (
              <a
                href={link.href}
                {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="text-sm text-muted transition-colors hover:text-brandTeal"
              >
                {link.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const handleCTA = () => {
    openWhatsApp("Hi! I'd like to replace my manual system with a custom IPYNB solution.", WHATSAPP_NUMBER);
  };

  const packageLinks: FooterLink[] = PRICING_PLANS.map((plan) => ({ label: plan.name, href: '#pricing' }));

  const careLinks: FooterLink[] = [
    {
      label: 'Book a free demo',
      onClick: () => openWhatsApp("Hi IPYNB! I'd like to book a free demo.", WHATSAPP_NUMBER),
    },
    { label: 'WhatsApp support', href: `https://wa.me/${WHATSAPP_NUMBER}`, external: true },
    { label: 'Email us', href: `mailto:${CONTACT_EMAIL}` },
    { label: 'Call us', href: `tel:+${WHATSAPP_NUMBER}` },
  ];

  return (
    <footer>
      {/* CTA band */}
      <div className="bg-brandTeal">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-14 text-center md:flex-row md:text-left">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white">Ready to move off paper?</h2>
            <p className="mt-2 text-white/80">
              Systems from LKR 30,000 one-time setup. Tell us about your business on WhatsApp.
            </p>
          </div>
          <button
            onClick={handleCTA}
            className="flex-shrink-0 rounded-lg bg-white px-8 py-3.5 font-semibold text-brandTeal transition-colors hover:bg-paper"
          >
            Chat on WhatsApp
          </button>
        </div>
      </div>

      {/* Main footer */}
      <div className="bg-paper">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr] lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="inline-block overflow-hidden rounded-xl" aria-label="IPYNB Solutions home">
              <Image
                src="/brand/ipynb-solutions-footer-logo.svg"
                alt="ipynb Solutions"
                width={380}
                height={206}
                unoptimized
                className="h-auto w-48"
              />
            </a>

            <a href={`tel:+${WHATSAPP_NUMBER}`} className="group mt-8 flex items-center gap-4">
              <svg
                viewBox="0 0 24 24"
                className="h-11 w-11 flex-shrink-0 text-brandTeal"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.4}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
                <path d="M4 14a2 2 0 0 1 2-2h1v6H6a2 2 0 0 1-2-2v-2ZM20 14a2 2 0 0 0-2-2h-1v6h1a2 2 0 0 0 2-2v-2Z" />
                <path d="M17 18c0 1.7-1.8 3-5 3" />
              </svg>
              <span>
                <span className="block text-sm font-semibold text-ink">Got questions? Call us!</span>
                <span className="block text-xl font-semibold text-ink transition-colors group-hover:text-brandTeal">
                  {WHATSAPP_DISPLAY}
                </span>
              </span>
            </a>

            <div className="mt-8 space-y-1.5 text-sm text-muted">
              <p className="mb-2 font-semibold text-ink">Contact Info</p>
              <p>Based in Colombo</p>
              <p>Mon-Fri: Available</p>
              <p>Sunday &amp; Poya days: Available for Demos</p>
              <p className="pt-2">
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-ink transition-colors hover:text-brandTeal">
                  {CONTACT_EMAIL}
                </a>
              </p>
            </div>
          </div>

          <LinkColumn title="Packages" links={packageLinks} />
          <LinkColumn title="Quick Links" links={quickLinks} />
          <LinkColumn title="Industries" links={industryLinks} />
          <LinkColumn title="Customer Care" links={careLinks} />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#EFEEEA]">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 IPYNB Solutions. All rights reserved.</p>
          <p>ipynb.site</p>
        </div>
      </div>
    </footer>
  );
}
