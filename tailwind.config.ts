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
        brandGray: '#F8FAFC',
        slateText: '#475569',
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
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
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
