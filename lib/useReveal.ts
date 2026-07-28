'use client';

import { useEffect, useRef } from 'react';

/**
 * Attaches an IntersectionObserver to all elements with .reveal,
 * .reveal-left, .reveal-right, or .reveal-scale classes inside the
 * observed root element, adding the "visible" class when they enter view.
 *
 * Usage: call useReveal() inside any 'use client' section component.
 */
export function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    const targets = document.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right, .reveal-scale'
    );
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
