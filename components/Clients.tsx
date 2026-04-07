import Image from 'next/image';
import { CLIENTS } from '@/lib/constants';

export default function Clients() {
  // Duplicate for seamless infinite scroll
  const items = [...CLIENTS, ...CLIENTS];

  return (
    <section className="py-12 bg-white border-y border-grid overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 mb-8 text-center">
        <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
          Trusted by businesses across Sri Lanka
        </p>
      </div>

      <div className="relative">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {items.map((client, i) => (
            <div
              key={i}
              className="inline-flex items-center justify-center min-w-[140px] h-16 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={120}
                height={48}
                className="object-contain max-h-12"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
