/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js,webp}","./src/**/*.{html,js,jsx,ts,tsx,png,jpg,webp}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        // Product Card
        '.product-card': {
          '@apply bg-white p-3 rounded-lg md:hover:shadow-2xl': {},
        },
        '.card-image-container':{
          '@apply relative rounded-lg mb-3': {},
        },
        '.card-image':{
          '@apply rounded mb-4 brightness-[0.9] group-hover:brightness-[1.05] duration-200' : {},
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
        '.card-title':{
          '@apply text-xl font-bold text-blue-800 line-clamp-1': {},
        },
        '.star-rating':{
          '@apply flex flex-row h-4 mb-2 items-center gap-0.5': {},
        },
        '.disabled':{
          '@apply saturate-0': {},
        },
        '.star-rating img': {
          '@apply w-4 h-4 hover:scale-125': {},
        },
        '.old-price':{
          '@apply text-xs md:text-base lg:text-base line-through text-red-600 me-2':{},
        },
        '.pricing':{
          '@apply text-2xl text-center font-bold mt-1 tracking-tighter items-start': {},
        },
        '.pricing span':{
          '@apply text-3xl font-bold text-black': {},
        },
        '.pricing-container':{
          '@apply container flex flex-wrap items-center justify-start':{},
        },

        // Content Card
        '.content-card':{
          '@apply p-4 pb-8 bg-white rounded-md md:hover:shadow-2xl':{},
        },
        '.content-card-image': {
          '@apply relative brightness-[0.9] group-hover:brightness-[1.05] duration-200': {},
        },
        '.card-description':{
          '@apply text-base md:text-base line-clamp-2':{},
        },
        '.content-title':{
          '@apply absolute bottom-10 w-full text-center text-xl font-medium text-white line-clamp-2 uppercase': {}
        },
        '.card-link':{
          '@apply text-base text-blue-700 font-bold py-2':{}
        },
        '.lorem-ipsum, h3':{
          '@apply text-2xl font-bold mb-4 text-blue-800':{},
        },

        // Default components
        '.primary-button':{
          '@apply rounded-lg w-full bg-blue-800 hover:bg-blue-700 text-white px-3 py-3 md:px-7 md:py-5 mt-5 text-xl md:text-2xl': {},
        },
        '.primary-button i':{
          '@apply me-1': {},
        },
        '.excerpt-lg': {
          '@apply line-clamp-4':{},
        },
        '.excerpt-md': {
          '@apply line-clamp-2':{},
        },
        '.excerpt-sm': {
          '@apply line-clamp-1':{},
        },
        'span':{
          '@apply text-blue-700': {},
        }
      });
    },
  ],
}