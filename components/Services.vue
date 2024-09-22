<!-- components/Services.vue -->
<template>
    <section class="relative bg-cover bg-center bg-no-repeat py-16 text-white" :style="{ backgroundImage: `url('/images/services.jpg')` }">
      <!-- Overlay for better contrast -->
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
  
      <!-- Content -->
      <div class="relative z-10 flex flex-col items-center">
        <h2 class="text-4xl font-bold mb-12">Наші Послуги</h2>
  
        <div class="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
          <!-- Service 1 -->
          <div class="bg-white text-black rounded-lg p-6 shadow-md max-w-xs w-full md:w-auto">
            <h3 class="text-2xl font-semibold mb-2 text-center">Послуга 1</h3>
            <p class="text-center">Високоякісні автозапчастини для різних моделей автомобілів.</p>
          </div>
  
          <!-- Service 2 -->
          <div class="bg-white text-black rounded-lg p-6 shadow-md max-w-xs w-full md:w-auto">
            <h3 class="text-2xl font-semibold mb-2 text-center">Послуга 2</h3>
            <p class="text-center">Швидка та надійна доставка.</p>
          </div>
  
          <!-- Service 3 -->
          <div class="bg-white text-black rounded-lg p-6 shadow-md max-w-xs w-full md:w-auto">
            <h3 class="text-2xl font-semibold mb-2 text-center">Послуга 3</h3>
            <p class="text-center">Відмінне обслуговування клієнтів.</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  // No logic needed as this is a static component
  </script>
  
  <style scoped>
  .bg-cover {
    background-size: cover;
  }
  </style>
  