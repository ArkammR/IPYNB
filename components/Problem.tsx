export default function Problem() {
  const cards = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
      title: 'The Manual Trap',
      body: 'Stop losing hours to manual ledger reconciliation and math errors that cost you money every single day.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: 'The Social Chaos',
      body: 'Automate your Instagram and WhatsApp orders into a single, unified inventory dashboard. No more missed orders.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'The Data Gap',
      body: 'Access real-time profit margins and stock levels instantly. No more guessing at the end of the month.',
    },
  ];

  return (
    <section className="py-32 bg-brandGray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-brandNavy tracking-tight mb-4">
            Software Built for Your<br />Hardest Business Problems.
          </h2>
          <p className="text-slateText text-lg max-w-xl mx-auto">
            We don't sell software. We solve the exact problems slowing your business down.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-[0_20px_50px_rgba(15,23,42,0.05)] hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="text-brandTeal mb-5">{card.icon}</div>
              <h3 className="font-display font-bold text-xl text-brandNavy mb-3">{card.title}</h3>
              <p className="text-slateText leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
