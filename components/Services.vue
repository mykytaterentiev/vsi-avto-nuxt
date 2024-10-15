<template>
  <section
    class="relative bg-cover bg-center bg-no-repeat py-8 text-white" >
    <!-- Overlay for better contrast -->
    <div class="absolute inset-0 bg-black bg-opacity-0"></div>

    <!-- Content -->
    <div class="relative z-10 flex flex-col items-center">
      <h2 class="text-4xl text-black font-bold mb-12">Наші Послуги</h2>

      <div class="flex flex-col md:flex-row justify-center items-center space-y-5 md:space-y-0 w-full">
        <!-- Service 1 -->
        <div class="bg-customColors-kolya text-white rounded-2xl p-6 shadow-md w-full md:w-1/3 h-32 flex items-center justify-center text-center mx-2">
          <h3 class="text-xl font-semibold">Точний підбір запчастин за VIN</h3>
        </div>

        <!-- Service 2 -->
        <div class="bg-customColors-kolya text-white rounded-2xl p-6 shadow-md w-full md:w-1/3 h-32 flex items-center justify-center text-center mx-2">
          <h3 class="text-xl font-semibold">Безкоштовна консультація</h3>
        </div>

        <!-- Service 3 -->
        <div class="bg-customColors-kolya text-white rounded-2xl p-6 shadow-md w-full md:w-1/3 h-32 flex items-center justify-center text-center mx-2">
          <h3 class="text-xl font-semibold">Обмін та Повернення</h3>
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
