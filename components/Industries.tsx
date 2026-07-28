'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const INDUSTRIES = [
  {
    id: 'retail',
    title: 'Retail & Supermarkets',
    subtitle: 'Inventory Intelligence',
    body: 'Barcode billing, supplier management, and real-time stock levels. Eliminate shrinkage and overstock with automatic reorder alerts.',
    impact: ['Reduce stock errors by 90%', 'Bill 3× faster at checkout', 'Auto-detect low stock', 'Multi-branch sync'],
    photo: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=900&q=80',
    icon: '🏪',
    color: '#6366F1',
    metric: { value: '3×', label: 'Faster Billing' },
  },
  {
    id: 'restaurant',
    title: 'Restaurants & Cafes',
    subtitle: 'Operational Clarity',
    body: 'Table management, kitchen display systems, and shift reporting — built for the speed of food service. Your kitchen and front-desk stay perfectly synced.',
    impact: ['Table + KDS integration', 'Shift & tip reporting', 'Menu management', 'Daily P&L dashboard'],
    photo: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=900&q=80',
    icon: '🍽️',
    color: '#F59E0B',
    metric: { value: '40%', label: 'Less Wait Time' },
  },
  {
    id: 'social',
    title: 'Social Commerce',
    subtitle: 'Social-to-Checkout',
    body: 'Move your WhatsApp and Instagram orders into a fully automated e-commerce and order management system. No more lost DMs.',
    impact: ['Auto-capture WhatsApp orders', 'Instagram shop integration', 'Inventory sync', 'Automated invoicing'],
    photo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80',
    icon: '📱',
    color: '#8B5CF6',
    metric: { value: '0', label: 'Missed Orders' },
  },
  {
    id: 'pharmacy',
    title: 'Pharmacies',
    subtitle: 'Healthcare Compliance',
    body: 'Expiry tracking, controlled-substance logging, and insurance billing — all engineered for pharmacy-specific compliance.',
    impact: ['Expiry date alerts', 'Prescription management', 'Supplier ledger', 'MoH compliance reports'],
    photo: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=900&q=80',
    icon: '💊',
    color: '#10B981',
    metric: { value: '100%', label: 'Expiry Tracked' },
  },
  {
    id: 'services',
    title: 'Salons & Services',
    subtitle: 'Client Lifecycle',
    body: 'Membership billing, appointment logs, and client history. Know your most valuable customers and reward them automatically.',
    impact: ['Client loyalty tracking', 'Appointment scheduling', 'Membership billing', 'Staff performance'],
    photo: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=900&q=80',
    icon: '💈',
    color: '#EC4899',
    metric: { value: '2×', label: 'Client Retention' },
  },
  {
    id: 'hardware',
    title: 'Hardware & Auto Parts',
    subtitle: 'Trade Intelligence',
    body: 'Running bills, credit customers, and supplier ledgers for high-SKU trade businesses. Know your margins at every sale.',
    impact: ['Running bill management', 'Credit customer ledger', 'Barcode & bulk billing', 'Profit per-item analytics'],
    photo: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=900&q=80',
    icon: '🔧',
    color: '#F97316',
    metric: { value: '60%', label: 'Fewer Disputes' },
  },
];

export default function Industries() {
  const [activeId, setActiveId] = useState('retail');
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const activeIndustry = INDUSTRIES.find((i) => i.id === activeId) || INDUSTRIES[0];

  return (
    <section className="py-32 bg-brandNavy relative overflow-hidden" id="solutions" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 dot-grid opacity-10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brandTeal/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brandTeal/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-brandTeal text-xs font-bold uppercase tracking-widest mb-4 px-4 py-2 rounded-full glass-teal border border-brandTeal/20">
            Industry-Specific Solutions
          </span>
          <h2 className="font-display font-black text-5xl lg:text-6xl text-white tracking-tight mb-6 leading-tight">
            Built for <span className="gradient-text">Your Industry.</span>
            <br />Not a Generic Product.
          </h2>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">
            Every system is architected around your specific workflows, compliance needs, and customer patterns.
          </p>
        </motion.div>

        {/* Industry tab selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {INDUSTRIES.map((ind) => (
            <motion.button
              key={ind.id}
              onClick={() => setActiveId(ind.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                activeId === ind.id
                  ? 'bg-brandTeal text-white teal-glow-sm'
                  : 'glass text-slate-300 hover:text-white hover:border-brandTeal/30 border border-white/10'
              }`}
            >
              <span>{ind.icon}</span>
              {ind.title.split(' ')[0]} {ind.title.split(' ')[1] || ''}
            </motion.button>
          ))}
        </motion.div>

        {/* Active industry detail */}
        <motion.div
          key={activeId}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left: Info */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-teal border border-brandTeal/20 mb-6">
              <span className="text-2xl">{activeIndustry.icon}</span>
              <span className="text-brandTeal text-xs font-bold uppercase tracking-widest">{activeIndustry.subtitle}</span>
            </div>

            <h3 className="font-display font-black text-4xl text-white mb-5 leading-tight">
              {activeIndustry.title}
            </h3>

            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              {activeIndustry.body}
            </p>

            {/* Impact list */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {activeIndustry.impact.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3 glass-teal rounded-xl px-4 py-3 border border-brandTeal/15"
                >
                  <span className="w-5 h-5 rounded-full bg-brandTeal/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-brandTeal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-slate-200 text-sm font-medium">{point}</span>
                </motion.div>
              ))}
            </div>

            {/* Metric callout */}
            <div className="glass border border-white/10 rounded-2xl p-6 inline-flex items-center gap-6">
              <div>
                <div className="font-display font-black text-5xl text-brandTeal">{activeIndustry.metric.value}</div>
                <div className="text-slate-400 text-sm mt-1">{activeIndustry.metric.label}</div>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <p className="text-slate-300 text-sm max-w-[180px]">
                Average improvement reported by our {activeIndustry.title.toLowerCase()} clients
              </p>
            </div>
          </div>

          {/* Right: Photo */}
          <motion.div
            className="relative rounded-3xl overflow-hidden"
            style={{ height: '420px' }}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${activeIndustry.photo})` }}
              key={activeId + '-img'}
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brandNavy/80 via-brandNavy/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-brandNavy/30 to-transparent" />

            {/* Corner badge */}
            <div className="absolute top-6 right-6 glass-dark rounded-xl px-4 py-2 border border-white/10">
              <div className="text-xs text-slate-400 mb-0.5">Business Impact</div>
              <div className="font-display font-black text-xl text-brandTeal">{activeIndustry.metric.value}</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
