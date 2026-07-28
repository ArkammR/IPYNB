'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { PRICING_PLANS, WHATSAPP_NUMBER } from '@/lib/constants';
import { openWhatsApp } from '@/lib/utils';

const PLAN_ICONS = ['🚀', '⚡', '🏆'];
const PLAN_COLORS = [
  { border: 'border-slate-200', bg: 'bg-white', badge: 'bg-slate-100 text-slate-600' },
  { border: 'border-brandTeal/40', bg: 'bg-brandNavy', badge: 'bg-brandTeal text-white' },
  { border: 'border-slate-200', bg: 'bg-white', badge: 'bg-brandNavy text-white' },
];

// Shimmer sweep that animates around the highlighted card border
function ShimmerBorder() {
  return (
    <motion.div
      className="absolute inset-0 rounded-3xl pointer-events-none overflow-hidden"
      aria-hidden
    >
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'conic-gradient(from 0deg, transparent 0%, rgba(99,102,241,0.6) 20%, transparent 40%)',
          borderRadius: 'inherit',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      />
      {/* Inner mask to keep only the border visible */}
      <div className="absolute inset-[2px] rounded-[22px] bg-brandNavy" />
    </motion.div>
  );
}

export default function Pricing() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const handleContact = (planName: string) => {
    openWhatsApp(`Hi! I'm interested in the ${planName} plan. Can you tell me more?`, WHATSAPP_NUMBER);
  };

  return (
    <section className="py-32 bg-brandNavy relative overflow-hidden" id="pricing" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 dot-grid opacity-10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brandTeal/30 to-transparent" />

      {/* Glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-5"
        style={{ background: 'radial-gradient(circle, #6366F1 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-brandTeal text-xs font-bold uppercase tracking-widest mb-4 px-4 py-2 rounded-full glass-teal border border-brandTeal/20">
            Transparent Pricing
          </span>
          <h2 className="font-display font-black text-5xl lg:text-6xl text-white tracking-tight mb-6">
            One Payment.
            <br />
            <span className="gradient-text">Yours Forever.</span>
          </h2>
          <p className="text-slate-400 text-xl max-w-xl mx-auto">
            No monthly subscriptions. No hidden fees. No vendor lock-in. Pay once — own it for life.
          </p>
        </motion.div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {PRICING_PLANS.map((plan, i) => {
            const colors = PLAN_COLORS[i];
            const isHighlight = plan.highlight;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className={`relative rounded-3xl flex flex-col overflow-hidden transition-all ${colors.bg} ${
                  isHighlight
                    ? `border-2 ${colors.border} shadow-[0_0_50px_rgba(99,102,241,0.25)] scale-[1.03]`
                    : `border ${colors.border} shadow-[0_10px_40px_rgba(0,0,0,0.3)]`
                }`}
              >
                {/* Shimmer sweep on highlighted card */}
                {isHighlight && <ShimmerBorder />}

                {/* Most popular badge */}
                {isHighlight && (
                  <div className="absolute -top-px left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brandTeal to-transparent" />
                )}

                <div className={`p-8 flex-1 flex flex-col relative z-10 ${isHighlight ? '' : ''}`}>
                  {/* Plan header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="text-2xl mb-2">{PLAN_ICONS[i]}</div>
                      <h3 className={`font-display font-black text-2xl ${isHighlight ? 'text-white' : 'text-brandNavy'}`}>
                        {plan.name}
                      </h3>
                      <p className={`text-sm mt-1 ${isHighlight ? 'text-slate-400' : 'text-slateText'}`}>
                        {plan.description}
                      </p>
                    </div>
                    {isHighlight && (
                      <span className="px-3 py-1.5 bg-brandTeal text-white text-xs font-black rounded-full uppercase tracking-wider">
                        Popular
                      </span>
                    )}
                  </div>

                  {/* Price — spring scale pop on enter */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                      <span className={`text-xs font-bold uppercase tracking-widest ${isHighlight ? 'text-brandTeal' : 'text-slateText'}`}>LKR</span>
                      <motion.span
                        className={`font-display font-black text-5xl ${isHighlight ? 'text-white' : 'text-brandNavy'}`}
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          type: 'spring',
                          stiffness: 280,
                          damping: 18,
                          delay: 0.3 + i * 0.12,
                        }}
                      >
                        {(plan.price / 1000).toFixed(0)}k
                      </motion.span>
                    </div>
                    <div className={`text-xs mt-1 ${isHighlight ? 'text-slate-500' : 'text-slate-400'}`}>
                      One-time · No recurring fees
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 flex-1 mb-8">
                    {plan.features.map((feature, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4 + i * 0.1 + j * 0.05 }}
                        className="flex items-center gap-3"
                      >
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                          isHighlight ? 'bg-brandTeal/20' : 'bg-brandNavy/10'
                        }`}>
                          <svg className={`w-3 h-3 ${isHighlight ? 'text-brandTeal' : 'text-brandNavy'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className={`text-sm font-medium ${isHighlight ? 'text-slate-300' : 'text-slateText'}`}>
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <motion.button
                    onClick={() => handleContact(plan.name)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 rounded-2xl font-black text-sm transition-all flex items-center justify-center gap-2 ${
                      isHighlight
                        ? 'bg-brandTeal text-white hover:bg-indigo-500 teal-glow'
                        : 'bg-brandNavy/10 text-brandNavy hover:bg-brandNavy hover:text-white border border-brandNavy/15'
                    }`}
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Get {plan.name} on WhatsApp
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Custom quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 glass rounded-2xl px-8 py-4 border border-white/10">
            <span className="text-2xl">🎯</span>
            <p className="text-slate-300 text-sm">
              Need something specific?{' '}
              <button
                onClick={() => handleContact('Custom')}
                className="text-brandTeal font-bold hover:underline"
              >
                Chat with us about a custom quote
              </button>
              {' '}— most builds ship in 7–14 days.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
