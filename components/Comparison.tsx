export default function Comparison() {
  const rows = [
    { them: 'Generic screens you have to work around', us: 'Built around how your business works' },
    { them: 'Monthly fees just to keep using it', us: 'One-time setup — monthly plan only for ongoing support' },
    { them: 'Same setup for every business', us: 'We visit and plan it with you first' },
    { them: 'Hard to reach after the sale', us: 'WhatsApp support from the people who built it' },
    { them: 'Learn it yourself', us: 'On-site setup and staff training' },
  ];

  return (
    <section className="py-24 bg-brandGray">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-brandNavy tracking-tight mb-4">
            Why businesses choose us
          </h2>
          <p className="text-slateText text-lg">
            How we compare with ready-made software.
          </p>
        </div>

        <div className="bg-white rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.05)] border border-slate-100">
          {/* Header */}
          <div className="grid grid-cols-2 border-b border-slate-100">
            <div className="px-8 py-5 text-slateText font-semibold text-sm">Ready-made software</div>
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
