'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { WHATSAPP_NUMBER } from '@/lib/constants';
import { openWhatsApp } from '@/lib/utils';
import { scrollToSection } from '@/lib/scroll';

const ROTATING_WORDS = ['Retail Stores', 'Pharmacies', 'Restaurants', 'Hardware Shops', 'Importers', 'Salons'];

const STATS = [
  { value: '500+', label: 'Businesses Transformed', icon: '🏢' },
  { value: 'LKR 0', label: 'Monthly Fees. Ever.', icon: '💰' },
  { value: '24/7', label: 'WhatsApp Support', icon: '💬' },
  { value: '100%', label: 'Lifetime Ownership', icon: '🔑' },
];

const FLOATING_METRICS = [
  { label: 'Sales Today', value: 'LKR 284,500', change: '+18%', color: 'text-emerald-400' },
  { label: 'Stock Alerts', value: '3 Low Items', change: 'Restocking', color: 'text-amber-400' },
  { label: 'Active Bills', value: '47 Open', change: 'Real-time', color: 'text-brandTeal' },
];

// Character-by-character reveal variants
const headlineContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.035,
      delayChildren: 0.15,
    },
  },
};

const charVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: 'easeOut' } },
};

const STATIC_TEXT = 'Custom Systems\nBuilt for ';

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);

  // Scroll parallax
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // Mouse-tracking parallax for the dashboard mockup
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [6, -6]), { stiffness: 150, damping: 25 });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-6, 6]), { stiffness: 150, damping: 25 });

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % ROTATING_WORDS.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleCTA = () => {
    openWhatsApp("Hi! I'd like to explore a custom solution for my business.", WHATSAPP_NUMBER);
  };

  // Split static text into characters for stagger reveal
  const staticChars = STATIC_TEXT.split('');

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden hero-mesh"
    >
      {/* Animated mesh grid background */}
      <div className="absolute inset-0 dot-grid opacity-30" />

      {/* Animated radial glow orbs */}
      <motion.div
        className="absolute top-1/5 left-1/5 w-[600px] h-[600px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/5 right-1/5 w-[400px] h-[400px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(79,70,229,0.08) 0%, transparent 70%)' }}
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-brandTeal"
          style={{
            left: `${10 + i * 8}%`,
            top: `${20 + (i % 3) * 25}%`,
            opacity: 0.2 + (i % 4) * 0.1,
          }}
          animate={{
            y: [-10, -30, -10],
            x: [-5, 5, -5],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.3,
          }}
        />
      ))}

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full"
        style={{ y, opacity }}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ─── Left: Content ─── */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-teal mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-brandTeal animate-pulse" />
              <span className="text-brandTeal text-xs font-bold uppercase tracking-widest">
                Engineering-Led Business Systems · Sri Lanka
              </span>
            </motion.div>

            {/* Headline with character-by-character reveal on static part */}
            <div>
              <h1 className="font-display font-black text-5xl lg:text-7xl text-white leading-[1.05] tracking-tight mb-4">
                <motion.span
                  variants={headlineContainerVariants}
                  initial="hidden"
                  animate="visible"
                  aria-label={STATIC_TEXT}
                  className="inline"
                >
                  {staticChars.map((char, idx) =>
                    char === '\n' ? (
                      <br key={idx} />
                    ) : (
                      <motion.span key={idx} variants={charVariants} className="inline-block whitespace-pre">
                        {char}
                      </motion.span>
                    )
                  )}
                </motion.span>
                <span className="relative inline-block">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={wordIndex}
                      className="gradient-text"
                      initial={{ opacity: 0, y: 20, rotateX: -90 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      exit={{ opacity: 0, y: -20, rotateX: 90 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                    >
                      {ROTATING_WORDS[wordIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-slate-400 text-xl leading-relaxed mb-10 max-w-lg"
            >
              Replace pen-and-paper chaos with a POS, billing, and inventory system
              engineered around how your business <span className="text-white font-semibold">actually operates</span>.
              One-time payment. Forever yours.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="flex flex-wrap gap-4 mb-14"
            >
              <motion.button
                onClick={handleCTA}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="relative overflow-hidden bg-brandTeal text-white px-8 py-4 rounded-xl font-bold text-base teal-glow group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Get Free Consultation
                </span>
                <motion.span
                  className="absolute inset-0 bg-white/10"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.4 }}
                />
              </motion.button>

              <motion.a
                href="/work"
                onClick={(e) => { e.preventDefault(); scrollToSection('work'); }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 border border-white/20 text-white px-10 py-4 rounded-xl font-bold text-base hover:border-brandTeal/60 hover:bg-brandTeal/5 transition-all"
              >
                View Live Systems
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </motion.div>

            {/* Stats — spring bounce entrance */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30, scale: 0.85 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                    delay: 0.55 + i * 0.1,
                  }}
                  className="text-center border border-white/10 rounded-xl p-3 glass"
                >
                  <div className="text-lg mb-1">{stat.icon}</div>
                  <div className="font-display font-black text-xl text-white">{stat.value}</div>
                  <div className="text-slate-500 text-xs mt-0.5">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ─── Right: Dashboard Mockup with mouse-tracking parallax ─── */}
          <motion.div
            ref={mockupRef}
            initial={{ opacity: 0, x: 60, rotateY: 15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative"
            style={{ perspective: '1200px' }}
          >
            {/* Outer glow */}
            <div className="absolute inset-0 blur-3xl opacity-30" style={{
              background: 'radial-gradient(ellipse, rgba(99,102,241,0.5) 0%, transparent 70%)'
            }} />

            {/* Browser chrome — tilt follows cursor */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              className="relative z-10 rounded-2xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.6)] border border-white/10"
            >
              {/* Title bar */}
              <div className="bg-[#161B26] px-4 py-3 flex items-center gap-3 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-[#0D1117] rounded-md px-3 py-1.5 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-brandTeal animate-pulse" />
                    <span className="text-slate-400 text-xs">pos.ceylonchai.lk/dashboard</span>
                  </div>
                </div>
              </div>
              {/* Screenshot */}
              <div className="relative aspect-video bg-[#0D1117]">
                <Image
                  src="/products/pos-system.png"
                  alt="IPYNB POS Dashboard — Live System"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 55vw"
                  priority
                />
                {/* Scan line effect */}
                <motion.div
                  className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-brandTeal/40 to-transparent"
                  animate={{ top: ['0%', '100%'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                />
              </div>
            </motion.div>

            {/* Floating metric cards */}
            {FLOATING_METRICS.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, y: [0, -5, 0] }}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.15, y: { duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.8 } }}
                className="absolute z-20 glass-dark rounded-xl px-4 py-3 min-w-[160px] border border-white/10"
                style={{
                  top: i === 0 ? '-16px' : i === 1 ? '30%' : undefined,
                  bottom: i === 2 ? '-16px' : undefined,
                  right: i === 1 ? '-20px' : i === 2 ? '10%' : undefined,
                  left: i === 0 ? '10%' : undefined,
                }}
              >
                <div className="text-slate-400 text-xs mb-1">{m.label}</div>
                <div className="text-white font-bold text-sm">{m.value}</div>
                <div className={`text-xs font-semibold mt-0.5 ${m.color}`}>{m.change}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <div className="flex flex-col items-center gap-2 text-slate-500">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-brandTeal/50 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
