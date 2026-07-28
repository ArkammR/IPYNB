'use client';

import Image from 'next/image';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const DEPLOYMENTS = [
  {
    name: 'Ceylon Chai POS',
    tag: 'Retail · POS System',
    industry: 'High-Volume Retail',
    headline: 'Real-time cloud sync and full inventory control.',
    body: 'A fully custom point-of-sale system with live dashboard, barcode billing, multi-user staff administration, expense management, promotions engine, and sales analytics. Built to handle peak-hour volume without a single missed transaction.',
    highlights: [
      { label: 'Real-time cloud sync', value: '99.9% uptime' },
      { label: 'Inventory accuracy', value: '+94%' },
      { label: 'Bill speed', value: '< 30 sec' },
      { label: 'Staff accounts', value: 'Unlimited' },
    ],
    image: '/products/pos-system.png',
    result: 'Reduced end-of-day reconciliation from 2 hours to 8 minutes.',
    flip: false,
    color: 'from-brandTeal/10',
  },
  {
    name: 'Hardware Store POS',
    tag: 'Retail · Billing System',
    industry: 'Hardware Trade',
    headline: 'Operational management and customer credit system.',
    body: 'A custom POS built for a hardware store with high-SKU inventory — featuring customer management, running bills, price list control, credit tracking, and a full analytics and backup system. Handles both cash and credit customers seamlessly.',
    highlights: [
      { label: 'Credit customer tracking', value: 'Full ledger' },
      { label: 'Running bills', value: 'Multi-customer' },
      { label: 'SKU count', value: '5,000+' },
      { label: 'Daily backup', value: 'Auto' },
    ],
    image: '/products/pos-inventory.png',
    result: 'Eliminated LKR 180,000 in unrecorded credit disputes.',
    flip: true,
    color: 'from-amber-500/10',
  },
  {
    name: 'Auto Parts Importer',
    tag: 'Import Business · Management System',
    industry: 'Import & Wholesale',
    headline: 'End-to-end business intelligence for importers.',
    body: 'An advanced management system with full inventory, stock history, creditor tracking, expense management, staff administration, and module-level access control. The P&L dashboard gives the owner profit-per-transaction visibility across all branches.',
    highlights: [
      { label: 'P&L accuracy', value: 'Real-time' },
      { label: 'Creditor tracking', value: 'Full ledger' },
      { label: 'Branch access', value: 'Role-based' },
      { label: 'Stock history', value: '5-year log' },
    ],
    image: '/products/complete-suite.png',
    result: 'Owner cut monthly accounting time from 12 days to 2 days.',
    flip: false,
    color: 'from-purple-500/10',
  },
];

// Typing indicator dots component
function TypingDots() {
  return (
    <span className="inline-flex items-center gap-0.5 ml-1">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-1 h-1 rounded-full bg-brandTeal"
          animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            delay: i * 0.2,
            ease: 'easeInOut',
          }}
        />
      ))}
    </span>
  );
}

// Individual deployment row with its own scroll parallax
function DeploymentRow({ d, i, isInView }: { d: typeof DEPLOYMENTS[0]; i: number; isInView: boolean }) {
  const rowRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ['start end', 'end start'],
  });
  // Image moves slower than scroll — subtle upward parallax
  const imageY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <motion.div
      ref={rowRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: i * 0.15 }}
      className={`grid md:grid-cols-2 gap-16 items-center ${d.flip ? 'md:[&>*:first-child]:order-2' : ''}`}
    >
      {/* Text */}
      <div>
        <div className="flex items-center gap-3 mb-5">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brandTeal/10 border border-brandTeal/20">
            <span className="w-1.5 h-1.5 rounded-full bg-brandTeal animate-pulse" />
            <span className="text-brandTeal text-xs font-bold uppercase tracking-wider">Live System</span>
            <TypingDots />
          </span>
          <span className="text-slateText text-xs font-medium border border-slate-200 rounded-full px-3 py-1.5">{d.tag}</span>
        </div>

        <h3 className="font-display font-black text-4xl text-brandNavy mb-3 leading-tight">{d.name}</h3>
        <p className="text-brandTeal font-bold text-lg mb-4">{d.headline}</p>
        <p className="text-slateText leading-relaxed mb-8">{d.body}</p>

        {/* Highlight metrics */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          {d.highlights.map((h, j) => (
            <div key={j} className="border-gradient-light rounded-xl p-4">
              <div className="text-slateText text-xs font-medium mb-1">{h.label}</div>
              <div className="font-display font-black text-xl text-brandNavy">{h.value}</div>
            </div>
          ))}
        </div>

        {/* Impact quote */}
        <div className={`rounded-2xl p-5 bg-gradient-to-r ${d.color} to-transparent border border-brandTeal/15`}>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-brandTeal/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-4 h-4 text-brandTeal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wide text-brandTeal mb-1">Business Result</div>
              <p className="text-brandNavy font-semibold text-sm">{d.result}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Screenshot with scroll parallax */}
      <motion.div
        whileHover={{ scale: 1.02, rotateY: d.flip ? 2 : -2 }}
        transition={{ duration: 0.3 }}
        className="relative group"
        style={{ perspective: '1000px' }}
      >
        {/* Glow */}
        <div className="absolute inset-0 bg-brandTeal/10 blur-3xl rounded-3xl scale-90 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Browser frame */}
        <div className="relative rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(13,17,23,0.15)] border border-slate-200">
          <div className="bg-slate-100 px-4 py-3 flex items-center gap-2 border-b border-slate-200">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 mx-3 bg-white rounded px-3 py-1">
              <span className="text-slate-400 text-xs">ipynb.solutions/system/{d.name.toLowerCase().replace(' ', '-')}</span>
            </div>
          </div>
          <div className="relative aspect-video bg-[#0D1117] overflow-hidden">
            <motion.div style={{ y: imageY }} className="absolute inset-0">
              <Image
                src={d.image}
                alt={d.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>

        {/* Industry tag */}
        <div className="absolute -bottom-4 left-6 bg-brandNavy text-white px-4 py-2 rounded-xl text-xs font-bold shadow-lg border border-white/5">
          {d.industry}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Deployments() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="py-32 bg-white/70 backdrop-blur-sm relative overflow-hidden" id="work" ref={ref}>
      <div className="absolute inset-0 dot-grid opacity-[0.025]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-24"
        >
          <span className="inline-block text-brandTeal text-xs font-bold uppercase tracking-widest mb-4 px-4 py-2 rounded-full bg-brandTeal/10 border border-brandTeal/20">
            Live Deployments
          </span>
          <h2 className="font-display font-black text-5xl lg:text-6xl text-brandNavy tracking-tight mb-6">
            Real Systems.
            <br />
            <span className="gradient-text">Real Business Impact.</span>
          </h2>
          <p className="text-slateText text-xl max-w-2xl mx-auto">
            These aren't demos or mockups. These are live systems running Sri Lankan businesses right now.
          </p>
        </motion.div>

        <div className="space-y-36">
          {DEPLOYMENTS.map((d, i) => (
            <DeploymentRow key={i} d={d} i={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
