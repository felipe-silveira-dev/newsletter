/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      primary: 'hsl(var(--primary) / <alpha-value>)',
      grey: 'hsl(var(--grey) / <alpha-value>)',
      dark: 'hsl(var(--dark) / <alpha-value>)',
      light: 'hsl(var(--light) / <alpha-value>)',
      white: 'hsl(var(--white) / <alpha-value>)',
    },
  },
  plugins: [],
}

