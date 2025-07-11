/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(100deg)' },
          '50%': { transform: 'rotate(0deg)' },
          '75%': { transform: 'rotate(100deg)' },
          '100%': { transform: 'rotate(0deg)' },
        }
      },
      animation: {
        wave: 'wave 1.2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}