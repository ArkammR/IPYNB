'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const ORBS = [
  { x: '8%',  y: '10%', w: 700, h: 700, color: 'rgba(99,102,241,0.07)',  dur: 22, delay: 0  },
  { x: '75%', y: '6%',  w: 500, h: 500, color: 'rgba(79,70,229,0.06)',   dur: 28, delay: 4  },
  { x: '55%', y: '52%', w: 650, h: 650, color: 'rgba(129,140,248,0.05)', dur: 20, delay: 8  },
  { x: '88%', y: '72%', w: 400, h: 400, color: 'rgba(99,102,241,0.06)',  dur: 25, delay: 2  },
  { x: '12%', y: '78%', w: 550, h: 550, color: 'rgba(139,92,246,0.05)',  dur: 30, delay: 12 },
];

export default function SiteBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Mount flag — orbs only render on client to avoid SSR/client mismatch
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cols = Math.ceil(canvas.width  / SPACING) + 1;
      const rows = Math.ceil(canvas.height / SPACING) + 1;
      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const wave   = Math.sin(t * 0.5 + c * 0.28 + r * 0.42) * 0.5 + 0.5;
          const radius = 0.8 + wave * 0.9;
          const alpha  = 0.04 + wave * 0.07;
          ctx.beginPath();
          ctx.arc(c * SPACING, r * SPACING, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(99,102,241,${alpha.toFixed(3)})`;
          ctx.fill();
        }
      }
      t += 0.01;
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
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* solid dark base — always matches server + client */}
      <div className="absolute inset-0" style={{ background: '#0D1117' }} />

      {/* dot grid canvas — client only */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* orbs — only rendered on client to prevent hydration mismatch */}
      {mounted && ORBS.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left:       orb.x,
            top:        orb.y,
            width:      orb.w,
            height:     orb.h,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            filter:     'blur(70px)',
            transform:  'translate(-50%, -50%)',
          }}
          animate={{
            x:     [0, 35, -20, 12, 0],
            y:     [0, -28, 18, -8, 0],
            scale: [1, 1.1, 0.96, 1.05, 1],
          }}
          transition={{
            duration: orb.dur,
            delay:    orb.delay,
            repeat:   Infinity,
            ease:     'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
