/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // Brand palette: change the look of the whole site from here
      colors: {
        cream: '#FAF6F1',
        sand: '#F2EBE2',
        line: '#E5DBCF',
        ink: '#1E1A19',
        muted: '#6E645E',
        rose: {
          DEFAULT: '#A8323E',
          dark: '#8A2832',
          soft: '#F5E6E3',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Jost', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        site: '72rem',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(1rem)' },
          to: { opacity: '1', transform: 'none' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
};
