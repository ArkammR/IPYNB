const industries = [
  {
    title: 'Inventory Intelligence',
    subtitle: 'Retail & Pharmacy',
    body: 'Barcode billing, supplier management, and real-time stock levels. Never run out or overstock again.',
    photo: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&q=80',
  },
  {
    title: 'Social-to-Checkout',
    subtitle: 'Social Commerce',
    body: 'Move your WhatsApp and Instagram sellers to a fully automated e-commerce and order management system.',
    photo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
  },
  {
    title: 'Operational Clarity',
    subtitle: 'Restaurants & Cafes',
    body: 'Table management, kitchen display systems, and shift reporting built for the pace of food service.',
    photo: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80',
  },
  {
    title: 'Client Lifecycle',
    subtitle: 'Services & Salons',
    body: 'Membership billing, automated appointment logs, and client history — all in one place.',
    photo: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80',
  },
];

export default function Industries() {
  return (
    <section className="py-32 bg-white" id="solutions">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-brandNavy tracking-tight mb-4">
            Built for Your Industry.
          </h2>
          <p className="text-slateText text-lg max-w-xl mx-auto">
            Every system we build is architected around how your specific business actually operates.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {industries.map((item, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
              style={{ height: '320px' }}
            >
              {/* Photo */}
              <div
                className="absolute inset-0 bg-cover bg-center scale-105 group-hover:scale-100 transition-transform duration-500"
                style={{ backgroundImage: `url(${item.photo})` }}
              />
              {/* Strong bottom-up gradient so text always readable */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

              {/* Content pinned to bottom */}
              <div className="absolute bottom-0 left-0 right-0 z-10 p-8">
                <span className="text-brandTeal text-xs font-bold uppercase tracking-widest mb-2 block">
                  {item.subtitle}
                </span>
                <h3 className="font-display font-bold text-2xl text-white mb-2 drop-shadow-lg">
                  {item.title}
                </h3>
                <p className="text-white text-sm leading-relaxed max-w-sm drop-shadow-md">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
