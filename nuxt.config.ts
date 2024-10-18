export default defineNuxtConfig({
  nitro: {
    plugins: ['~/server/middleware/cors.ts'],
  },
  css: [
    '~/assets/css/tailwind.css',
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
      title: 'VSI AVTO - Точний підбір запчастин за VIN', // Спеціальна назва для вкладки
      meta: [
        { name: 'description', content: 'VSI AVTO - найкращий сервіс підбору автозапчастин за VIN в Україні. З нами ви зможете швидко і точно знайти необхідні деталі для вашого автомобіля.' }, // Опис сайту
        { name: 'keywords', content: 'автозапчастини, підбір запчастин, запчастини за VIN, VSI AVTO, автомобільні запчастини, Україна' }, // Ключові слова для пошукових систем
        { name: 'author', content: 'VSI AVTO' }, // Автор сайту
        { name: 'robots', content: 'index, follow' }, // Пошуковим роботам дозволено індексувати сайт
        { property: 'og:title', content: 'VSI AVTO - Точний підбір запчастин за VIN' }, // Оптимізація для соціальних мереж (Open Graph)
        { property: 'og:description', content: 'Найкращий сервіс підбору автозапчастин за VIN в Україні. Швидкий і точний пошук потрібних деталей для вашого автомобіля.' }, // Опис для соціальних мереж
        { property: 'og:type', content: 'website' }, // Тип контенту
        { property: 'og:url', content: 'https://vsi-avto.com.ua' }, // URL вашого сайту
        { property: 'og:image', content: '/images/logo.svg' }, // Зображення для соціальних мереж
        { name: 'twitter:card', content: 'summary_large_image' }, // Twitter card
        { name: 'twitter:title', content: 'VSI AVTO - Точний підбір запчастин за VIN' }, // Назва для Twitter
        { name: 'twitter:description', content: 'Найкращий сервіс підбору автозапчастин за VIN в Україні.' }, // Опис для Twitter
        { name: 'twitter:image', content: '/images/logo.svg' }, // Зображення для Twitter
        { charset: 'utf-8' }, // Вказівка кодування символів
        { name: 'viewport', content: 'width=device-width, initial-scale=1' } // Для мобільної оптимізації
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/images/logo.svg' }, // Налаштування фавікону
      ],
    },
  },
});
