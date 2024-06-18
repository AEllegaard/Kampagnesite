/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'big': ['big-caslon-fb', 'serif'],
        'pp': ['PPNeueMontreal', 'sans-serif'],
      },
      colors: {
        'hvid': 'var(--hvid-rgba)',
      }
    },
  },
  plugins: [],
}