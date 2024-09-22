<template>
  <div>
    <!-- NavBar at the top -->
    <NavBar />

    <section class="py-16 flex flex-col justify-center items-center">
      <h2 class="text-4xl font-bold text-center mb-12">Наші Послуги</h2>
      <div class="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
        <!-- Service 1 -->
        <div class="bg-gray-100 rounded-lg p-8 shadow-md max-w-xs">
          <h3 class="text-2xl font-semibold text-center mb-4">Продаж Автозапчастин</h3>
          <p class="text-center">Ми пропонуємо широкий асортимент запчастин для різних моделей автомобілів.</p>
        </div>

        <!-- Service 2 -->
        <div class="bg-gray-100 rounded-lg p-8 shadow-md max-w-xs">
          <h3 class="text-2xl font-semibold text-center mb-4">Швидка Доставка</h3>
          <p class="text-center">Ми гарантуємо швидку та надійну доставку замовлених товарів по всій Україні.</p>
        </div>

        <!-- Service 3 -->
        <div class="bg-gray-100 rounded-lg p-8 shadow-md max-w-xs">
          <h3 class="text-2xl font-semibold text-center mb-4">Підтримка Клієнтів</h3>
          <p class="text-center">Наша команда завжди готова надати вам професійну підтримку та консультацію.</p>
        </div>
      </div>
    </section>

    <!-- Footer at the bottom -->
    <Footer />
  </div>
</template>

<script setup>
import NavBar from '~/components/NavBar.vue'; // Importing the NavBar component
import Footer from '~/components/Footer.vue'; // Importing the Footer component
</script>

<style scoped>
/* The section itself will be centered */
.flex {
  display: flex;
}
</style>
