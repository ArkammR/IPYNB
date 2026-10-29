import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brandNavy: '#0F172A',
        brandTeal: '#008B8B',
        brandGray: '#FAF9F6',
        slateText: '#475569',
        // Light palette; accent matches the brand teal
        paper: '#FAF9F6',
        ink: '#14171C',
        muted: '#5B6270',
        line: '#E3E2DD',
        accent: '#008B8B',
        accentHover: '#007575',
        accentSoft: '#E6F4F4',
        // keep legacy colors for any remaining refs
        navy: '#0F172A',
        orange: '#FF6B00',
        whatsapp: '#25D366',
        bg: '#F8FAFC',
        grid: '#E5E5E5',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        grotesk: ['Montserrat', 'sans-serif'],
        hand: ['Caveat', 'cursive'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
        'fade-up': 'fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both',
        'slide-progress': 'slide-progress 6s linear forwards',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-progress': {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
