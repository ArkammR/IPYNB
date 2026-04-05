export default function HowItWorks() {
  const steps = [
    {
      icon: '📋',
      title: 'Consultation',
      description: 'Tell us about your business needs. We analyze your requirements and recommend the perfect system.',
    },
    {
      icon: '⚙️',
      title: 'Setup & Configuration',
      description: 'We install and configure your system. Our team ensures everything is tailored to your business.',
    },
    {
      icon: '🚀',
      title: 'Training & Launch',
      description: 'We train your team and launch your system. You\'re ready to go with full support.',
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-grotesk text-4xl sm:text-5xl font-bold text-navy text-center mb-16">
          How We Work
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border-2 border-transparent hover:border-orange transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-5xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold text-navy mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
