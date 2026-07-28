'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { WHATSAPP_NUMBER } from '@/lib/constants';
import { openWhatsApp } from '@/lib/utils';

/* ─── Data ─────────────────────────────────────────────────────────── */
const INDUSTRIES = ['Retail & Supermarket','Pharmacy','Restaurant & Cafe','Hardware & Construction','Fashion & Clothing','Beauty & Salon','Automotive & Spare Parts','Import & Export','Social Commerce','Other'];
const PROJECT_TYPES = ['POS System','Billing System','Inventory Management','Business Website','E-Commerce Website','Mobile App','Complete Business Suite','Custom System','Not Sure Yet'];
const BUDGETS = ['LKR 50,000 – 100,000','LKR 100,000 – 200,000','LKR 200,000 – 400,000','LKR 400,000+','Flexible / Discuss'];

interface FormState { name:string; business:string; email:string; phone:string; industry:string; projectType:string; budget:string; message:string; }
const EMPTY: FormState = { name:'',business:'',email:'',phone:'',industry:'',projectType:'',budget:'',message:'' };
type Status = 'idle'|'loading'|'success'|'error';

/* ─── Reusable field wrapper ─────────────────────────────────────────── */
function Field({ label, required, error, children }: { label:string; required?:boolean; error?:string; children:React.ReactNode }) {
  return (
    <div>
      <label className="block text-[11px] font-black uppercase tracking-widest text-slate-500 mb-1.5">
        {label}{required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}

const inputStyle = (err?:boolean) =>
  `w-full px-4 py-3 rounded-xl text-sm font-medium text-slate-900 bg-white border outline-none transition-all placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 ${err ? 'border-red-400 bg-red-50' : 'border-slate-200 hover:border-indigo-300'}`;

/* ─── Main component ─────────────────────────────────────────────────── */
export default function Contact() {
  const [form, setForm]     = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<Status>('idle');
  const [apiErr, setApiErr] = useState('');

  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.05 });

  function handleChange(e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm(p => ({ ...p, [name]: value }));
    if (errors[name as keyof FormState]) setErrors(p => ({ ...p, [name]: undefined }));
  }

  function validate() {
    const e: Partial<FormState> = {};
    if (!form.name.trim())  e.name  = 'Full name is required.';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email required.';
    if (!form.message.trim()) e.message = 'Please describe your project.';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading'); setApiErr('');
    try {
      const res  = await fetch('/api/contact', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(form) });
      const data = await res.json();
      if (!res.ok) { setApiErr(data.error || 'Something went wrong.'); setStatus('error'); return; }
      setStatus('success'); setForm(EMPTY);
    } catch { setApiErr('Network error. Check your connection.'); setStatus('error'); }
  }

  function handleWA() {
    const msg = `Hi IPYNB! I'd like to discuss a project.\n\nName: ${form.name||'—'}\nBusiness: ${form.business||'—'}\nProject: ${form.projectType||'—'}\n\n${form.message}`.trim();
    openWhatsApp(msg, WHATSAPP_NUMBER);
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #eef0ff 0%, #f0f2ff 50%, #e8ebff 100%)' }}
    >
      {/* dot grid overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage:'radial-gradient(circle, rgba(99,102,241,0.13) 1px, transparent 1px)', backgroundSize:'30px 30px' }} />
      {/* top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background:'linear-gradient(90deg, transparent, #6366F1, transparent)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ── HEADER ──────────────────────────────────────────── */}
        <motion.div initial={{ opacity:0, y:24 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.6 }} className="text-center mb-16">
          <span className="inline-block text-[11px] font-black uppercase tracking-widest px-4 py-2 rounded-full mb-5" style={{ background:'rgba(99,102,241,0.10)', color:'#6366F1', border:'1px solid rgba(99,102,241,0.25)' }}>
            Start Your Project
          </span>
          <h2 className="font-display font-black text-5xl lg:text-6xl tracking-tight mb-5 leading-[1.08]" style={{ color:'#0D1117' }}>
            Let&rsquo;s Build Something<br/>
            <span className="gradient-text">That Moves the Needle.</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto leading-relaxed" style={{ color:'#4B5563' }}>
            Fill out the form — we&rsquo;ll reply within 24&nbsp;hours. Or skip the form and message us on WhatsApp directly.
          </p>
        </motion.div>

        {/* ── TWO COLUMNS ─────────────────────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* ── LEFT ── */}
          <motion.div initial={{ opacity:0, x:-24 }} animate={inView?{opacity:1,x:0}:{}} transition={{ duration:0.6, delay:0.1 }}>

            {/* contact info cards */}
            {[
              { emoji:'✉️', label:'Email',            value:'info@ipynb.site',      href:'mailto:info@ipynb.site' },
              { emoji:'📞', label:'Phone / WhatsApp', value:'+94 72 421 8840',       href:'tel:+94724218840' },
              { emoji:'📍', label:'Location',         value:'Colombo, Sri Lanka',    href:null },
              { emoji:'🕐', label:'Business Hours',   value:'Mon – Sat, 9AM – 5PM', href:null },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity:0, y:12 }} animate={inView?{opacity:1,y:0}:{}} transition={{ delay:0.15+i*0.08 }}
                className="flex items-center gap-4 mb-3 rounded-2xl p-4 border transition-all hover:border-indigo-300 group"
                style={{ background:'rgba(255,255,255,0.85)', borderColor:'rgba(99,102,241,0.15)', backdropFilter:'blur(8px)' }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0" style={{ background:'rgba(99,102,241,0.10)' }}>
                  {item.emoji}
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest mb-0.5" style={{ color:'#94a3b8' }}>{item.label}</div>
                  {item.href
                    ? <a href={item.href} className="font-bold text-sm transition-colors hover:text-indigo-600" style={{ color:'#0D1117' }}>{item.value}</a>
                    : <span className="font-bold text-sm" style={{ color:'#0D1117' }}>{item.value}</span>
                  }
                </div>
              </motion.div>
            ))}

            {/* what happens next */}
            <div className="mt-6 rounded-3xl p-8 relative overflow-hidden border" style={{ background:'#0D1117', borderColor:'rgba(99,102,241,0.20)' }}>
              <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full pointer-events-none" style={{ background:'radial-gradient(circle, rgba(99,102,241,0.20) 0%, transparent 70%)' }} />
              <h3 className="font-display font-black text-lg text-white mb-6 relative z-10">What Happens Next</h3>
              <div className="space-y-4 relative z-10">
                {[
                  { n:'01', t:'We reply within 24 hours (usually same day)' },
                  { n:'02', t:'Free 30-min consultation call or WhatsApp chat' },
                  { n:'03', t:'We scope your project and give a fixed quote' },
                  { n:'04', t:'Work begins within 48 hours of agreement' },
                ].map((s, i) => (
                  <motion.div key={s.n} initial={{ opacity:0, x:-12 }} animate={inView?{opacity:1,x:0}:{}} transition={{ delay:0.4+i*0.09 }} className="flex items-start gap-4">
                    <span className="font-display font-black text-xs w-6 flex-shrink-0 pt-0.5" style={{ color:'#818CF8' }}>{s.n}</span>
                    <span className="text-slate-300 text-sm leading-relaxed">{s.t}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT — FORM ── */}
          <motion.div initial={{ opacity:0, x:24 }} animate={inView?{opacity:1,x:0}:{}} transition={{ duration:0.6, delay:0.2 }}
            className="rounded-3xl p-8 border"
            style={{ background:'rgba(255,255,255,0.92)', borderColor:'rgba(99,102,241,0.18)', backdropFilter:'blur(16px)', boxShadow:'0 24px 64px rgba(99,102,241,0.12)' }}>

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div key="ok" initial={{ opacity:0, scale:0.92 }} animate={{ opacity:1, scale:1 }} className="text-center py-14">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border-2" style={{ background:'rgba(99,102,241,0.10)', borderColor:'rgba(99,102,241,0.25)' }}>
                    <svg className="w-10 h-10" style={{ color:'#6366F1' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <h3 className="font-display font-black text-3xl mb-3" style={{ color:'#0D1117' }}>Inquiry Received!</h3>
                  <p className="text-sm leading-relaxed mb-8 max-w-xs mx-auto" style={{ color:'#4B5563' }}>
                    We&rsquo;ve got your message. Check your inbox — we sent you a confirmation email and will reply within 24 hours.
                  </p>
                  <button onClick={() => setStatus('idle')} className="text-sm font-bold hover:underline" style={{ color:'#6366F1' }}>
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Full Name" required error={errors.name}>
                      <input name="name" type="text" value={form.name} onChange={handleChange} autoComplete="name" placeholder="Rahmath Rumi" className={inputStyle(!!errors.name)} />
                    </Field>
                    <Field label="Business Name">
                      <input name="business" type="text" value={form.business} onChange={handleChange} autoComplete="organization" placeholder="Ceylon Chai" className={inputStyle()} />
                    </Field>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Email Address" required error={errors.email}>
                      <input name="email" type="email" value={form.email} onChange={handleChange} autoComplete="email" placeholder="you@example.com" className={inputStyle(!!errors.email)} />
                    </Field>
                    <Field label="Phone Number">
                      <input name="phone" type="tel" value={form.phone} onChange={handleChange} autoComplete="tel" placeholder="+94 77 000 0000" className={inputStyle()} />
                    </Field>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Industry">
                      <select name="industry" value={form.industry} onChange={handleChange} className={inputStyle()}>
                        <option value="">Select industry</option>
                        {INDUSTRIES.map(v => <option key={v}>{v}</option>)}
                      </select>
                    </Field>
                    <Field label="Project Type">
                      <select name="projectType" value={form.projectType} onChange={handleChange} className={inputStyle()}>
                        <option value="">Select type</option>
                        {PROJECT_TYPES.map(v => <option key={v}>{v}</option>)}
                      </select>
                    </Field>
                  </div>

                  <Field label="Estimated Budget">
                    <select name="budget" value={form.budget} onChange={handleChange} className={inputStyle()}>
                      <option value="">Select range (optional)</option>
                      {BUDGETS.map(v => <option key={v}>{v}</option>)}
                    </select>
                  </Field>

                  <Field label="Message" required error={errors.message}>
                    <textarea name="message" rows={4} value={form.message} onChange={handleChange}
                      placeholder="Tell us about your business and what you'd like to build..."
                      className={`${inputStyle(!!errors.message)} resize-none`} />
                  </Field>

                  {apiErr && (
                    <div className="px-4 py-3 rounded-xl text-sm text-red-600 border border-red-200 bg-red-50">{apiErr}</div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    {/* Email submit */}
                    <motion.button type="submit" disabled={status==='loading'}
                      whileHover={{ scale:1.02 }} whileTap={{ scale:0.97 }}
                      className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl font-black text-sm text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{ background:'#0D1117' }}>
                      {status === 'loading' ? (
                        <><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>Sending…</>
                      ) : (
                        <><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>Send Inquiry by Email</>
                      )}
                    </motion.button>

                    {/* WhatsApp */}
                    <motion.button type="button" onClick={handleWA}
                      whileHover={{ scale:1.02 }} whileTap={{ scale:0.97 }}
                      className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl font-black text-sm text-white transition-all"
                      style={{ background:'#25D366' }}>
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Chat on WhatsApp
                    </motion.button>
                  </div>

                  <p className="text-center text-xs" style={{ color:'#94a3b8' }}>
                    🔒 Your info is only used to respond to your inquiry. We never spam.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
