'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Each orb: position, size, color, animation timing
const ORBS = [
  { x: '8%',  y: '12%',  w: 700, h: 700, color: 'rgba(99,102,241,0.09)',  dur: 22, delay: 0    },
  { x: '72%', y: '5%',   w: 500, h: 500, color: 'rgba(79,70,229,0.07)',   dur: 28, delay: 4    },
  { x: '55%', y: '55%',  w: 650, h: 650, color: 'rgba(129,140,248,0.06)', dur: 20, delay: 8    },
  { x: '85%', y: '70%',  w: 400, h: 400, color: 'rgba(99,102,241,0.08)',  dur: 25, delay: 2    },
  { x: '15%', y: '75%',  w: 550, h: 550, color: 'rgba(139,92,246,0.06)',  dur: 30, delay: 12   },
  { x: '40%', y: '25%',  w: 350, h: 350, color: 'rgba(99,102,241,0.05)',  dur: 18, delay: 6    },
];

export default function SiteBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animated dot-grid canvas — draws pulsing dots that breathe in/out
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const SPACING = 36;
    const BASE_R  = 0.9;
    const MAX_R   = 1.6;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cols = Math.ceil(canvas.width  / SPACING) + 1;
      const rows = Math.ceil(canvas.height / SPACING) + 1;

      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const x = c * SPACING;
          const y = r * SPACING;
          // Wave offset based on position + time
          const wave = Math.sin(t * 0.6 + c * 0.3 + r * 0.5) * 0.5 + 0.5;
          const radius = BASE_R + wave * (MAX_R - BASE_R);
          const alpha  = 0.06 + wave * 0.09;

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(99,102,241,${alpha.toFixed(3)})`;
          ctx.fill();
        }
      }

      t += 0.012;
      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* ── Base background color ─────────────────────────── */}
      <div className="absolute inset-0 bg-[#F2F3FF]" />

      {/* ── Animated dot grid canvas ─────────────────────── */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 1 }}
      />

      {/* ── Drifting gradient orbs ────────────────────────── */}
      {ORBS.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: orb.x,
            top:  orb.y,
            width:  orb.w,
            height: orb.h,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            filter: 'blur(60px)',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            x:       [0, 40, -25, 15, 0],
            y:       [0, -30, 20, -10, 0],
            scale:   [1, 1.12, 0.95, 1.06, 1],
            opacity: [0.7, 1, 0.8, 1, 0.7],
          }}
          transition={{
            duration: orb.dur,
            delay:    orb.delay,
            repeat:   Infinity,
            ease:     'easeInOut',
            times:    [0, 0.25, 0.5, 0.75, 1],
          }}
        />
      ))}

      {/* ── Top-edge gradient fade (navbar area) ─────────── */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-indigo-50/60 to-transparent" />

      {/* ── Subtle noise texture ──────────────────────────── */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
        }}
      />
    </div>
  );
}
