/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  safelist: [
    // Backgrounds
    'bg-black',
    'bg-gray-50',
    'bg-gray-800',
    'bg-white',
    'bg-pink-500',
    'bg-pink-600',
    'bg-black/50',
    '!bg-black',
    '!bg-gray-800',
    // Text colors
    'text-white',
    'text-gray-400',
    'text-gray-600',
    'text-pink-500',
    'text-pink-300',
    // Hover states
    'hover:bg-pink-600',
    'hover:bg-gray-800',
    'hover:text-pink-500',
    'hover:text-pink-300',
    // Opacity
    'opacity-50',
    'opacity-100',
    'opacity-0'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}