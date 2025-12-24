/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        curtainExit: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100vh)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(24px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        curtainExit: 'curtainExit 0.6s ease-in forwards',
        slideUp: 'slideUp 0.1s ease-out forwards',
      },
    },
  },
  plugins: [],
};
