'use client';

import { useEffect, useLayoutEffect, useRef, useState, type FormEvent } from 'react';
import { WHATSAPP_DISPLAY, WHATSAPP_NUMBER } from '@/lib/constants';
import { openWhatsApp } from '@/lib/utils';

const MESSAGE = "Hi IPYNB! I'm enquiring about a system for my business.";

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M3.4 20.4 21 12 3.4 3.6 3.4 10.2 15 12 3.4 13.8Z" />
    </svg>
  );
}

export default function WhatsAppCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const boxRef = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState('');
  const [typing, setTyping] = useState(false);
  const [edited, setEdited] = useState(false);
  const done = !typing && text.length > 0;

  // Type the enquiry out once, the first time the banner scrolls into view.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(MESSAGE);
      return;
    }
    let timer: ReturnType<typeof setInterval> | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        let i = 0;
        setTyping(true);
        timer = setInterval(() => {
          i += 1;
          setText(MESSAGE.slice(0, i));
          if (i >= MESSAGE.length) {
            clearInterval(timer);
            setTyping(false);
          }
        }, 45);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      if (timer) clearInterval(timer);
    };
  }, []);

  // Grow the message box with its text, like WhatsApp's composer.
  useLayoutEffect(() => {
    const box = boxRef.current;
    if (!box) return;
    box.style.height = 'auto';
    box.style.height = `${box.scrollHeight}px`;
  }, [text]);

  const send = (e?: FormEvent) => {
    e?.preventDefault();
    openWhatsApp(text.trim() || MESSAGE, WHATSAPP_NUMBER);
  };

  return (
    <section ref={sectionRef} className="border-t border-line bg-white py-20" aria-labelledby="whatsapp-cta-heading">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1fr_1.1fr]">
        {/* Copy */}
        <div>
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#25D366]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#128C7E]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" />
            We’re on WhatsApp
          </span>
          <h2 id="whatsapp-cta-heading" className="mb-4 font-display text-4xl font-bold tracking-tight text-brandNavy">
            Ready to move off paper?
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-slateText">
            Systems from LKR 30,000 one-time setup. Send us a message about your business — it opens WhatsApp with your
            enquiry ready to send.
          </p>
          <p className="text-sm text-muted">
            Or message us directly on{' '}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-ink underline decoration-line underline-offset-4 hover:decoration-ink"
            >
              {WHATSAPP_DISPLAY}
            </a>
          </p>
        </div>

        {/* WhatsApp-style chat */}
        <div className="overflow-hidden rounded-2xl border border-line shadow-[0_30px_60px_-30px_rgba(20,23,28,0.35)]">
          {/* Chat header */}
          <div className="flex items-center gap-3 bg-[#008069] px-4 py-3 text-white">
            <img src="/icon.svg" alt="" className="h-10 w-10 rounded-full bg-white" />
            <div className="min-w-0">
              <p className="truncate font-semibold leading-tight">IPYNB Solutions</p>
              <p className="text-xs text-white/75">{WHATSAPP_DISPLAY}</p>
            </div>
          </div>

          {/* Chat body */}
          <div
            className="space-y-3 bg-[#efeae2] px-4 py-6"
            style={{
              backgroundImage: 'radial-gradient(rgba(20,23,28,0.06) 1px, transparent 1px)',
              backgroundSize: '18px 18px',
            }}
          >
            <div className="flex justify-center">
              <span className="rounded-md bg-white/80 px-2.5 py-1 text-[11px] font-medium text-muted shadow-sm">Today</span>
            </div>
            <div className="flex justify-start">
              <div className="max-w-[85%] rounded-2xl rounded-tl-md bg-white px-3.5 py-2 text-sm text-ink shadow-sm">
                Hi! Tell us a little about your business and we’ll help you find the right system.
              </div>
            </div>
          </div>

          {/* Typing bar */}
          <form onSubmit={send} className="flex items-end gap-2 bg-[#f0f2f5] px-3 py-3">
            <div className="flex min-w-0 flex-1 items-end gap-2 rounded-3xl bg-white px-3 py-2 shadow-sm">
              <button
                type="button"
                onClick={() => send()}
                aria-label="Attach files in WhatsApp"
                className="mb-px flex-shrink-0 text-muted transition-colors hover:text-ink"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 -rotate-45" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" aria-hidden="true">
                  <path d="M21 11.5 12.6 19.9a5.5 5.5 0 0 1-7.8-7.8l8.5-8.5a3.7 3.7 0 0 1 5.2 5.2l-8.5 8.5a1.8 1.8 0 0 1-2.6-2.6l7.8-7.8" />
                </svg>
              </button>
              <label htmlFor="wa-message" className="sr-only">
                Your message
              </label>
              <textarea
                ref={boxRef}
                id="wa-message"
                rows={1}
                value={text}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) send(e);
                }}
                onFocus={() => {
                  if (!edited) {
                    setTyping(false);
                    setText(MESSAGE);
                  }
                }}
                onChange={(e) => {
                  setEdited(true);
                  setText(e.target.value);
                }}
                placeholder="Type a message"
                className="min-w-0 flex-1 resize-none bg-transparent py-0.5 text-sm leading-5 text-ink caret-[#008069] outline-none placeholder:text-muted"
              />
              <button
                type="button"
                onClick={() => send()}
                aria-label="Open camera in WhatsApp"
                className="mb-px flex-shrink-0 text-muted transition-colors hover:text-ink"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 8h3l1.5-2h7L17 8h3v11H4Z" />
                  <circle cx="12" cy="13" r="3.5" />
                </svg>
              </button>
            </div>
            <button
              type="submit"
              aria-label="Send on WhatsApp"
              className="relative flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#00a884] text-white transition-transform hover:scale-105"
            >
              {done && <span className="absolute inset-0 animate-ping rounded-full bg-[#00a884]/50 motion-reduce:hidden" />}
              <span className="relative">
                <SendIcon />
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
