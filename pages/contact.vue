<template>
  <div class="flex flex-col min-h-screen">
    <NavBar />
    <main class="p-8 max-w-4xl mx-auto flex-grow"> <!-- Changed max-w-lg to max-w-2xl -->
      <h1 class="text-3xl font-bold text-center mb-6">Ваші побажання та пропозиції</h1>

      <form @submit.prevent="submitForm" class="bg-white shadow-md rounded-lg p-6 space-y-4">
        <div>
          <label class="block text-sm font-semibold mb-2">Ім’я</label>
          <input v-model="formData.name" type="text" class="w-full p-2 border rounded" />
        </div>

        <div>
          <label class="block text-sm font-semibold mb-2">Електронна пошта</label>
          <input v-model="formData.email" type="email" class="w-full p-2 border rounded" />
        </div>

        <div>
          <label class="block text-sm font-semibold mb-2">Ваші побажання та пропозиції</label>
          <textarea v-model="formData.message" class="w-full p-2 border rounded"></textarea>
        </div>

        <button type="submit" class="bg-primary text-white w-full py-2 px-4 rounded-lg hover:bg-secondary-light">
          Submit
        </button>
      </form>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useToast } from 'vue-toastification';
import NavBar from '~/components/NavBar.vue';
import Footer from '~/components/Footer.vue';
import { contactSchema } from '~/server/models/contactSchema';

const toast = useToast();

const formData = ref({
  name: '',
  email: '',
  message: '',
});

const submitForm = async () => {
  try {
    const result = contactSchema.safeParse(formData.value);

    if (!result.success) {
      result.error.errors.forEach(error => {
        toast.error(error.message);
      });
      return;
    }

    await $fetch('/api/contact/post', {
      method: 'POST',
      body: result.data,
    });

    toast.success('Contact request submitted successfully!');
    formData.value = { name: '', email: '', message: '' };
  } catch (error) {
    console.error('Error submitting form:', error);
    toast.error('Error submitting contact request. Please try again.');
  }
};
</script>

<style scoped>
/* Additional styling if necessary */
</style>
