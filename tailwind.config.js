/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#07071a',
          900: '#0d0d25',
          800: '#141430',
          700: '#1e1e42',
        },
        gold: {
          300: '#ffe3a8',
          400: '#ffd06a',
          500: '#f5a623',
          600: '#d4920b',
          700: '#a87008',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
