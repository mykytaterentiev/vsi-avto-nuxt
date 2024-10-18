// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    plugins: ['~/server/middleware/cors.ts'],
  },
  css: ['~/assets/css/tailwind.css',
     'ag-grid-community/styles/ag-grid.css',
    'ag-grid-community/styles/ag-theme-alpine.css'
  ],
  build: {
    transpile: ['vue-toastification'],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
    
  },
  app: {
    head: {
      title: 'VSI AVTO - Точний підбір запчастин за VIN',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/images/logo.svg' }, 
      ],
    },
  },
});
