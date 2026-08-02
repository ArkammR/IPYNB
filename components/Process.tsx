'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const STEPS = [
  {
    number: '01',
    title: 'Workflow Audit',
    subtitle: 'We study your operation',
    body: 'Our system analyst visits your business and maps every manual process — from stock counts to end-of-day reports. We identify exactly where time and money are being lost.',
    deliverable: 'Audit Report + System Blueprint',
    duration: '1–2 days',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Custom Architecture',
    subtitle: 'Built for your workflows',
    body: 'We design your database logic, interface flows, and reporting structure specifically for your team — not a template. Every button and report is intentional.',
    deliverable: 'System Design + UI Mockups',
    duration: '3–7 days',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'On-Site Deployment',
    subtitle: 'Live in your business',
    body: 'We physically install hardware, configure your network, migrate any existing data, and do hands-on staff training until every team member is confident using the system.',
    deliverable: 'Live System + Trained Staff',
    duration: '1 day on-site',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Lifetime Evolution',
    subtitle: 'Your system grows with you',
    body: 'As your business grows, your system does too. Request new features, get instant WhatsApp support, and receive free updates — permanently.',
    deliverable: 'Ongoing Support + Updates',
    duration: 'Forever',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="py-32 bg-transparent relative overflow-hidden" id="process" ref={ref}>
      <div className="absolute inset-0 dot-grid opacity-[0.025]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-brandTeal text-xs font-bold uppercase tracking-widest mb-4 px-4 py-2 rounded-full bg-brandTeal/10 border border-brandTeal/20">
            Our Process
          </span>
          <h2 className="font-display font-black text-5xl lg:text-6xl text-white tracking-tight mb-6">
            From Chaos to Control
            <br />
            <span className="gradient-text">in Four Clear Steps.</span>
          </h2>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">
            A zero-disruption process that gets your system live while your business keeps running.
          </p>
        </motion.div>

        {/* Desktop: Interactive stepper */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-start">
          {/* Step list */}
          <div className="space-y-4">
            {/* Animated connecting line */}
            <div className="relative mb-6 h-1 bg-slate-100 rounded-full overflow-hidden">
              <motion.div
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-brandTeal to-indigo-500 rounded-full origin-left"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
                style={{ width: '100%' }}
              />
            </div>

            {STEPS.map((step, i) => (
              <motion.button
                key={i}
                onClick={() => setActiveStep(i)}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`w-full text-left rounded-2xl p-6 transition-all duration-300 border group relative ${
                  activeStep === i
                    ? 'bg-brandNavy border-brandTeal/30 shadow-[0_0_30px_rgba(99,102,241,0.1)]'
                    : 'bg-white/10 border-white/10 hover:border-brandTeal/20 hover:bg-slate-50/50'
                }`}
              >
                {/* Active step indicator morphs with layoutId */}
                {activeStep === i && (
                  <motion.div
                    layoutId="active-step"
                    className="absolute inset-0 rounded-2xl bg-brandNavy border border-brandTeal/30"
                    style={{ zIndex: -1 }}
                    transition={{ type: 'spring', stiffness: 380, damping: 35 }}
                  />
                )}

                <div className="flex items-start gap-5">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors ${
                    activeStep === i ? 'bg-brandTeal text-white' : 'bg-white/10 text-brandTeal'
                  }`}>
                    {step.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <span className={`font-display font-black text-xs tracking-widest ${
                        activeStep === i ? 'text-brandTeal' : 'text-slate-400'
                      }`}>{step.number}</span>
                      <span className={`text-sm font-semibold ${
                        activeStep === i ? 'text-brandTeal' : 'text-slate-400'
                      }`}>{step.subtitle}</span>
                    </div>
                    <h3 className={`font-display font-black text-xl leading-tight ${
                      activeStep === i ? 'text-white' : 'text-white'
                    }`}>{step.title}</h3>
                    {activeStep === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="flex gap-4 mt-3"
                      >
                        <div className="flex items-center gap-1.5 text-xs text-slate-400">
                          <svg className="w-3.5 h-3.5 text-brandTeal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {step.duration}
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-slate-400">
                          <svg className="w-3.5 h-3.5 text-brandTeal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {step.deliverable}
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Detail panel */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="sticky top-28"
          >
            <div className="bg-brandNavy rounded-3xl p-10 border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-5"
                style={{ background: 'radial-gradient(circle, #6366F1 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-brandTeal flex items-center justify-center text-white">
                    {STEPS[activeStep].icon}
                  </div>
                  <div>
                    <div className="text-brandTeal text-xs font-bold uppercase tracking-widest">Step {STEPS[activeStep].number}</div>
                    <div className="text-white font-display font-black text-xl">{STEPS[activeStep].title}</div>
                  </div>
                </div>

                <p className="text-slate-300 text-lg leading-relaxed mb-10">
                  {STEPS[activeStep].body}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="glass-teal rounded-xl p-4 border border-brandTeal/15">
                    <div className="text-brandTeal text-xs font-bold uppercase tracking-wide mb-2">Timeline</div>
                    <div className="text-white font-display font-bold text-lg">{STEPS[activeStep].duration}</div>
                  </div>
                  <div className="glass rounded-xl p-4 border border-white/10">
                    <div className="text-slate-400 text-xs font-bold uppercase tracking-wide mb-2">Deliverable</div>
                    <div className="text-white text-sm font-medium leading-tight">{STEPS[activeStep].deliverable}</div>
                  </div>
                </div>

                {/* Progress dots */}
                <div className="flex gap-2 mt-8">
                  {STEPS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveStep(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === activeStep ? 'bg-brandTeal w-8' : 'bg-white/20 w-4 hover:bg-white/40'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile: Vertical cards */}
        <div className="lg:hidden space-y-6">
          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-transparent rounded-2xl p-6 border border-white/10 shadow-[0_4px_20px_rgba(13,17,23,0.05)]"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-brandTeal/10 flex items-center justify-center text-brandTeal flex-shrink-0">
                  {step.icon}
                </div>
                <div>
                  <div className="text-brandTeal text-xs font-bold uppercase tracking-widest mb-1">{step.number} · {step.subtitle}</div>
                  <h3 className="font-display font-black text-xl text-white">{step.title}</h3>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed text-sm mb-4">{step.body}</p>
              <div className="flex gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1">⏱ {step.duration}</span>
                <span className="flex items-center gap-1">✓ {step.deliverable}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
