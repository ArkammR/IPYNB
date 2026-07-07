'use client';

import { useState } from 'react';
import { WHATSAPP_NUMBER } from '@/lib/constants';
import { openWhatsApp } from '@/lib/utils';

const INDUSTRIES = [
  'Retail & Supermarket',
  'Pharmacy',
  'Restaurant & Cafe',
  'Hardware & Construction',
  'Fashion & Clothing',
  'Beauty & Salon',
  'Automotive & Spare Parts',
  'Import & Export',
  'Social Commerce',
  'Other',
];

const PROJECT_TYPES = [
  'POS System',
  'Billing System',
  'Inventory Management',
  'Business Website',
  'E-Commerce Website',
  'Mobile App',
  'Complete Business Suite',
  'Custom System',
  'Not Sure Yet',
];

const BUDGETS = [
  'LKR 50,000 – 100,000',
  'LKR 100,000 – 200,000',
  'LKR 200,000 – 400,000',
  'LKR 400,000+',
  'Flexible / Discuss',
];

interface FormState {
  name: string;
  business: string;
  email: string;
  phone: string;
  industry: string;
  projectType: string;
  budget: string;
  message: string;
}

const INITIAL: FormState = {
  name: '', business: '', email: '', phone: '',
  industry: '', projectType: '', budget: '', message: '',
};

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<Status>('idle');
  const [serverError, setServerError] = useState('');

  const validate = (): boolean => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = 'Full name is required.';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'A valid email is required.';
    if (!form.message.trim()) e.message = 'Please describe your project.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    setServerError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setServerError(data.error || 'Something went wrong. Please try again.');
        setStatus('error');
        return;
      }

      setStatus('success');
      setForm(INITIAL);
    } catch {
      setServerError('Network error. Please check your connection and try again.');
      setStatus('error');
    }
  };

  const handleWhatsApp = () => {
    const msg = `Hi IPYNB! I'd like to discuss a project.\n\nName: ${form.name || '[Your Name]'}\nBusiness: ${form.business || '—'}\nProject: ${form.projectType || '—'}\n\n${form.message || ''}`.trim();
    openWhatsApp(msg, WHATSAPP_NUMBER);
  };

  const inputClass = (field: keyof FormState) =>
    `w-full px-4 py-3 rounded-lg border text-sm text-brandNavy bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brandTeal/40 transition-all ${
      errors[field] ? 'border-red-400' : 'border-slate-200'
    }`;

  return (
    <section className="py-32 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <span className="text-brandTeal text-xs font-bold uppercase tracking-widest mb-6 block">
              Get in Touch
            </span>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-brandNavy tracking-tight mb-6">
              Let's Build Something<br />Great Together.
            </h2>
            <p className="text-slateText leading-relaxed text-lg mb-12">
              Have a business challenge you'd like to solve? Fill in the form and we'll get back to you within 24 hours — or just chat with us directly on WhatsApp.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-brandTeal/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-brandTeal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slateText uppercase tracking-wide mb-1">Email</p>
                  <p className="text-brandNavy font-medium">info@ipynb.site</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-brandTeal/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-brandTeal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slateText uppercase tracking-wide mb-1">Phone / WhatsApp</p>
                  <p className="text-brandNavy font-medium">+94 72 421 8840</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-brandTeal/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-brandTeal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slateText uppercase tracking-wide mb-1">Location</p>
                  <p className="text-brandNavy font-medium">Colombo, Sri Lanka</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-brandTeal/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-brandTeal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slateText uppercase tracking-wide mb-1">Business Hours</p>
                  <p className="text-brandNavy font-medium">Mon – Sat, 9:00 AM – 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-brandGray rounded-2xl p-8 shadow-[0_20px_50px_rgba(15,23,42,0.05)]">

            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-brandTeal/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-brandTeal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-2xl text-brandNavy mb-3">Inquiry Sent!</h3>
                <p className="text-slateText mb-6">We've received your message and will get back to you within 24 hours.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-brandTeal font-semibold text-sm hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-brandNavy mb-1.5">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input id="name" name="name" type="text" value={form.name} onChange={handleChange}
                      placeholder="Rahmath Rumi" className={inputClass('name')} autoComplete="name" />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="business" className="block text-xs font-semibold text-brandNavy mb-1.5">
                      Business Name
                    </label>
                    <input id="business" name="business" type="text" value={form.business} onChange={handleChange}
                      placeholder="Ceylon Chai" className={inputClass('business')} autoComplete="organization" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-brandNavy mb-1.5">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input id="email" name="email" type="email" value={form.email} onChange={handleChange}
                      placeholder="you@example.com" className={inputClass('email')} autoComplete="email" />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-brandNavy mb-1.5">
                      Phone Number
                    </label>
                    <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange}
                      placeholder="+94 77 000 0000" className={inputClass('phone')} autoComplete="tel" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="industry" className="block text-xs font-semibold text-brandNavy mb-1.5">
                      Industry
                    </label>
                    <select id="industry" name="industry" value={form.industry} onChange={handleChange}
                      className={inputClass('industry')}>
                      <option value="">Select industry</option>
                      {INDUSTRIES.map((i) => <option key={i} value={i}>{i}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="projectType" className="block text-xs font-semibold text-brandNavy mb-1.5">
                      Project Type
                    </label>
                    <select id="projectType" name="projectType" value={form.projectType} onChange={handleChange}
                      className={inputClass('projectType')}>
                      <option value="">Select project type</option>
                      {PROJECT_TYPES.map((p) => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="budget" className="block text-xs font-semibold text-brandNavy mb-1.5">
                    Estimated Budget <span className="text-slateText font-normal">(optional)</span>
                  </label>
                  <select id="budget" name="budget" value={form.budget} onChange={handleChange}
                    className={inputClass('budget')}>
                    <option value="">Select budget range</option>
                    {BUDGETS.map((b) => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-xs font-semibold text-brandNavy mb-1.5">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea id="message" name="message" value={form.message} onChange={handleChange}
                    rows={4} placeholder="Tell us about your business and what you'd like to build..."
                    className={`${inputClass('message')} resize-none`} />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>

                {serverError && (
                  <div className="mb-4 px-4 py-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                    {serverError}
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="flex-1 flex items-center justify-center gap-2 bg-brandNavy text-white py-3 rounded-lg font-semibold text-sm hover:bg-slate-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : 'Send Inquiry'}
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-lg font-semibold text-sm hover:bg-green-500 transition-colors"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Chat on WhatsApp
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
