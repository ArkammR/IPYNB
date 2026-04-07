'use client';

import { PRICING_PLANS } from '@/lib/constants';
import { useCurrencyStore } from '@/lib/store';
import { openWhatsApp } from '@/lib/utils';
import { WHATSAPP_NUMBER } from '@/lib/constants';

export default function Pricing() {
  const formatPrice = useCurrencyStore((state) => state.formatPrice);

  const handleContact = (planName: string) => {
    openWhatsApp(`Hi! I'm interested in the ${planName} plan. Can you tell me more?`, WHATSAPP_NUMBER);
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-white to-amber-50" id="pricing">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-grotesk text-4xl sm:text-5xl font-bold text-navy text-center mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-center text-gray-600 text-lg mb-16">
          One-time payment. No monthly fees. No hidden costs.
        </p>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col transition-all hover:-translate-y-1 hover:shadow-xl ${
                plan.highlight
                  ? 'bg-navy text-white shadow-2xl scale-105'
                  : 'bg-white border-2 border-grid shadow-md'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange text-white text-xs font-bold px-4 py-1.5 rounded-full">
                  MOST POPULAR
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? 'text-white' : 'text-navy'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.highlight ? 'text-white/70' : 'text-gray-500'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <span className={`text-4xl font-bold ${plan.highlight ? 'text-white' : 'text-orange'}`}>
                  {formatPrice(plan.price)}
                </span>
                <span className={`text-sm ml-2 ${plan.highlight ? 'text-white/60' : 'text-gray-400'}`}>
                  one-time
                </span>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className={`flex items-center gap-3 text-sm ${plan.highlight ? 'text-white/90' : 'text-gray-700'}`}>
                    <span className={`font-bold ${plan.highlight ? 'text-emerald-400' : 'text-whatsapp'}`}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleContact(plan.name)}
                className={`w-full py-3 rounded-xl font-semibold transition-all hover:-translate-y-0.5 ${
                  plan.highlight
                    ? 'bg-orange text-white hover:bg-orange/90 hover:shadow-lg'
                    : 'bg-navy text-white hover:bg-blue-900 hover:shadow-lg'
                }`}
              >
                Get Started on WhatsApp
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-10">
          Need something custom? <button onClick={() => handleContact('Custom')} className="text-orange font-semibold hover:underline">Chat with us</button> and we'll build a plan for you.
        </p>
      </div>
    </section>
  );
}
