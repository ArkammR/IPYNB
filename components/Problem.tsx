'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const PAINS = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
    pain: 'Manual Tracking',
    impact: 'LKR 40,000+ lost monthly',
    title: 'The Ledger is Costing You',
    body: 'Every manual entry is a risk. Pricing errors, stock miscounts, and end-of-day reconciliation takes hours — money you pay staff to make mistakes.',
    stat: 73,
    statSuffix: '%',
    statLabel: 'of SMEs lose revenue to manual errors',
    color: 'from-red-500/10 to-transparent',
    borderColor: 'border-red-500/20',
    statColor: 'text-red-400',
    hoverShadow: 'rgba(239,68,68,0.4)',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    pain: 'Order Chaos',
    impact: '30% orders missed',
    title: 'WhatsApp Chaos is Revenue Loss',
    body: 'Your Instagram DMs, WhatsApp orders, and walk-in sales run on separate systems — or none at all. Missed orders mean missed income.',
    stat: 30,
    statSuffix: '%',
    statLabel: 'of social orders go unfulfilled without a system',
    color: 'from-amber-500/10 to-transparent',
    borderColor: 'border-amber-500/20',
    statColor: 'text-amber-400',
    hoverShadow: 'rgba(245,158,11,0.4)',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    pain: 'Zero Visibility',
    impact: 'No real-time data',
    title: 'You Can\'t Manage What You Can\'t See',
    body: 'Without real-time dashboards, you\'re guessing on stock, profit, and performance. Decisions made blind cost businesses 20% in unnecessary expenses.',
    stat: 20,
    statSuffix: '%',
    statLabel: 'saved when businesses use live data dashboards',
    color: 'from-purple-500/10 to-transparent',
    borderColor: 'border-purple-500/20',
    statColor: 'text-purple-400',
    hoverShadow: 'rgba(168,85,247,0.4)',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
  }),
};

function AnimatedCounter({ target, suffix, isInView }: { target: number; suffix: string; isInView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1200;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <>{count}{suffix}</>;
}

export default function Problem() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-32 bg-white/70 backdrop-blur-sm relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 dot-grid opacity-[0.03]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-brandTeal text-xs font-bold uppercase tracking-widest mb-4 px-4 py-2 rounded-full bg-brandTeal/10 border border-brandTeal/20">
            The Real Cost of Manual Operations
          </span>
          <h2 className="font-display font-black text-5xl lg:text-6xl text-brandNavy tracking-tight mb-6 leading-tight">
            Every Day Without a System
            <br />
            <span className="gradient-text">is Revenue You're Losing.</span>
          </h2>
          <p className="text-slateText text-xl max-w-2xl mx-auto leading-relaxed">
            We've analyzed hundreds of Sri Lankan businesses. The pattern is always the same — manual processes silently drain profit month after month.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {PAINS.map((card, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              whileHover={{
                y: -8,
                boxShadow: [
                  `0 0 0px 0px ${card.hoverShadow}`,
                  `0 0 20px 4px ${card.hoverShadow}`,
                  `0 0 10px 2px ${card.hoverShadow}`,
                ],
                transition: { duration: 0.3, boxShadow: { duration: 0.8, repeat: Infinity, repeatType: 'reverse' } },
              }}
              className={`relative rounded-3xl p-8 border bg-gradient-to-br ${card.color} ${card.borderColor} overflow-hidden group cursor-default`}
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                style={{ background: 'radial-gradient(ellipse at top, rgba(99,102,241,0.04) 0%, transparent 70%)' }} />

              {/* Pain tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-100 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{card.pain}</span>
                <span className="text-xs text-red-500 font-semibold ml-1">{card.impact}</span>
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-brandNavy flex items-center justify-center text-brandTeal mb-6 shadow-lg">
                {card.icon}
              </div>

              <h3 className="font-display font-black text-xl text-brandNavy mb-4 leading-tight">{card.title}</h3>
              <p className="text-slateText leading-relaxed mb-8 text-sm">{card.body}</p>

              {/* Business impact stat — animated counter */}
              <div className="border-t border-slate-100 pt-6">
                <div className={`font-display font-black text-4xl mb-1 ${card.statColor}`}>
                  <AnimatedCounter target={card.stat} suffix={card.statSuffix} isInView={isInView} />
                </div>
                <div className="text-slate-400 text-xs leading-relaxed">{card.statLabel}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA nudge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-16"
        >
          <p className="text-slateText text-lg">
            Sound familiar?{' '}
            <a href="#contact" className="text-brandTeal font-bold hover:underline underline-animate">
              Let's fix it — starting this week.
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
