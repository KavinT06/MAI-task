/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-poppins)', 'sans-serif'],
      },
      colors: {
        brand: {
          navy: '#0F2A4A',
          dark: '#0a1628',
          blue: '#1a3a6b',
          teal: '#00c4b4',
          gold: '#F0A500',
        },
      },
    },
  },
  plugins: [],
}