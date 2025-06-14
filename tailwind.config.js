/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}" 
  ],
   theme: {
  extend: {
    colors: {
      primary: 'var(--brand-primary)',
      accent: 'var(--brand-accent)',
      bg: {
        main: 'var(--bg-main)',
        secondary: 'var(--bg-secondary)',
      },
      text: {
        base:'var(--text-base)',
        highlight: 'var(--text-highlight)',
      },
    },
  },
},
  plugins: [],
};



