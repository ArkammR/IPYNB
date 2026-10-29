'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';

// A day's sales at a small café. The handwritten total is added up wrong
// (3,140), crossed out and corrected — the system just gets it right.
const SALES = [
  { item: 'Milk tea', qty: 2, amount: 560 },
  { item: 'Egg roti', qty: 3, amount: 450 },
  { item: 'Chai + bun', qty: 1, amount: 380 },
  { item: 'Plain tea', qty: 4, amount: 400 },
  { item: 'Chicken kottu', qty: 1, amount: 1250 },
];
const TOTAL = SALES.reduce((sum, s) => sum + s.amount, 0);
const MAX_SALE = Math.max(...SALES.map((s) => s.amount));
const HOURS = ['8a', '10a', '12p', '2p', '4p'];

const STEPS = [
  { title: 'Paper books', caption: 'End of the day, every sale is added up by hand.' },
  { title: 'Into your system', caption: 'Each sale is billed straight into the POS.' },
  { title: "Today's total, instantly", caption: 'No adding up — the total is always right.' },
  { title: 'Backed up to the cloud', caption: 'Saved online automatically, every time.' },
];

// Scroll checkpoints (0–1 through the pinned section)
const WRITE_END = 0.3;
const FLY_START = 0.32;
const FLY_STAGGER = 0.05;
const FLY_LEN = 0.12;
const TOTAL_START = 0.64;
const BACKUP_START = 0.8;
const BACKUP_DONE = 0.92;

// Two fixed drawing boards: side by side on wide screens, stacked on phones.
// Every position below is in board pixels; the board is scaled to fit.
const WIDE = {
  W: 960,
  H: 520,
  paper: { x: 30, y: 40, w: 380, h: 430, rot: -2.5 },
  paperHead: 30,
  ruleGap: 46,
  marginX: 38,
  paperRow: (i: number) => ({ x: 78, y: 134 + i * 46 }),
  paperRowW: 250,
  paperTotalY: 134 + 5 * 46 + 6,
  handSize: 26,
  calc: { x: 362, y: 372, scale: 1, rot: 10 },
  screen: { x: 480, y: 120, w: 450, h: 290 },
  bar: 26,
  listX: 504,
  listW: 240,
  listHeadY: 166,
  screenRow: (i: number) => ({ x: 504, y: 188 + i * 30 }),
  rowH: 26,
  rowSize: 13,
  panel: { x: 756, w: 152, totalY: 166, totalH: 72, chartY: 248, chartH: 96 },
  statusY: 372,
  cloud: { x: 645, y: 8, w: 120, h: 76 },
};

const TALL = {
  W: 360,
  H: 560,
  paper: { x: 14, y: 6, w: 332, h: 240, rot: -2 },
  paperHead: 14,
  ruleGap: 28,
  marginX: 22,
  paperRow: (i: number) => ({ x: 44, y: 62 + i * 28 }),
  paperRowW: 196,
  paperTotalY: 62 + 5 * 28 + 2,
  handSize: 19,
  calc: { x: 272, y: 96, scale: 0.68, rot: 10 },
  screen: { x: 14, y: 330, w: 332, h: 220 },
  bar: 22,
  listX: 26,
  listW: 190,
  listHeadY: 362,
  screenRow: (i: number) => ({ x: 26, y: 380 + i * 22 }),
  rowH: 20,
  rowSize: 11,
  panel: { x: 224, w: 112, totalY: 362, totalH: 56, chartY: 426, chartH: 66 },
  statusY: 518,
  cloud: { x: 130, y: 254, w: 100, h: 62 },
};

type Layout = typeof WIDE;

const clamp = (v: number) => Math.min(1, Math.max(0, v));
const seg = (p: number, a: number, b: number) => clamp((p - a) / (b - a));
const ease = (t: number) => 1 - Math.pow(1 - t, 3);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const lkr = (n: number) => n.toLocaleString('en-US');

function Calculator({ display }: { display: string }) {
  return (
    <div className="w-[110px] rounded-[14px] bg-[#2b2f36] p-2.5 shadow-[0_12px_24px_-8px_rgba(0,0,0,0.45)]">
      <div className="mb-2 rounded-md bg-[#c9d8c5] px-2 py-1.5 text-right font-mono text-[15px] leading-none tracking-wider text-[#23301f]">
        {display}
      </div>
      <div className="grid grid-cols-4 gap-1">
        {['7', '8', '9', '÷', '4', '5', '6', '×', '1', '2', '3', '−', '0', '.', '=', '+'].map((k) => (
          <span
            key={k}
            className={`flex h-[18px] items-center justify-center rounded-[4px] text-[9px] font-semibold ${
              '÷×−+='.includes(k) ? 'bg-[#e8743b] text-white' : 'bg-[#454a53] text-white/85'
            }`}
          >
            {k}
          </span>
        ))}
      </div>
    </div>
  );
}

function CloudIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 76" className={className} aria-hidden="true">
      <path
        d="M30 70h62a24 24 0 0 0 3-47.8A32 32 0 0 0 35 18a26 26 0 0 0-5 52Z"
        fill="#ffffff"
        stroke="#008B8B"
        strokeWidth="3"
      />
    </svg>
  );
}

export default function PaperToCloud() {
  const sectionRef = useRef<HTMLElement>(null);
  const boardWrapRef = useRef<HTMLDivElement>(null);
  const [p, setP] = useState(0);
  const [scale, setScale] = useState(1);
  const [wide, setWide] = useState(true);
  const [reduced, setReduced] = useState(false);

  // Scroll progress through the pinned section drives the whole story.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setReduced(true);
      setP(1);
      return;
    }
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const travel = rect.height - window.innerHeight;
      setP(travel > 0 ? clamp(-rect.top / travel) : 1);
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

  // Pick the board for the screen shape and scale it to the available width.
  useEffect(() => {
    const wrap = boardWrapRef.current;
    if (!wrap) return;
    const fit = () => {
      const isWide = window.innerWidth >= 768;
      const L = isWide ? WIDE : TALL;
      const maxH = window.innerHeight - (isWide ? 260 : 250);
      setWide(isWide);
      setScale(Math.min(wrap.clientWidth / L.W, Math.max(0.5, maxH / L.H), 1.15));
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(wrap);
    window.addEventListener('resize', fit);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', fit);
    };
  }, []);

  const L: Layout = wide ? WIDE : TALL;
  const step = p < FLY_START ? 0 : p < TOTAL_START ? 1 : p < BACKUP_START ? 2 : 3;

  // Stage 1 — writing the book
  const written = SALES.map((_, i) => ease(seg(p, 0.02 + i * 0.035, 0.06 + i * 0.035)));
  const totalWritten = ease(seg(p, 0.2, 0.235));
  const strike = seg(p, 0.235, 0.26);
  const corrected = ease(seg(p, 0.26, WRITE_END));
  const calcSum = SALES.reduce((sum, s, i) => (written[i] > 0.9 ? sum + s.amount : sum), 0);

  // Stage 2 — each line flies from the paper into the POS
  const fly = SALES.map((_, i) => seg(p, FLY_START + i * FLY_STAGGER, FLY_START + i * FLY_STAGGER + FLY_LEN));
  const landed = fly.filter((t) => t >= 1).length;
  const paperFade = seg(p, 0.58, 0.7);

  // Stage 3 — total and chart
  const totalT = ease(seg(p, TOTAL_START, TOTAL_START + 0.1));
  const shownTotal = Math.round(TOTAL * totalT);

  // Stage 4 — backup
  const cloudIn = ease(seg(p, BACKUP_START - 0.04, BACKUP_START + 0.02));
  const upload = seg(p, BACKUP_START, BACKUP_DONE);
  const backedUp = p >= BACKUP_DONE;

  const box = (x: number, y: number, w?: number, h?: number): CSSProperties => ({
    position: 'absolute',
    left: x,
    top: y,
    width: w,
    height: h,
  });

  const screenInner = { x: L.screen.x + 12, y: L.screen.y + 12, w: L.screen.w - 24, h: L.screen.h - 24 };
  const lineTop = L.cloud.y + L.cloud.h - 6;
  const lineBottom = L.screen.y;
  const lineX = L.cloud.x + L.cloud.w / 2;

  return (
    <section
      ref={sectionRef}
      className="relative bg-brandGray"
      style={{ height: reduced ? 'auto' : wide ? '360vh' : '300vh' }}
      aria-labelledby="paper-to-cloud-heading"
    >
      <div className={`${reduced ? '' : 'sticky top-0 h-screen'} flex flex-col items-center justify-center overflow-hidden px-4 pb-6 pt-20`}>
        <div className="mb-3 text-center md:mb-5">
          <h2 id="paper-to-cloud-heading" className="font-display text-2xl font-bold tracking-tight text-brandNavy [text-wrap:balance] md:text-4xl">
            From paper books to the cloud
          </h2>
        </div>

        {/* Stage pills */}
        <ol className="mb-4 hidden flex-wrap justify-center gap-2 md:mb-5 md:flex">
          {STEPS.map((s, i) => (
            <li
              key={s.title}
              className={`rounded-full border px-3 py-1 text-xs font-semibold transition-colors duration-300 ${
                i === step
                  ? 'border-brandTeal bg-brandTeal text-white'
                  : i < step
                    ? 'border-brandTeal/30 bg-brandTeal/10 text-brandTeal'
                    : 'border-line bg-white text-muted'
              }`}
            >
              <span className="mr-1 opacity-70">{i + 1}</span>
              {s.title}
            </li>
          ))}
        </ol>

        <p className="mb-3 rounded-full bg-brandTeal px-3 py-1 text-xs font-semibold text-white md:hidden">
          Step {step + 1} of {STEPS.length} · {STEPS[step].title}
        </p>

        {/* Board */}
        <div ref={boardWrapRef} className="w-full max-w-[1100px]">
          <div className="relative mx-auto" style={{ width: L.W * scale, height: L.H * scale }} role="img" aria-label="Animation: a handwritten daily sales book moves into a POS system, the total is calculated instantly and backed up to the cloud.">
            <div className="absolute left-0 top-0 origin-top-left" style={{ width: L.W, height: L.H, transform: `scale(${scale})` }}>
              {/* ── Paper sales book (header, lines and total rotate with the page) ── */}
              <div
                style={{
                  ...box(L.paper.x, L.paper.y, L.paper.w, L.paper.h),
                  transform: `rotate(${L.paper.rot}deg) translateX(${-paperFade * 14}px)`,
                  opacity: 1 - paperFade * 0.55,
                  filter: `grayscale(${paperFade})`,
                  backgroundColor: '#fffdf4',
                  backgroundImage: `linear-gradient(90deg, transparent ${L.marginX}px, rgba(220,80,80,0.35) ${L.marginX}px, rgba(220,80,80,0.35) ${L.marginX + 2}px, transparent ${L.marginX + 2}px), repeating-linear-gradient(to bottom, transparent 0, transparent ${L.ruleGap - 1}px, rgba(70,110,170,0.2) ${L.ruleGap - 1}px, rgba(70,110,170,0.2) ${L.ruleGap}px)`,
                  backgroundPosition: `0 0, 0 ${L.paperRow(0).y - L.paper.y + L.handSize + 4 - (L.ruleGap - 1)}px`,
                }}
                className="rounded-[6px] shadow-[0_18px_40px_-16px_rgba(20,23,28,0.35),0_2px_0_#ece6d3]"
              >
                {/* coffee ring for realism */}
                <div
                  className="absolute rounded-full"
                  style={{ right: wide ? 26 : 70, top: wide ? 18 : 6, width: wide ? 64 : 44, height: wide ? 64 : 44, border: '5px solid rgba(150,100,50,0.12)' }}
                />
                <div
                  className="flex items-baseline justify-between font-hand text-[#1e3a8a]"
                  style={{ ...box(L.marginX + 10, L.paperHead, L.paper.w - L.marginX - 40), fontSize: L.handSize + 6 }}
                >
                  <span className="font-bold">Daily Sales</span>
                  <span style={{ fontSize: L.handSize }}>24/10</span>
                </div>

                {SALES.map((s, i) => {
                  const pos = L.paperRow(i);
                  return (
                    <div
                      key={s.item}
                      className="flex justify-between font-hand font-medium text-[#1e3a8a]"
                      style={{
                        ...box(pos.x - L.paper.x, pos.y - L.paper.y, L.paperRowW, L.handSize + 6),
                        fontSize: L.handSize,
                        clipPath: `inset(0 ${100 - written[i] * 100}% 0 0)`,
                        opacity: fly[i] > 0 ? 0.25 : 1,
                        transition: 'opacity 0.3s',
                      }}
                    >
                      <span>
                        {s.item} {s.qty > 1 ? `x${s.qty}` : ''}
                      </span>
                      <span>{lkr(s.amount)}</span>
                    </div>
                  );
                })}

                {/* Handwritten total, crossed out and corrected */}
                <div
                  className="flex items-baseline gap-3 font-hand text-[#1e3a8a]"
                  style={{
                    ...box(L.paperRow(0).x - L.paper.x, L.paperTotalY - L.paper.y, L.paperRowW, L.handSize + 10),
                    fontSize: L.handSize + 2,
                    opacity: totalWritten,
                    borderTop: '2px solid rgba(30,58,138,0.55)',
                    paddingTop: 2,
                  }}
                >
                  <span className="font-bold">Total</span>
                  <span className="relative ml-auto">
                    3,140
                    <span
                      className="absolute left-[-4px] top-1/2 h-[2.5px] origin-left bg-[#d43c2c]"
                      style={{ width: 'calc(100% + 8px)', transform: `scaleX(${strike}) rotate(-6deg)` }}
                    />
                  </span>
                  <span className="font-bold text-[#d43c2c]" style={{ clipPath: `inset(0 ${100 - corrected * 100}% 0 0)` }}>
                    3,040
                  </span>
                </div>
              </div>

              {/* Calculator */}
              <div
                style={{
                  ...box(L.calc.x, L.calc.y),
                  transform: `rotate(${L.calc.rot}deg) scale(${L.calc.scale})`,
                  transformOrigin: 'top left',
                  opacity: 1 - paperFade * 0.6,
                }}
              >
                <Calculator display={calcSum ? lkr(calcSum) : '0'} />
              </div>

              {/* ── Laptop running the POS ── */}
              <div style={box(L.screen.x, L.screen.y, L.screen.w, L.screen.h)} className="rounded-t-[14px] border border-[#2a2d33] bg-[#16181c] shadow-[0_30px_50px_-24px_rgba(20,23,28,0.45)]" />
              <div style={box(L.screen.x - 22, L.screen.y + L.screen.h, L.screen.w + 44, wide ? 14 : 10)} className="rounded-b-[10px] bg-gradient-to-b from-[#e3e4e7] to-[#b9bcc2]" />
              <div style={box(screenInner.x, screenInner.y, screenInner.w, screenInner.h)} className="overflow-hidden rounded-[3px] bg-[#f7f8fa]" />

              {/* POS top bar */}
              <div
                style={{ ...box(screenInner.x, screenInner.y, screenInner.w, L.bar), fontSize: L.rowSize }}
                className="flex items-center justify-between bg-white px-3 font-semibold text-ink shadow-[0_1px_0_#e5e7eb]"
              >
                <span>
                  <span className="text-brandTeal">.</span>ip POS
                </span>
                <span className="font-normal text-muted">Today · 24 Oct</span>
              </div>

              {/* Bill list header */}
              <div
                style={{ ...box(L.listX, L.listHeadY, L.listW, L.rowH - 6), fontSize: L.rowSize - 2 }}
                className="flex items-center justify-between px-2 font-semibold uppercase tracking-wider text-muted"
              >
                <span>Item</span>
                <span>LKR</span>
              </div>

              {/* Landed bill rows */}
              {SALES.map((s, i) => {
                const pos = L.screenRow(i);
                return (
                  <div
                    key={s.item}
                    style={{ ...box(pos.x, pos.y, L.listW, L.rowH), fontSize: L.rowSize, opacity: fly[i] >= 1 ? 1 : 0 }}
                    className="flex items-center justify-between rounded-md border border-line bg-white px-2 text-ink transition-opacity duration-200"
                  >
                    <span className="truncate">
                      {s.item} <span className="text-muted">×{s.qty}</span>
                    </span>
                    <span className="font-mono font-semibold tabular-nums">{lkr(s.amount)}</span>
                  </div>
                );
              })}

              {/* Flying chips: handwriting turns into a typed bill row mid-air */}
              {SALES.map((s, i) => {
                const t = fly[i];
                if (t <= 0 || t >= 1) return null;
                const a = L.paperRow(i);
                const b = L.screenRow(i);
                const e = ease(t);
                const arc = Math.sin(Math.PI * t) * (wide ? -70 : -40);
                return (
                  <div
                    key={s.item}
                    style={{
                      ...box(lerp(a.x, b.x, e), lerp(a.y, b.y, e) + arc, L.listW, L.rowH),
                      fontSize: L.rowSize,
                      transform: `scale(${1.08 - 0.08 * e}) rotate(${(1 - e) * L.paper.rot}deg)`,
                    }}
                    className="z-10 flex items-center justify-between rounded-md border border-brandTeal/40 bg-white px-2 text-ink shadow-[0_10px_24px_-8px_rgba(0,139,139,0.5)]"
                  >
                    <span className="truncate">
                      {s.item} <span className="text-muted">×{s.qty}</span>
                    </span>
                    <span className="font-mono font-semibold tabular-nums">{lkr(s.amount)}</span>
                  </div>
                );
              })}

              {/* Total card */}
              <div
                style={box(L.panel.x, L.panel.totalY, L.panel.w, L.panel.totalH)}
                className={`flex flex-col justify-center rounded-lg border px-3 transition-colors duration-500 ${totalT >= 1 ? 'border-brandTeal/40 bg-brandTeal/[0.06]' : 'border-line bg-white'}`}
              >
                <span className="text-muted" style={{ fontSize: L.rowSize - 2 }}>
                  Today’s sales
                </span>
                <span className="font-mono font-bold tabular-nums text-ink" style={{ fontSize: L.rowSize + (wide ? 7 : 4) }}>
                  LKR {lkr(shownTotal)}
                </span>
                <span className="text-brandTeal" style={{ fontSize: L.rowSize - 2, opacity: totalT >= 1 ? 1 : 0 }}>
                  ✓ {SALES.length} bills{wide ? ' · always right' : ''}
                </span>
              </div>

              {/* Hourly chart */}
              <div style={box(L.panel.x, L.panel.chartY, L.panel.w, L.panel.chartH)} className="rounded-lg border border-line bg-white px-2 pb-1 pt-2">
                <div className="flex h-full items-end justify-between gap-1.5">
                  {SALES.map((s, i) => (
                    <div key={s.item} className="flex h-full flex-1 flex-col items-center justify-end">
                      <div
                        className="w-full rounded-t-sm bg-brandTeal"
                        style={{
                          height: `${(s.amount / MAX_SALE) * 72 * ease(seg(p, TOTAL_START + 0.02 + i * 0.015, TOTAL_START + 0.08 + i * 0.015))}%`,
                          opacity: 0.55 + 0.45 * (s.amount / MAX_SALE),
                        }}
                      />
                      <span className="mt-0.5 text-muted" style={{ fontSize: L.rowSize - 4 }}>
                        {HOURS[i]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status bar: saved count, then backup progress */}
              <div
                style={{ ...box(L.listX + 4, L.statusY, L.panel.x + L.panel.w - L.listX - 8, L.rowH - 8), fontSize: L.rowSize - 2 }}
                className="flex items-center justify-between text-muted"
              >
                <span>
                  {landed} of {SALES.length} bills saved
                </span>
                <span className="flex items-center gap-1.5">
                  {upload <= 0 && <span>Not backed up yet</span>}
                  {upload > 0 && !backedUp && (
                    <>
                      <span>Backing up…</span>
                      <span className="inline-block h-1 w-12 overflow-hidden rounded-full bg-line">
                        <span className="block h-full bg-brandTeal" style={{ width: `${upload * 100}%` }} />
                      </span>
                    </>
                  )}
                  {backedUp && <span className="font-semibold text-brandTeal">✓ Backed up just now</span>}
                </span>
              </div>

              {/* ── Cloud backup ── */}
              <div
                style={{
                  ...box(L.cloud.x, L.cloud.y, L.cloud.w, L.cloud.h),
                  opacity: cloudIn,
                  transform: `translateY(${(1 - cloudIn) * 12}px) scale(${0.85 + 0.15 * cloudIn})`,
                }}
              >
                <CloudIcon className="h-full w-full drop-shadow-[0_8px_16px_rgba(0,139,139,0.25)]" />
                <div className="absolute inset-0 flex items-center justify-center pt-2">
                  {backedUp ? (
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brandTeal text-sm font-bold text-white shadow">✓</span>
                  ) : (
                    <svg viewBox="0 0 24 24" className="h-6 w-6 text-brandTeal" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 17V7M7.5 11.5 12 7l4.5 4.5" />
                    </svg>
                  )}
                </div>
              </div>

              {/* Upload line with data packets travelling up as you scroll */}
              <div
                style={{ ...box(lineX - 1, lineTop, 2, lineBottom - lineTop), opacity: cloudIn }}
                className="bg-[repeating-linear-gradient(to_bottom,#008B8B_0,#008B8B_4px,transparent_4px,transparent_8px)] opacity-60"
              />
              {upload > 0 &&
                !backedUp &&
                [0, 1, 2].map((k) => {
                  const f = (upload * 3 + k / 3) % 1;
                  return (
                    <span
                      key={k}
                      className="rounded-full bg-brandTeal shadow-[0_0_8px_rgba(0,139,139,0.7)]"
                      style={{ ...box(lineX - 4, lerp(lineBottom - 8, lineTop, f), 8, 8), opacity: Math.sin(Math.PI * f) }}
                    />
                  );
                })}
            </div>
          </div>
        </div>

        {/* Caption for the current stage */}
        <p key={step} className="mt-4 min-h-[1.5em] animate-fade-up px-12 text-center text-sm font-medium text-slateText md:mt-6 md:px-0 md:text-lg">
          {STEPS[step].caption}
        </p>
      </div>
    </section>
  );
}
