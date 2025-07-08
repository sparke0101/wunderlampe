/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#d4af37',
        'gold-light': '#ffd700',
        'gold-dark': '#b8860b',
        'soft-blue-white': '#E0F7FA',
        'light-gray': '#DCDCDC',
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
        'display': ['Playfair Display', 'serif'],
        'body': ['Lato', 'system-ui', 'sans-serif'],
        sans: ['Lato', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'base': '18px', // Increased base font size for better mobile readability
        'lg': '20px',
        'xl': '22px',
        '2xl': '26px',
        '3xl': '30px',
        '4xl': '36px',
        '5xl': '48px',
        '6xl': '60px',
        '7xl': '72px',
        '8xl': '96px',
      },
    },
  },
  plugins: [],
};