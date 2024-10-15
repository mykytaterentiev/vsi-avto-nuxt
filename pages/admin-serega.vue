<template>
  <div>
    <NavBar />
    <main class="p-8">
      <h1 class="text-4xl font-bold text-center mb-8">Панель Адміна</h1>

      <!-- If not logged in, show the login form -->
      <div v-if="!isLoggedIn">
        <form @submit.prevent="submitLogin" class="max-w-lg mx-auto">
          <div class="mb-4">
            <label class="block text-sm font-semibold mb-2">Логін</label>
            <input v-model="username" type="text" class="w-full p-2 border rounded" required />
          </div>
          <div class="mb-4">
            <label class="block text-sm font-semibold mb-2">Пароль</label>
            <input v-model="password" type="password" class="w-full p-2 border rounded" required />
          </div>
          <button type="submit" class="bg-primary text-white w-full py-2 px-4 rounded-lg hover:bg-secondary-light">
            Увійти
          </button>
        </form>
      </div>

      <!-- If logged in, show the admin tables -->
      <div v-else>
        <section>
          <h2 class="text-2xl font-bold mb-4">Запчастини</h2>
          <CarPartsTable />
        </section>
        <section class="mt-10">
          <h2 class="text-2xl font-bold mb-4">Пропозиції</h2>
          <ContactTable />
        </section>
        <section class="mt-10">
          <h2 class="text-2xl font-bold mb-4">Відгуки</h2>
          <ReviewsTable />
        </section>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useToast } from 'vue-toastification';
import NavBar from '~/components/NavBar.vue';
import Footer from '~/components/Footer.vue';
import CarPartsTable from '~/components/CarPartsTable.vue';
import ContactTable from '~/components/ContactTable.vue';
import ReviewsTable from '~/components/ReviewsTable.vue';

// State for login
const isLoggedIn = ref(false); // Initially, user is not logged in
const username = ref('');
const password = ref('');
const toast = useToast();

const submitLogin = async () => {
  try {
    const response = await $fetch('/api/auth/login', {
      method: 'POST',
      body: { username: username.value, password: password.value }
    });

    // If login is successful
    if (response.message === 'Admin access granted') {
      isLoggedIn.value = true; // Mark user as logged in
      toast.success('Login successful');
    } else {
      toast.error('Login failed');
    }
  } catch (error) {
    toast.error('Login failed: ' + error.message);
  }
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
