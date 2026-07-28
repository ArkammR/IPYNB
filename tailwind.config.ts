import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // ── Brand palette ──────────────────────────────────────────────
        brandDark:   'rgb(var(--color-brand-dark)   / <alpha-value>)',
        brandAccent: 'rgb(var(--color-brand-accent) / <alpha-value>)',
        brandLight:  'rgb(var(--color-brand-light)  / <alpha-value>)',
        // Background tones — indigo-tinted whites
        brandBg:     '#F2F3FF',
        brandCard:   '#EAEBFF',
        brandText:   '#1E1B4B',
        // ── Legacy aliases ─────────────────────────────────────────────
        brandNavy:   'rgb(var(--color-brand-dark)   / <alpha-value>)',
        brandTeal:   'rgb(var(--color-brand-accent) / <alpha-value>)',
        brandGray:   '#EAEBFF',
        slateText:   '#4B5563',
        whatsapp:    '#25D366',
      },
      fontFamily: {
        sans:    ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      animation: {
        float:        'float 6s ease-in-out infinite',
        marquee:      'marquee 30s linear infinite',
        'spin-slow':  'spin-slow 12s linear infinite',
        'gradient-x': 'gradient-x 4s ease infinite',
        shimmer:      'shimmer 2.5s infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'counter-up': 'counter-up 0.6s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-16px)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to:   { transform: 'rotate(360deg)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':      { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition:  '200% 0' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(99,102,241,0.3)' },
          '50%':      { boxShadow: '0 0 40px rgba(99,102,241,0.6)' },
        },
        'counter-up': {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to:   { opacity: '1', transform: 'translateY(0)'    },
        },
      },
    },
  },
  plugins: [],
};

export default config;
