/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          500: '#6366F1',
          600: '#4F46E5',
        },
        secondary: {
          500: '#EC4899',
          600: '#DB2777',
        },
      },
    },
  },
  plugins: [],
};
