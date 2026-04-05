'use client';

import { useState } from 'react';

export default function Services() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const services = [
    {
      icon: '💬',
      title: '24/7 WhatsApp Support',
      description: 'Get instant help whenever you need it. Our team responds within minutes to answer questions and troubleshoot issues.',
    },
    {
      icon: '🔧',
      title: 'Free Setup & Configuration',
      description: 'We handle the complete setup and configuration of your system at no extra cost.',
    },
    {
      icon: '♻️',
      title: 'Free Updates & Upgrades',
      description: 'Get all future versions and improvements to your system forever. Stay current with the latest features.',
    },
    {
      icon: '👥',
      title: 'Team Training',
      description: 'We provide comprehensive training for your team to maximize your system\'s potential.',
    },
  ];

  const faqs = [
    {
      question: 'How long does setup take?',
      answer: 'Typically 2-5 business days depending on your system complexity. We handle everything and keep you updated throughout.',
    },
    {
      question: 'Can I customize the system?',
      answer: 'Yes! All our systems are fully customizable to match your business needs. We work with you to get it perfect.',
    },
    {
      question: 'What if I need help after launch?',
      answer: 'Contact us 24/7 on WhatsApp. We\'re here to help with any issues, updates, or new features you need.',
    },
    {
      question: 'Do you provide training?',
      answer: 'Absolutely! We provide comprehensive training for your team. We ensure everyone is comfortable using the system.',
    },
    {
      question: 'What about data security?',
      answer: 'Your data is secure with us. We use industry-standard encryption and regular backups to protect your information.',
    },
    {
      question: 'Can I upgrade later?',
      answer: 'Yes! You can upgrade to a more advanced system anytime. We\'ll migrate your data seamlessly.',
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-navy to-blue-900" id="support">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-grotesk text-4xl sm:text-5xl font-bold text-white text-center mb-4">
          Complete Support & Services
        </h2>
        <p className="text-center text-white/80 text-lg mb-16">
          We don't just sell systems. We partner with you for success.
        </p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/15 hover:border-orange transition-all hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
              <p className="text-white/80 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-8">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-white/10 pb-4 last:border-b-0">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full flex justify-between items-center text-white font-semibold hover:text-orange transition-colors text-left"
                >
                  {faq.question}
                  <span className="text-xl">{openFAQ === index ? '−' : '+'}</span>
                </button>
                {openFAQ === index && (
                  <p className="text-white/80 mt-3 text-sm leading-relaxed">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
