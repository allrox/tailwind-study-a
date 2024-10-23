/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js,webp}","./src/**/*.{html,js,jsx,ts,tsx,png,jpg,webp}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.product-card': {
          '@apply bg-white p-3 rounded-lg hover:shadow-xl': {},
        },
        '.card-image-container':{
          '@apply relative rounded-lg mb-3': {},
        },
        '.card-image':{
          '@apply rounded mb-3': {},
        },
        '.bag-icon':{
          '@apply absolute rounded-full h-8 w-8 bottom-2 right-2 p-3 m-2 bg-white bg-[length:18px_18px]' : {},
          'background-image': 'url("./img/bag.webp")',
          'background-repeat': 'no-repeat',
          'background-position': 'center',
        },
        '.badge':{
          '@apply absolute rounded-full top-3 left-3 px-3 py-1 bg-white text-xs font-medium': {},
        },
        '.favorite-icon':{
          '@apply absolute top-3 right-3 h-9 p-2 bg-white rounded-full':{},
        },
        '.star-rating': {
          '@apply flex flex-row h-4 mb-2 items-center gap-0.5': {},
        },
        '.disabled': {
          '@apply saturate-0': {},
        },
        '.star-rating img': {
          '@apply w-4 h-fit hover:w-5': {},
        },
        '.old-price':{
          '@apply text-base line-through text-red-600 font-bold':{},
        },
        '.pricing': {
          '@apply text-3xl text-center font-bold mt-1 tracking-tighter': {},
        },
        '.pricing span':{
          '@apply text-4xl font-bold': {},
        },
        '.pricing-container':{
          '@apply container flex flex-row items-center gap-2':{},
        },
        '.card-title':{
          '@apply text-xl font-bold text-sky-900': {},
        },
        '.card-description':{
          '@apply text-base':{},
        },
        '.primary-button':{
          '@apply rounded-lg w-full bg-sky-900 hover:bg-sky-800 text-white px-5 py-4 mt-5 text-xl': {},
        },
      });
    },
  ],
}