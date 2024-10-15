<template>
    <section class="relative bg-cover bg-center bg-no-repeat h-screen md:h-96 flex items-center justify-center text-center text-white" :style="{ backgroundImage: `url(${backgroundImage})` }">
      <!-- Overlay for better text contrast -->
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
  
      <!-- Content -->
      <div class="relative z-10">
        <h1 class="text-4xl md:text-6xl font-benzin mb-4">Запчастини для вашого авто</h1>
        <p class="text-lg md:text-2xl mb-8">Знайдіть найкращі автозапчастини для ваших потреб</p>
        <NuxtLink to="/parts-selection" class="inline-block bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-secondary-light transition duration-300">
          Підібрати автозапчастини
        </NuxtLink>
      </div>
    </section>
  </template>
  
  <script setup>
  const backgroundImage = '/images/banner.jpeg';
  </script>
  
  <style scoped>
  /* Ensures proper background image scaling */
  .bg-cover {
    background-size: cover;
  }
  
  .bg-center {
    background-position: center;
  }
  
  .h-screen {
    min-height: 100vh; /* Fullscreen height on mobile */
  }
  </style>
  