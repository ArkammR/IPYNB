export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Visit',
      body: 'We visit your business, see how you bill and keep stock today, and agree on what the system needs to do.',
    },
    {
      number: '02',
      title: 'Build',
      body: 'We build the system around your products, prices and staff roles, and show it to you before going live.',
    },
    {
      number: '03',
      title: 'Set up & train',
      body: 'We install it at your shop, connect printers and scanners, and train your staff.',
    },
    {
      number: '04',
      title: 'Support',
      body: 'Questions and fixes over WhatsApp for the support period in your plan, and new features when you need them.',
    },
  ];

  return (
    <section className="py-24 bg-white" id="process">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-brandNavy tracking-tight mb-4">
            How it works
          </h2>
          <p className="text-slateText text-lg max-w-xl mx-auto">
            Four steps from your first message to a working system.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Teal connector line */}
          <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-brandTeal/30 z-0" />

          {steps.map((step, i) => (
            <div key={i} className="relative z-10 text-center">
              <div className="w-16 h-16 rounded-full bg-white border-2 border-brandTeal flex items-center justify-center mx-auto mb-6 shadow-[0_0_0_6px_rgba(0,139,139,0.08)]">
                <span className="font-display font-bold text-brandTeal text-lg">{step.number}</span>
              </div>
              <h3 className="font-display font-bold text-lg text-brandNavy mb-3">{step.title}</h3>
              <p className="text-slateText text-sm leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
