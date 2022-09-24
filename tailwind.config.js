/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        textPrim: '#a51a1a',
        textSec: 'rgba(255,255,255,.6)',
      },
    },
  },
  plugins: [],
};
