/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,png,jpg}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.product-card': {
          '@apply bg-slate-100 p-3 rounded-md hover:shadow-xl': {},
        },
        '.primary-button':{
          '@apply rounded w-full bg-sky-900 hover:bg-sky-700 text-white px-5 py-2 mt-5 text-xl': {},
        },
        '.star-rating': {
          '@apply flex flex-row mb-2': {},
        },
        '.star-rating img': {
          '@apply w-4': {},
        },
        '.pricing': {
          '@apply text-3xl font-bold mt-2': {},
        },
        '.pricing span':{
          '@apply text-4xl font-bold': {},
        },
      });
    },
  ],
}