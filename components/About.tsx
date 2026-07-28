'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const STACK = [
  {
    name: 'React',
    svg: <svg viewBox="0 0 24 24" className="w-7 h-7" fill="#61DAFB"><circle cx="12" cy="11.6" r="2" /><path d="M12 5.5c2.7 0 5.2.7 7 1.8 2.1 1.3 3.4 3.2 3.4 5.3s-1.3 4-3.4 5.3c-1.8 1.1-4.3 1.8-7 1.8s-5.2-.7-7-1.8C2.9 16.6 1.6 14.7 1.6 12.6S2.9 8.6 5 7.3C6.8 6.2 9.3 5.5 12 5.5z" fillOpacity=".2"/><path d="M8.5 4.7C9.8 2.4 11.2.8 12.6.5c.9-.2 1.8.3 2.6 1.3 1 1.2 1.7 3 1.9 5.1.2 2 0 4-.5 5.8-.6 2-1.5 3.5-2.6 4.4-.7.6-1.4.8-2.1.7-1.3-.3-2.5-1.8-3.3-4-.7-2-.9-4.5-.4-6.7.2-.8.5-1.6.9-2.4z" fillOpacity=".2"/></svg>,
  },
  {
    name: 'Next.js',
    svg: <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor"><path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747C23.573 4.177 20.365.39 15.998.07 15.635.03 11.763-.006 11.572 0z"/></svg>,
  },
  {
    name: 'Supabase',
    svg: <svg viewBox="0 0 24 24" className="w-7 h-7" fill="#3ECF8E"><path d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C.111 12.888.706 14.1 1.771 14.1h9.181a.714.714 0 0 1 .707.783l-.632 7.88c-.015.986 1.26 1.41 1.875.637l9.261-11.652c.653-.838.058-2.05-1.007-2.05h-9.181a.714.714 0 0 1-.707-.783l.632-7.879z"/></svg>,
  },
  {
    name: 'Node.js',
    svg: <svg viewBox="0 0 24 24" className="w-7 h-7" fill="#339933"><path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.605.065-.037.151-.023.218.017l2.256 1.339c.082.045.198.045.275 0l8.795-5.076c.082-.047.134-.141.134-.238V6.921c0-.099-.053-.19-.137-.242l-8.791-5.072c-.081-.047-.189-.047-.271 0L3.075 6.68c-.084.051-.139.146-.139.241v10.15c0 .097.055.189.139.235l2.409 1.392c1.307.654 2.108-.116 2.108-.891V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.111.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675a1.86 1.86 0 0 1-.922-1.604V6.921c0-.659.352-1.275.922-1.603l8.795-5.082c.557-.315 1.296-.315 1.848 0l8.794 5.082c.57.329.924.944.924 1.603v10.15c0 .659-.354 1.275-.924 1.604l-8.794 5.076c-.282.164-.6.247-.925.247z"/></svg>,
  },
  {
    name: 'TypeScript',
    svg: <svg viewBox="0 0 24 24" className="w-7 h-7" fill="#3178C6"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/></svg>,
  },
  {
    name: 'Tailwind',
    svg: <svg viewBox="0 0 24 24" className="w-7 h-7" fill="#06B6D4"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/></svg>,
  },
];

const VALUES = [
  {
    icon: '🎯',
    title: 'Engineering-Led',
    body: 'We apply international-grade software architecture to every project — the same standards used by enterprise systems, delivered to Sri Lankan SMEs.',
  },
  {
    icon: '🏗️',
    title: 'Built to Last',
    body: 'No low-code shortcuts. We write production-quality code that runs reliably for years. Every system is documented, tested, and maintainable.',
  },
  {
    icon: '🤝',
    title: 'Relationships First',
    body: "Our longest client relationships are 5+ years old. We don't disappear after delivery — we become your technology partner.",
  },
];

// Stat definitions with animation targets
const STATS = [
  { display: '500+', target: 500, suffix: '+', label: 'Businesses Served' },
  { display: '7+', target: 7, suffix: '+', label: 'Years in Business' },
  { display: '98%', target: 98, suffix: '%', label: 'Client Satisfaction' },
];

// Stack stagger variants
const stackContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.6,
    },
  },
};

const stackItemVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.85 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: 'easeOut' },
  },
};

function AnimatedCounter({ target, suffix, isInView }: { target: number; suffix: string; isInView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1400;
    const step = Math.max(1, Math.ceil(target / (duration / 16)));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <>{count}{suffix}</>;
}

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="py-32 bg-brandGray/60 backdrop-blur-sm relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 dot-grid opacity-[0.03]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-brandTeal text-xs font-bold uppercase tracking-widest mb-6 px-4 py-2 rounded-full bg-brandTeal/10 border border-brandTeal/20">
              About IPYNB Solutions
            </span>
            <h2 className="font-display font-black text-5xl lg:text-6xl text-brandNavy tracking-tight mb-8 leading-tight">
              Engineering-Led.
              <br />
              <span className="gradient-text">Results-Focused.</span>
            </h2>
            <p className="text-slateText text-lg leading-relaxed mb-6">
              IPYNB Solutions is a specialized business software agency dedicated to modernizing the manual workflows of Sri Lankan enterprises. We bridge the gap between complex engineering and everyday usability.
            </p>
            <p className="text-slateText text-lg leading-relaxed mb-10">
              Every system we architect is grounded in international-grade technical standards. We don't just build software — we analyze your operations, identify your bottlenecks, and engineer a solution that removes them permanently.
            </p>

            {/* Animated counters */}
            <div className="flex items-center gap-6">
              {STATS.map((stat, i) => (
                <div key={i} className="flex items-center gap-6">
                  {i > 0 && <div className="w-px h-12 bg-slate-200" />}
                  <div className="text-center">
                    <div className="font-display font-black text-4xl text-brandNavy">
                      <AnimatedCounter target={stat.target} suffix={stat.suffix} isInView={isInView} />
                    </div>
                    <div className="text-slateText text-sm mt-1">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Values */}
          <div className="space-y-5">
            {VALUES.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                whileHover={{ x: 4 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-100 shadow-[0_4px_20px_rgba(13,17,23,0.04)] flex items-start gap-5 group transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-brandNavy/5 flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-brandTeal/10 transition-colors">
                  {v.icon}
                </div>
                <div>
                  <h3 className="font-display font-black text-lg text-brandNavy mb-2">{v.title}</h3>
                  <p className="text-slateText text-sm leading-relaxed">{v.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech stack — staggered icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 border border-slate-100 shadow-[0_4px_20px_rgba(13,17,23,0.04)]"
        >
          <p className="text-center text-xs font-black uppercase tracking-widest text-slate-400 mb-8">
            Built With Industry-Standard Technologies
          </p>
          <motion.div
            variants={stackContainerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="flex items-center justify-center gap-8 lg:gap-14 flex-wrap"
          >
            {STACK.map((tech) => (
              <motion.div
                key={tech.name}
                variants={stackItemVariants}
                whileHover={{ scale: 1.15, y: -3 }}
                className="flex flex-col items-center gap-2 group cursor-default"
              >
                <div className="opacity-60 group-hover:opacity-100 transition-opacity">
                  {tech.svg}
                </div>
                <span className="text-xs font-semibold text-slate-400 group-hover:text-brandNavy transition-colors">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
