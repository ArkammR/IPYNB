'use client';

import { PRICING_PLANS, WHATSAPP_NUMBER, type PricingPlan } from '@/lib/constants';
import { openWhatsApp } from '@/lib/utils';

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="mt-[3px] h-4 w-4 flex-shrink-0 text-accent"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3.5 8.5l3 3 6-7" />
    </svg>
  );
}

function PlanLabel({ plan }: { plan: PricingPlan }) {
  if (plan.featured) {
    return (
      <span className="inline-block rounded-md bg-accentSoft px-2 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
        {plan.label}
      </span>
    );
  }
  return (
    <span className="inline-block py-1 text-xs font-semibold uppercase tracking-wider text-muted">
      {plan.label}
    </span>
  );
}

function PriceBlock({ plan }: { plan: PricingPlan }) {
  return (
    <div className="mt-6">
      <p className="text-[32px] font-semibold leading-tight tracking-tight text-ink tabular-nums">
        {plan.price}
      </p>
      <p className="mt-1 text-sm text-muted">{plan.priceCaption}</p>

      {plan.recurring && (
        <div className="mt-4">
          <p className="text-lg font-semibold leading-snug text-ink tabular-nums">
            + {plan.recurring.price}
          </p>
          <p className="mt-0.5 text-sm text-muted">{plan.recurring.caption}</p>
        </div>
      )}
    </div>
  );
}

function PricingCard({ plan }: { plan: PricingPlan }) {
  return (
    <article
      className={`flex flex-col rounded-xl border bg-white p-8 lg:row-span-7 lg:grid lg:grid-rows-subgrid lg:gap-0 ${
        plan.featured ? 'border-accent' : 'border-line'
      }`}
    >
      <div>
        <PlanLabel plan={plan} />
      </div>

      <h3 className="mt-4 text-xl font-semibold leading-snug text-ink">{plan.name}</h3>

      <p className="mt-2 text-base leading-relaxed text-muted">{plan.description}</p>

      <PriceBlock plan={plan} />

      <hr className="mt-6 border-0 border-t border-line" />

      <ul className="mt-6 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex gap-3 text-[15px] leading-6 text-ink">
            <CheckIcon />
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-8 flex items-end">
        <button
          type="button"
          onClick={() => openWhatsApp(plan.ctaMessage, WHATSAPP_NUMBER)}
          className={`h-11 w-full rounded-lg text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
            plan.featured
              ? 'bg-accent text-white hover:bg-accentHover'
              : 'border border-ink/20 bg-white text-ink hover:border-ink/40'
          }`}
        >
          {plan.cta}
        </button>
      </div>
    </article>
  );
}

export default function Pricing() {
  return (
    <section className="bg-paper py-24" id="pricing">
      <div className="mx-auto max-w-[1248px] px-6">
        <div className="mx-auto mb-14 max-w-[960px] text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">
            IPYNB Solutions / Business Systems
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-ink lg:text-[44px]">
            Choose the right system for your business.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Reliable tools for smoother day-to-day operations — built to grow with you.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 lg:grid-rows-[repeat(7,auto)] lg:gap-y-0">
          {PRICING_PLANS.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        <p className="mt-12 text-center text-[15px] text-muted">
          Not sure which fits?{' '}
          <button
            type="button"
            onClick={() =>
              openWhatsApp("Hi IPYNB! I'm not sure which package fits my business. Can you help?", WHATSAPP_NUMBER)
            }
            className="font-medium text-ink underline decoration-line underline-offset-4 hover:decoration-ink"
          >
            Let’s find the right setup for your business.
          </button>
        </p>
      </div>
    </section>
  );
}
