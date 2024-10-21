<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useHead, useSeoMeta } from '#imports'

const globalTitle = ref('VSI AVTO')
const globalDescription = ref('VSI AVTO - найкращий сервіс підбору автозапчастин за VIN в Україні. З нами ви зможете швидко і точно знайти необхідні деталі для вашого автомобіля.')

useHead({
  titleTemplate: '%s - VSI AVTO',
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/images/logo.svg' },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
      crossorigin: ''
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
      crossorigin: ''
    }
  ],
  script: [
    {
      src: 'https://third-party-script.com/script.js',
      tagPosition: 'bodyClose'
    }
  ],
  bodyAttrs: {
    class: 'test'
  },
  htmlAttrs: {
    lang: 'uk'
  }
})

useSeoMeta({
  title: 'VSI AVTO - Точний підбір запчастин за VIN',
  ogTitle: 'VSI AVTO - Точний підбір запчастин за VIN',
  description: globalDescription.value,
  ogDescription: globalDescription.value,
  ogType: 'website',
  ogUrl: 'https://vsi-avto.com.ua',
  ogImage: 'https://vsi-avto.com.ua/images/logo.svg',
  twitterCard: 'summary_large_image',
  twitterTitle: 'VSI AVTO - Точний підбір запчастин за VIN',
  twitterDescription: 'Найкращий сервіс підбору автозапчастин за VIN в Україні.',
  twitterImage: 'https://vsi-avto.com.ua/images/logo.svg'
})
</script>

<style>
/* Global styles can be added here or imported via CSS files */
</style>









