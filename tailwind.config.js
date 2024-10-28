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
          '@apply bg-white p-3 rounded-lg shadow-xl': {},
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
          '@apply w-3 h-3 hover:scale-125': {},
        },
        '.old-price':{
          '@apply text-sm md:text-base lg:text-base line-through text-red-600 me-2':{},
        },
        '.pricing': {
          '@apply text-2xl text-center font-bold mt-1 tracking-tighter items-start': {},
        },
        '.pricing span':{
          '@apply text-3xl font-bold': {},
        },
        '.pricing-container':{
          '@apply container flex flex-wrap items-center justify-start':{},
        },
        '.card-title':{
          '@apply text-xl md:text-3xl lg:text-xl font-bold text-sky-900': {},
        },
        '.card-description':{
          '@apply text-base md:text-base':{},
        },
        '.primary-button':{
          '@apply rounded-lg w-full bg-sky-900 hover:bg-sky-800 text-white px-3 py-3 md:px-7 md:py-5 mt-5 text-xl md:text-2xl': {},
        },
        '.primary-button i':{
          '@apply me-1': {},
        },
        '.content-card':{
          '@apply p-4 pb-8 bg-white rounded-md shadow-xl':{},
        },
        '.content-card-image': {
          '@apply relative': {},
        },
        '.content-title':{
          '@apply absolute bottom-10 w-full text-center text-3xl font-bold text-white': {}
        },
        '.card-link':{
          '@apply text-base text-blue-700 font-bold py-2':{}
        }
      });
    },
  ],
}