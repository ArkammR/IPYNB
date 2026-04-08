export default function Comparison() {
  const rows = [
    { them: 'Clunky, generic interface', us: 'Custom-built architecture for your workflow' },
    { them: 'Hidden monthly subscription fees', us: 'Lifetime ownership — one-time payment' },
    { them: '"One-size-fits-all" logic', us: 'System Analyst-led custom design' },
    { them: 'Disappearing after-sale support', us: '24/7 WhatsApp partner support' },
    { them: 'Weeks of onboarding', us: 'On-site deployment & 1-on-1 training' },
  ];

  return (
    <section className="py-32 bg-brandGray">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-brandNavy tracking-tight mb-4">
            The Difference is in<br />How We Build.
          </h2>
          <p className="text-slateText text-lg">
            Most providers sell you a product. We build you a system.
          </p>
        </div>

        <div className="bg-white rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.05)] border border-slate-100">
          {/* Header */}
          <div className="grid grid-cols-2 border-b border-slate-100">
            <div className="px-8 py-5 text-slateText font-semibold text-sm">Standard Providers</div>
            <div className="px-8 py-5 bg-brandTeal/5 border-l-2 border-brandTeal text-brandTeal font-semibold text-sm">
              IPYNB Solutions
            </div>
          </div>

          {rows.map((row, i) => (
            <div key={i} className="grid grid-cols-2 border-b border-slate-50 last:border-b-0">
              <div className="px-8 py-5 flex items-center gap-3 text-slateText text-sm">
                <span className="text-red-400 font-bold text-base">✕</span>
                {row.them}
              </div>
              <div className="px-8 py-5 flex items-center gap-3 bg-brandTeal/5 border-l-2 border-brandTeal text-brandNavy text-sm font-medium">
                <span className="text-brandTeal font-bold text-base">✓</span>
                {row.us}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
