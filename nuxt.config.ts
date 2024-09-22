// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    plugins: ['~/server/middleware/cors.ts'],
  },
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: 'VSI AVTO - Best Auto Parts', // Custom title for the tab
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/images/logo.svg' }, // Favicon configuration
      ],
    },
  },
});
