/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#F77F00',
          light: '#FFB347',
          pale: '#FFF5E6',
          
        },
        teal: {
          DEFAULT: '#408A71',
          light: '#6BB59A',
          dark: '#2D6354',
          pale: '#EAF5F0',
          
        },
        tealCustom: '#008f96',
        orangeCustom: '#f6871f',
      },
      fontFamily: {
        display: ['" GaramonCormorantd"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
        number: ['"Arial"', 'sans-serif'], 
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.7s ease forwards',
        'pulse-dot': 'pulseDot 2s infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(28px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        pulseDot: {
          '0%,100%': { transform: 'scale(1)', opacity: 1 },
          '50%': { transform: 'scale(1.5)', opacity: 0.5 },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
