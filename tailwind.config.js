/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        effect: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        effect: 'effect 8s linear infinite',
      },
      boxShadow: {
        'custom': '0.3rem 0.3rem 0.3rem rgba(0, 0, 0, 0.2), 0.3rem 0.3rem 0.3rem rgba(255, 255, 255, 0.2)',
      },
    },
  },
  plugins: [],
}
