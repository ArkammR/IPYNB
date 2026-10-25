'use client';

import { useEffect, useRef, useState } from 'react';
import Reveal from '@/components/Reveal';

const steps = [
  {
    title: 'Visit',
    body: 'We visit your business, see how you bill and keep stock today, and agree on what the system needs to do.',
    icon: <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Zm0-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />,
  },
  {
    title: 'Build',
    body: 'We build the system around your products, prices and staff roles, and show it to you before going live.',
    icon: <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" />,
  },
  {
    title: 'Set up & train',
    body: 'We install it at your shop, connect printers and scanners, and train your staff.',
    icon: <path d="M4 5h16v10H4zM9 19h6M12 15v4M9 10l2 2 4-4" />,
  },
  {
    title: 'Support',
    body: 'Questions and fixes over WhatsApp for the support period in your plan, and new features when you need them.',
    icon: <path d="M7 18l-3 3V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H7ZM8 9h8M8 13h5" />,
  },
];

export default function Process() {
  const trackRef = useRef<HTMLOListElement>(null);
  const nodeRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(-1);

  // Fill the line as the timeline scrolls past a point 60% down the screen,
  // and light up each step once the fill reaches it.
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const track = trackRef.current;
      if (!track) return;
      const line = window.innerHeight * 0.6;
      const rect = track.getBoundingClientRect();
      setProgress(Math.min(1, Math.max(0, (line - rect.top) / rect.height)));
      let last = -1;
      nodeRefs.current.forEach((node, i) => {
        if (node && node.getBoundingClientRect().top < line) last = i;
      });
      setActive(last);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="bg-white py-24" id="process">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-display text-4xl font-bold tracking-tight text-brandNavy lg:text-5xl">
            How it works
          </h2>
          <p className="mx-auto max-w-xl text-lg text-slateText">
            Four steps from your first message to a working system.
          </p>
        </div>

        <ol ref={trackRef} className="relative">
          {/* Track and fill: left edge on mobile, centre on desktop */}
          <div className="absolute bottom-0 left-5 top-0 w-0.5 -translate-x-1/2 rounded-full bg-line md:left-1/2" aria-hidden="true">
            <div
              className="w-full origin-top rounded-full bg-gradient-to-b from-brandTeal to-[#2bb3b3] motion-reduce:!h-full"
              style={{ height: `${progress * 100}%` }}
            />
          </div>

          {steps.map((step, i) => {
            const isActive = i <= active;
            const right = i % 2 === 1;
            return (
              <li key={step.title} className="relative pb-14 last:pb-0 md:grid md:grid-cols-2 md:gap-16">
                {/* Node */}
                <span
                  ref={(el) => {
                    nodeRefs.current[i] = el;
                  }}
                  className={`absolute left-5 top-0 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-2 bg-white transition-all duration-500 md:left-1/2 ${
                    isActive
                      ? 'border-brandTeal text-brandTeal shadow-[0_0_0_6px_rgba(0,139,139,0.12)]'
                      : 'border-line text-muted'
                  }`}
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {step.icon}
                  </svg>
                </span>

                <Reveal className={`pl-16 md:pl-0 ${right ? 'md:col-start-2' : 'md:col-start-1 md:text-right'}`}>
                  <div
                    className={`rounded-2xl border p-6 transition-all duration-500 ${
                      isActive
                        ? 'border-brandTeal/30 bg-white shadow-[0_20px_40px_-24px_rgba(0,139,139,0.35)]'
                        : 'border-line bg-paper'
                    }`}
                  >
                    <p className={`mb-1 text-xs font-semibold uppercase tracking-widest transition-colors duration-500 ${isActive ? 'text-brandTeal' : 'text-muted'}`}>
                      Step {String(i + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mb-2 font-display text-xl font-bold text-brandNavy">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-slateText">{step.body}</p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
