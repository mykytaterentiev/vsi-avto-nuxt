<template>
  <div>
    <NavBar />
    <main class="p-8 max-w-lg mx-auto">
      <h1 class="text-3xl font-bold text-center mb-6">Надіслати Запит</h1>

      <form @submit.prevent="submitForm" class="bg-white shadow-md rounded-lg p-6 space-y-4">
        <div>
          <label class="block text-sm font-semibold mb-2">ім'я</label>
          <input v-model="formData.name" type="text" class="w-full p-2 border rounded" required />
        </div>

        <div>
          <label class="block text-sm font-semibold mb-2">Телефон</label>
          <input v-model="formData.phone" type="text" class="w-full p-2 border rounded" required />
        </div>

        <div>
          <label class="block text-sm font-semibold mb-2">Марка</label>
          <input v-model="formData.make" type="text" class="w-full p-2 border rounded" required />
        </div>

        <div>
          <label class="block text-sm font-semibold mb-2">Модель</label>
          <input v-model="formData.model" type="text" class="w-full p-2 border rounded" required />
        </div>

        <div>
          <label class="block text-sm font-semibold mb-2">Рік</label>
          <input v-model="formData.year" type="number" class="w-full p-2 border rounded" required />
        </div>

        <div>
          <label class="block text-sm font-semibold mb-2">VIN</label>
          <input v-model="formData.vin" type="text" class="w-full p-2 border rounded" required />
        </div>

        <div>
          <label class="block text-sm font-semibold mb-2">Запит</label>
          <textarea v-model="formData.request" class="w-full p-2 border rounded" required></textarea>
        </div>

        <button type="submit" class="bg-primary text-white w-full py-2 px-4 rounded-lg hover:bg-secondary-light">
          Надіслати
        </button>
      </form>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useToast } from 'vue-toastification';
import NavBar from '~/components/NavBar.vue';
import { carPartSchema } from '~/server/models/CarPart';

const toast = useToast();

const formData = ref({
  name: '',
  phone: '',
  make: '',
  model: '',
  year: '',
  vin: '',
  request: '',
  // Add createdAt field here to be generated when the form is submitted
});

const submitForm = async () => {
  try {
    // Add createdAt field automatically before validation
    formData.value.createdAt = new Date().toISOString();

    // Validate the formData using Zod
    const result = carPartSchema.safeParse(formData.value);
    if (!result.success) {
      result.error.errors.forEach(error => {
        toast.error(error.message);
      });
      return;
    }

    // Submit the form data to the server
    await $fetch('/api/cars/post', {
      method: 'POST',
      body: result.data,
    });

    toast.success('Car part request submitted successfully!');
    
    // Reset the form data after successful submission
    formData.value = {
      name: '',
      phone: '',
      make: '',
      model: '',
      year: '',
      vin: '',
      request: '',
    };
  } catch (error) {
    console.error('Error submitting form:', error);
    toast.error('Error submitting form. Please try again.');
  }
};
</script>

<style scoped>
/* Add additional CSS here if needed */
</style>