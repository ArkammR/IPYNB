import Image from 'next/image';
import { CLIENTS, CLIENT_SLIDER_MIN, type Client } from '@/lib/constants';
import { TECH_STACK } from '@/lib/techStack';

function ClientLogo({ client }: { client: Client }) {
  if (client.logo) {
    return (
      <Image
        src={client.logo.src}
        alt={client.name}
        width={client.logo.width}
        height={client.logo.height}
        className="h-12 w-auto opacity-70 transition-opacity hover:opacity-100"
      />
    );
  }
  return (
    <span className="whitespace-nowrap font-display text-xl font-semibold tracking-tight text-ink/70">
      {client.name}
    </span>
  );
}

function ClientSlider({ clients }: { clients: Client[] }) {
  // Repeat the set so one half of the track is always wider than the screen,
  // then animate the track by -50% for a seamless loop.
  const repeats = Math.max(1, Math.ceil(10 / clients.length));
  const half = Array.from({ length: repeats }, () => clients).flat();

  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <ul className="flex w-max animate-marquee items-center hover:[animation-play-state:paused] motion-reduce:animate-none">
        {[...half, ...half].map((client, i) => (
          <li
            key={`${client.name}-${i}`}
            className="flex h-16 items-center px-10"
            aria-hidden={i >= half.length || undefined}
          >
            <ClientLogo client={client} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ClientsAndStack() {
  const useSlider = CLIENTS.length >= CLIENT_SLIDER_MIN;

  return (
    <section className="border-b border-line bg-paper py-16" aria-label="Clients and technology">
      <div className="mx-auto max-w-[1248px] px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-muted">
          Businesses we have built systems for
        </p>

        <div className="mt-8">
          {useSlider ? (
            <ClientSlider clients={CLIENTS} />
          ) : (
            <ul className="flex flex-wrap items-center justify-center gap-x-16 gap-y-6">
              {CLIENTS.map((client) => (
                <li key={client.name} className="flex h-16 items-center">
                  <ClientLogo client={client} />
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mx-auto mt-12 max-w-3xl border-t border-line pt-10">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-muted">
            Built with
          </p>
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {TECH_STACK.map((tech) => (
              <li key={tech.name} className="group flex items-center gap-2.5">
                <svg
                  role="img"
                  aria-label={tech.name}
                  viewBox="0 0 24 24"
                  className="h-6 w-6 fill-muted transition-colors"
                  style={{ ['--brand' as string]: tech.color }}
                >
                  <path d={tech.path} className="group-hover:fill-[var(--brand)]" />
                </svg>
                <span className="text-sm font-medium text-muted">{tech.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
