<template>
  <div class="bg-background min-h-screen">
    <NavBar />
    <Banner />
    <main class="p-8">
      <h1 class="text-4xl font-bold text-center mb-4">Чому обирають нас?</h1>
      <p class="text-lg text-center mb-8">
        Ми пропонуємо широкий асортимент автозапчастин найкращої якості за доступними цінами.
      </p>
      <div class="flex justify-center mb-12">
        <NuxtLink to="/parts-selection" class="inline-block bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-secondary-light transition duration-300">
          Підібрати автозапчастини
        </NuxtLink>
      </div>
      <Services />
      <Reviews />
      <Brands />
      <Footer />
    </main>
  </div>
</template>

<script setup>
import NavBar from '~/components/NavBar.vue';
import Banner from '~/components/Banner.vue';
import Services from '~/components/Services.vue';
import Reviews from '~/components/Reviews.vue';
import Brands from '~/components/Brands.vue';
import Footer from '~/components/Footer.vue';
</script>
