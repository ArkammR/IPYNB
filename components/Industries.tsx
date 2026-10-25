const industries = [
  {
    title: 'Retail shops',
    body: 'Barcode billing, receipts, stock levels and daily sales reports.',
    example: 'Built for: Ceylon Chai',
  },
  {
    title: 'Hardware & auto parts',
    body: 'Price lists, running bills, customer credit, suppliers and stock history.',
    example: 'Built for: a hardware store and an auto parts importer',
  },
  {
    title: 'Restaurants & cafés',
    body: 'Table orders, kitchen display, dine-in, takeaway and delivery, and shift reports.',
  },
  {
    title: 'Pharmacies',
    body: 'Billing with prescription records, medicine stock and expiry date alerts.',
  },
];

export default function Industries() {
  return (
    <section className="py-24 bg-white" id="solutions">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-brandNavy tracking-tight mb-4">
            Who we build for
          </h2>
          <p className="text-slateText text-lg max-w-xl mx-auto">
            Each system is set up for the type of business using it.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 p-7 flex flex-col"
            >
              <h3 className="font-display font-bold text-xl text-brandNavy mb-3">{item.title}</h3>
              <p className="text-slateText text-sm leading-relaxed flex-1">{item.body}</p>
              {item.example && (
                <p className="text-brandTeal text-xs font-semibold mt-5">{item.example}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
