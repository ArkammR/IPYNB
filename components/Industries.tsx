import Reveal from '@/components/Reveal';

const industries = [
  {
    title: 'Retail shops',
    body: 'Barcode billing, receipts, stock levels and daily sales reports.',
    clients: ['Ceylon Chai', 'Belgian Waffle'],
    icon: (
      <path d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
    ),
  },
  {
    title: 'Hardware & auto parts',
    body: 'Price lists, running bills, customer credit, suppliers and stock history.',
    clients: ['Hardware Appliance Store', 'Auto Pilot Auto Parts'],
    icon: (
      <path d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
    ),
  },
  {
    title: 'Restaurants & cafés',
    body: 'Table orders, kitchen display, dine-in, takeaway and delivery, and shift reports.',
    clients: ['Roshans Grams Store', 'Ceylon Kitchen'],
    icon: (
      <path d="M4 9h12v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V9Zm12 1.5h1.25a2.25 2.25 0 0 1 0 4.5H16M8 3.5v2.5M12 3.5v2.5" />
    ),
  },
];

export default function Industries() {
  return (
    <section className="bg-white py-24" id="solutions">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <h2 className="mb-4 font-display text-4xl font-bold tracking-tight text-brandNavy lg:text-5xl">
            Who we build for
          </h2>
          <p className="mx-auto max-w-xl text-lg text-slateText">
            Each system is set up for the type of business using it.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {industries.map((item, i) => (
            <Reveal key={item.title} delay={i * 100} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brandTeal/40 hover:shadow-[0_20px_40px_-20px_rgba(20,23,28,0.18)]">
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-brandTeal/10 text-brandTeal">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {item.icon}
                  </svg>
                </div>
                <h3 className="mb-3 font-display text-xl font-bold text-brandNavy">{item.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-slateText">{item.body}</p>

                <div className="mt-6 border-t border-line pt-5">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">Systems built for</p>
                  <ul className="flex flex-wrap gap-2">
                    {item.clients.map((client) => (
                      <li
                        key={client}
                        className="rounded-md border border-line bg-paper px-2.5 py-1 text-xs font-medium text-ink"
                      >
                        {client}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
