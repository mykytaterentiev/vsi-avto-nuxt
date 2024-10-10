<template>
  <section
    class="relative bg-cover bg-center bg-no-repeat py-16 text-white"
    :style="{ backgroundImage: `url('/images/services.jpg')` }"
  >
    <!-- Overlay for better contrast -->
    <div class="absolute inset-0 bg-black bg-opacity-50"></div>

    <!-- Content -->
    <div class="relative z-10 flex flex-col items-center">
      <h2 class="text-4xl font-bold mb-12">Наші Послуги</h2>

      <div class="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6 w-full">
        <!-- Service 1 -->
        <div class="bg-customColors-kolya text-white rounded-lg p-6 shadow-md flex-grow max-w-lg w-full text-center">
          <h3 class="text-2xl font-semibold mb-2">Високоякісні автозапчастини для автомобілів.</h3>
        </div>

        <!-- Service 2 -->
        <div class="bg-customColors-kolya text-white rounded-lg p-6 shadow-md flex-grow max-w-lg w-full text-center">
          <h3 class="text-2xl font-semibold mb-2">Швидка та надійна доставка.</h3>
        </div>

        <!-- Service 3 -->
        <div class="bg-customColors-kolya text-white rounded-lg p-6 shadow-md flex-grow max-w-lg w-full text-center">
          <h3 class="text-2xl font-semibold mb-2">Відмінне обслуговування клієнтів.</h3>
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
