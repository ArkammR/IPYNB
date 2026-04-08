export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Workflow Audit',
      body: 'We study your physical logs and manual bottlenecks to understand exactly where time and money are being lost.',
    },
    {
      number: '02',
      title: 'Architecture',
      body: 'We design custom database logic and system flows specifically engineered for your team and operations.',
    },
    {
      number: '03',
      title: 'Deployment',
      body: 'On-site hardware setup, software installation, and 1-on-1 staff training until your team is confident.',
    },
    {
      number: '04',
      title: 'Evolution',
      body: 'Continuous updates, new features on request, and instant support via WhatsApp — forever.',
    },
  ];

  return (
    <section className="py-32 bg-white" id="process">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-brandNavy tracking-tight mb-4">
            From Chaos to Control<br />in Four Steps.
          </h2>
          <p className="text-slateText text-lg max-w-xl mx-auto">
            A proven process that gets your system live and your team trained — without disrupting your operations.
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
