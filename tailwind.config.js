/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  safelist: [
    'bg-black',
    'bg-gray-50',
    'bg-gray-800',
    'text-white',
    'text-gray-400',
    'text-gray-600'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}