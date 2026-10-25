'use client';

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  // Delay before the fade-in starts, in ms. Useful for staggering a row of cards.
  delay?: number;
  // Set false to only toggle data-shown (for child animations) without fading the wrapper.
  fade?: boolean;
};

// Marks itself data-shown="true" the first time it scrolls into view. The wrapper
// fades up via the .reveal class, and children can animate with
// `group-data-[shown=true]:…` classes.
export default function Reveal({ children, className = '', style, delay = 0, fade = true }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setShown(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-shown={shown}
      className={`group ${fade ? 'reveal' : ''} ${className}`}
      style={{ transitionDelay: fade ? `${delay}ms` : undefined, ...style }}
    >
      {children}
    </div>
  );
}
