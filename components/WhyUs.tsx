import type { ReactNode } from 'react';
import Reveal from '@/components/Reveal';

// Shared timing for the small UI animations. Each starts when its card scrolls
// into view (Reveal sets data-shown on the `group`).
const anim = 'transition-all duration-500 ease-out motion-reduce:transition-none';

function Card({
  title,
  body,
  instead,
  className = '',
  delay = 0,
  children,
}: {
  title: string;
  body: string;
  instead: string;
  className?: string;
  delay?: number;
  children: ReactNode;
}) {
  return (
    <Reveal delay={delay} className={className}>
      <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-shadow duration-300 hover:shadow-[0_24px_48px_-24px_rgba(20,23,28,0.2)]">
        <div className="flex min-h-[200px] items-center justify-center border-b border-line bg-paper px-6 py-8">
          <div className="w-full max-w-sm">{children}</div>
        </div>
        <div className="flex flex-1 flex-col p-7">
          <h3 className="mb-2 font-display text-lg font-bold text-brandNavy">{title}</h3>
          <p className="flex-1 text-sm leading-relaxed text-slateText">{body}</p>
          <p className="mt-5 flex items-center gap-2 text-xs text-muted">
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-red-50 text-[10px] font-bold text-red-400">✕</span>
            Instead of: {instead}
          </p>
        </div>
      </div>
    </Reveal>
  );
}

function Toggle({ label, delay }: { label: string; delay: number }) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-line bg-white px-3.5 py-2.5">
      <span className="text-sm text-ink">{label}</span>
      <span
        className={`relative h-5 w-9 rounded-full bg-line ${anim} group-data-[shown=true]:bg-brandTeal`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        <span
          className={`absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white shadow ${anim} group-data-[shown=true]:translate-x-4`}
          style={{ transitionDelay: `${delay}ms` }}
        />
      </span>
    </div>
  );
}

function CheckRow({ label, delay }: { label: string; delay: number }) {
  return (
    <li className="flex items-center gap-3">
      <span className="relative flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-line bg-white">
        <span
          className={`absolute inset-0 flex scale-0 items-center justify-center rounded-full bg-brandTeal ${anim} group-data-[shown=true]:scale-100`}
          style={{ transitionDelay: `${delay}ms` }}
        >
          <svg viewBox="0 0 16 16" className="h-3 w-3 text-white" fill="none" stroke="currentColor" strokeWidth={2.2} aria-hidden="true">
            <path d="M3.5 8.5l3 3 6-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </span>
      <span
        className={`text-sm text-muted ${anim} group-data-[shown=true]:text-ink`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {label}
      </span>
    </li>
  );
}

function Bubble({ from, children, delay }: { from: 'customer' | 'team'; children: ReactNode; delay: number }) {
  const team = from === 'team';
  return (
    <div className={`flex ${team ? 'justify-start' : 'justify-end'}`}>
      <div
        className={`max-w-[85%] translate-y-2 rounded-2xl px-3.5 py-2 text-sm opacity-0 shadow-sm ${anim} group-data-[shown=true]:translate-y-0 group-data-[shown=true]:opacity-100 ${
          team ? 'rounded-bl-md border border-line bg-white text-ink' : 'rounded-br-md bg-[#d9fdd3] text-ink'
        }`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
    </div>
  );
}

export default function WhyUs() {
  return (
    <section className="bg-brandGray py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <h2 className="mb-4 font-display text-4xl font-bold tracking-tight text-brandNavy lg:text-5xl">
            Why businesses choose us
          </h2>
          <p className="mx-auto max-w-xl text-lg text-slateText">
            What working with us looks like, compared with ready-made software.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-6">
          <Card
            className="lg:col-span-3"
            title="Built around how your business works"
            body="Your products, prices, staff roles and receipts are set up the way you already work — nothing you have to work around."
            instead="generic screens built for someone else"
          >
            <div className="space-y-2.5">
              <Toggle label="Barcode billing" delay={200} />
              <Toggle label="Customer credit & running bills" delay={450} />
              <Toggle label="Staff roles & permissions" delay={700} />
            </div>
          </Card>

          <Card
            className="lg:col-span-3"
            delay={100}
            title="One-time setup — the system is yours"
            body="You pay once for the system. A monthly plan is only for ongoing updates and support, if you want it."
            instead="monthly fees just to keep using it"
          >
            <div className="rounded-xl border border-line bg-white p-4 font-mono text-[13px]">
              <p className="mb-3 text-[11px] uppercase tracking-wider text-muted">Your system</p>
              {[
                ['System setup', 'One-time'],
                ['Licence renewals', 'None'],
                ['Updates & support', 'Optional plan'],
              ].map(([k, v], i) => (
                <div
                  key={k}
                  className={`flex justify-between border-t border-dashed border-line py-2 opacity-0 ${anim} group-data-[shown=true]:opacity-100`}
                  style={{ transitionDelay: `${200 + i * 220}ms` }}
                >
                  <span className="text-muted">{k}</span>
                  <span className="font-semibold text-ink">{v}</span>
                </div>
              ))}
              <div
                className={`mt-1 flex items-center justify-between border-t border-line pt-3 opacity-0 ${anim} group-data-[shown=true]:opacity-100`}
                style={{ transitionDelay: '900ms' }}
              >
                <span className="text-muted">Ownership</span>
                <span className="rounded bg-brandTeal/10 px-2 py-0.5 font-semibold text-brandTeal">Yours</span>
              </div>
            </div>
          </Card>

          <Card
            className="lg:col-span-2"
            delay={0}
            title="We visit and plan it with you first"
            body="We see how you bill and keep stock today before building anything."
            instead="the same setup for every business"
          >
            <ul className="space-y-3">
              <CheckRow label="How you bill customers" delay={200} />
              <CheckRow label="Stock items & suppliers" delay={500} />
              <CheckRow label="Staff and who sees what" delay={800} />
              <CheckRow label="Receipt and report layout" delay={1100} />
            </ul>
          </Card>

          <Card
            className="lg:col-span-2"
            delay={100}
            title="WhatsApp support from the people who built it"
            body="Message the team that knows your system, not a call centre."
            instead="being hard to reach after the sale"
          >
            <div className="space-y-2 rounded-xl bg-[#efeae2] p-3">
              <Bubble from="customer" delay={200}>Can we add a login for our new cashier?</Bubble>
              <Bubble from="team" delay={900}>Yes — send their name and we’ll set it up.</Bubble>
            </div>
            <p className="mt-2 text-center text-[11px] text-muted">Example conversation</p>
          </Card>

          <Card
            className="lg:col-span-2"
            delay={200}
            title="On-site setup and staff training"
            body="We install it at your shop, connect printers and scanners, and train your staff."
            instead="being left to learn it yourself"
          >
            <div className="rounded-xl border border-line bg-white p-4">
              <div className="mb-3 flex items-center justify-between text-xs">
                <span className="font-semibold text-ink">Going live</span>
                <span className={`text-muted ${anim} group-data-[shown=true]:text-brandTeal`} style={{ transitionDelay: '1500ms' }}>
                  Ready
                </span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-line">
                <div className="h-full w-0 rounded-full bg-brandTeal transition-[width] duration-[1600ms] ease-out group-data-[shown=true]:w-full motion-reduce:transition-none" />
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                {['Install the system', 'Printers & scanners', 'Staff training'].map((step, i) => (
                  <li
                    key={step}
                    className={`flex items-center gap-2 text-muted ${anim} group-data-[shown=true]:text-ink`}
                    style={{ transitionDelay: `${400 + i * 450}ms` }}
                  >
                    <span className="text-brandTeal">✓</span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
