'use client';

import { PRICING_PLANS, WHATSAPP_NUMBER } from '@/lib/constants';
import { openWhatsApp } from '@/lib/utils';

export default function Pricing() {
  const handleContact = (planName: string) => {
    openWhatsApp(`Hi! I'm interested in the ${planName} plan. Can you tell me more?`, WHATSAPP_NUMBER);
  };

  return (
    <section className="py-32 bg-white" id="pricing">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-brandNavy tracking-tight mb-4">
            Simple, Transparent Pricing.
          </h2>
          <p className="text-slateText text-lg">
            One-time payment. No monthly fees. No hidden costs. Lifetime ownership.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col transition-all hover:-translate-y-1 ${
                plan.highlight
                  ? 'bg-brandNavy text-white shadow-[0_20px_50px_rgba(15,23,42,0.2)] scale-105'
                  : 'bg-white border border-slate-100 shadow-[0_20px_50px_rgba(15,23,42,0.05)]'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brandTeal text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-wide">
                  MOST POPULAR
                </div>
              )}

              <div className="mb-6">
                <h3 className={`font-display font-bold text-2xl mb-2 ${plan.highlight ? 'text-white' : 'text-brandNavy'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.highlight ? 'text-slate-400' : 'text-slateText'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <span className={`font-display font-bold text-4xl ${plan.highlight ? 'text-white' : 'text-brandNavy'}`}>
                  LKR {plan.price.toLocaleString()}
                </span>
                <span className={`text-sm ml-2 ${plan.highlight ? 'text-slate-400' : 'text-slateText'}`}>one-time</span>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className={`flex items-center gap-3 text-sm ${plan.highlight ? 'text-slate-300' : 'text-slateText'}`}>
                    <span className="text-brandTeal font-bold">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleContact(plan.name)}
                className={`w-full py-3 rounded-xl font-semibold transition-all ${
                  plan.highlight
                    ? 'bg-brandTeal text-white hover:bg-teal-600'
                    : 'bg-brandNavy text-white hover:bg-slate-800'
                }`}
              >
                Get Started on WhatsApp
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-slateText text-sm mt-10">
          Need a custom build?{' '}
          <button onClick={() => handleContact('Custom')} className="text-brandTeal font-semibold hover:underline">
            Chat with us
          </button>{' '}
          and we'll scope it together.
        </p>
      </div>
    </section>
  );
}
