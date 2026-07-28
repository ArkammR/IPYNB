'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ROWS = [
  {
    category: 'Billing Speed',
    them: 'Manual entry — 5+ mins per transaction',
    us: 'Barcode scan billing in under 30 seconds',
    impact: '10× faster',
  },
  {
    category: 'Cost Model',
    them: 'Monthly SaaS subscriptions eating margin',
    us: 'One-time payment — lifetime ownership',
    impact: 'LKR 0/mo',
  },
  {
    category: 'Fit',
    them: 'Generic templates — adapt your business to their software',
    us: 'System Analyst engineers around your exact workflow',
    impact: '100% custom',
  },
  {
    category: 'Support',
    them: 'Ticketing systems, days to resolve',
    us: '24/7 WhatsApp — same-day resolution',
    impact: '< 2 hrs',
  },
  {
    category: 'Onboarding',
    them: 'Self-serve docs and video tutorials',
    us: 'On-site deployment and 1-on-1 staff training',
    impact: '1 day live',
  },
  {
    category: 'Data',
    them: 'Data locked in their cloud — you lose it if you leave',
    us: 'You own your database. Export anytime.',
    impact: 'Full control',
  },
];

export default function Comparison() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="py-32 bg-brandGray/60 backdrop-blur-sm relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 dot-grid opacity-[0.03]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-brandTeal text-xs font-bold uppercase tracking-widest mb-4 px-4 py-2 rounded-full bg-brandTeal/10 border border-brandTeal/20">
            Why Choose IPYNB
          </span>
          <h2 className="font-display font-black text-5xl lg:text-6xl text-brandNavy tracking-tight mb-6">
            The Difference is in
            <br />
            <span className="gradient-text">How We Build.</span>
          </h2>
          <p className="text-slateText text-xl max-w-xl mx-auto">
            Most providers sell you a product. We engineer you a competitive advantage.
          </p>
        </motion.div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-100 shadow-[0_30px_60px_rgba(13,17,23,0.08)]"
        >
          {/* Column headers */}
          <div className="grid grid-cols-[1fr_2fr_2fr_auto] border-b border-slate-100">
            <div className="px-6 py-5 text-xs font-bold uppercase tracking-widest text-slate-400">Category</div>
            <div className="px-6 py-5 flex items-center gap-3 border-l border-slate-100">
              <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center">
                <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <span className="font-bold text-sm text-slate-500">Standard Providers</span>
            </div>
            <div className="px-6 py-5 bg-brandTeal/5 border-l-2 border-brandTeal flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-brandTeal flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="font-bold text-sm text-brandTeal">IPYNB Solutions</span>
            </div>
            <div className="px-4 py-5 bg-brandTeal/5 border-l border-brandTeal/10 text-xs font-bold uppercase tracking-widest text-brandTeal text-center">
              Impact
            </div>
          </div>

          {ROWS.map((row, i) => {
            // Odd rows slide from left, even rows from right
            const isOdd = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isOdd ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.3 + i * 0.08, ease: 'easeOut' }}
                whileHover={{
                  backgroundColor: 'rgba(248,250,252,0.8)',
                  borderLeftWidth: '3px',
                  borderLeftColor: 'rgba(99,102,241,0.4)',
                  boxShadow: 'inset 3px 0 0 0 rgba(99,102,241,0.4)',
                  transition: { duration: 0.15 },
                }}
                className="grid grid-cols-[1fr_2fr_2fr_auto] border-b border-slate-50 last:border-b-0 group transition-colors"
              >
                <div className="px-6 py-5 flex items-center">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{row.category}</span>
                </div>
                <div className="px-6 py-5 border-l border-slate-100 flex items-center gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-50 flex items-center justify-center">
                    <svg className="w-3 h-3 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </span>
                  <span className="text-slateText text-sm">{row.them}</span>
                </div>
                <div className="px-6 py-5 bg-brandTeal/5 border-l-2 border-brandTeal flex items-center gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brandTeal/15 flex items-center justify-center">
                    <svg className="w-3 h-3 text-brandTeal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-brandNavy text-sm font-semibold">{row.us}</span>
                </div>
                <div className="px-4 py-5 bg-brandTeal/5 border-l border-brandTeal/10 flex items-center justify-center">
                  <span className="font-display font-black text-sm text-brandTeal whitespace-nowrap bg-brandTeal/10 px-2 py-1 rounded-lg">
                    {row.impact}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 text-center"
        >
          <p className="text-slateText text-sm">
            Still using a generic system?{' '}
            <a href="#contact" className="text-brandTeal font-bold underline-animate">
              Let's show you what custom looks like.
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
