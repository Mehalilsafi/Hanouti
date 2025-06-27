
/** @type {import('tailwindcss').Config} */

module.exports = {
    darkMode: ["class"],
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}" ,
  ],
   theme: {
   	extend: {
   		colors: {
   			primary: 'var(--brand-primary)',
   			accent: 'var(--brand-accent)',
   			bg: {
   				main: 'var(--bg-main)',
   				secondary: 'var(--bg-secondary)'
   			},
   			text: {
   				base: 'var(--text-base)',
   				highlight: 'var(--text-highlight)'
   			},
   			sidebar: {
   				DEFAULT: 'hsl(var(--sidebar-background))',
   				foreground: 'hsl(var(--sidebar-foreground))',
   				primary: 'hsl(var(--sidebar-primary))',
   				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
   				accent: 'hsl(var(--sidebar-accent))',
   				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
   				border: 'hsl(var(--sidebar-border))',
   				ring: 'hsl(var(--sidebar-ring))'
   			}
   		}
   	}
   },
  plugins: [],
};



