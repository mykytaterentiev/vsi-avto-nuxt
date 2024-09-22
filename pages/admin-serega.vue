<template>
    <div>
      <NavBar />
      <main class="p-8">
        <h1 class="text-4xl font-bold text-center mb-8">Панель Адміна</h1>
        <section>
          <h2 class="text-2xl font-bold mb-4">Запчастмни</h2>
          <CarPartsTable />
        </section>
        <section class="mt-10">
          <h2 class="text-2xl font-bold mb-4">Запити</h2>
          <ContactTable />
        </section>
        <section class="mt-10">
          <h2 class="text-2xl font-bold mb-4">Відгуки</h2>
          <ReviewsTable />
        </section>
      </main>
      <Footer />
    </div>
  </template>
  
  <script setup>
  import NavBar from '~/components/NavBar.vue';
  import Footer from '~/components/Footer.vue';
  import CarPartsTable from '~/components/CarPartsTable.vue';
  import ContactTable from '~/components/ContactTable.vue';
  import ReviewsTable from '~/components/ReviewsTable.vue';
  </script>
  