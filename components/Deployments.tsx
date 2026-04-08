import Image from 'next/image';

const deployments = [
  {
    name: 'Ceylon Chai POS',
    tag: 'Retail · POS System',
    headline: 'Real-time cloud sync and inventory accuracy.',
    body: 'A full-featured point of sale system with live dashboard, billing, inventory management, sales tracking, expense management, and staff administration. Built for a high-volume retail operation.',
    highlights: ['Real-time cloud sync', 'Full inventory control', 'Expense & promotions module', 'Multi-user with activity logs'],
    image: '/products/pos-system.png',
    flip: false,
  },
  {
    name: 'Hardware Store POS',
    tag: 'Retail · Billing System',
    headline: 'Operational management and reporting suite.',
    body: 'Custom POS built for a hardware store with customer management, price list control, running bills, and a full analytics and backup system.',
    highlights: ['Customer management', 'Price list & running bills', 'Analytics dashboard', 'Backup & export'],
    image: '/products/pos-inventory.png',
    flip: true,
  },
  {
    name: 'Auto Parts Importer',
    tag: 'Import Business · Management System',
    headline: 'End-to-end business intelligence for importers.',
    body: 'An advanced management system with inventory, stock history, billing, returns, creditor tracking, expense management, staff administration, and module-level access control.',
    highlights: ['Inventory & stock history', 'Creditor & customer management', 'P&L and profit analytics', 'Module management & access control'],
    image: '/products/complete-suite.png',
    flip: false,
  },
];

export default function Deployments() {
  return (
    <section className="py-32 bg-brandGray" id="work">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-brandNavy tracking-tight mb-4">
            Featured Deployments.
          </h2>
          <p className="text-slateText text-lg max-w-xl mx-auto">
            Real systems, built for real Sri Lankan businesses. No demos — only live deployments.
          </p>
        </div>

        <div className="space-y-32">
          {deployments.map((d, i) => (
            <div
              key={i}
              className={`grid md:grid-cols-2 gap-12 items-center ${d.flip ? 'md:[&>*:first-child]:order-2' : ''}`}
            >
              {/* Text */}
              <div>
                <span className="text-brandTeal text-xs font-bold uppercase tracking-widest mb-4 block">{d.tag}</span>
                <h3 className="font-display font-bold text-3xl text-brandNavy mb-4 tracking-tight">{d.name}</h3>
                <p className="text-brandTeal font-semibold mb-4">{d.headline}</p>
                <p className="text-slateText leading-relaxed mb-8">{d.body}</p>
                <ul className="space-y-3">
                  {d.highlights.map((h, j) => (
                    <li key={j} className="flex items-center gap-3 text-brandNavy text-sm font-medium">
                      <span className="w-5 h-5 rounded-full bg-brandTeal/10 flex items-center justify-center text-brandTeal text-xs font-bold flex-shrink-0">✓</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.12)] bg-gray-950 aspect-video">
                <Image
                  src={d.image}
                  alt={d.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
