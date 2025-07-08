/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#d4af37',
        'gold-light': '#ffd700',
        'gold-dark': '#b8860b',
        'neon-cyan': '#00ffff',
        'neon-pink': '#ff6b6b',
        'neon-green': '#00ff88',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'fade-in-delay': 'fadeIn 1s ease-in-out 0.5s both',
        'fade-in-delay-2': 'fadeIn 1s ease-in-out 1s both',
        'fade-in-delay-3': 'fadeIn 1s ease-in-out 1.5s both',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};