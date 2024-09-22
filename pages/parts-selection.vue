<!-- pages/parts-selection.vue -->
<template>
  <div>
    <NavBar />
    <main class="p-8 max-w-lg mx-auto">
      <h1 class="text-3xl font-bold text-center mb-6">Submit Car Part Request</h1>

      <form @submit.prevent="submitForm" class="bg-white shadow-md rounded-lg p-6 space-y-4">
        <div>
          <label class="block text-sm font-semibold mb-2">Name</label>
          <input v-model="formData.name" type="text" class="w-full p-2 border rounded" required />
        </div>

        <div>
          <label class="block text-sm font-semibold mb-2">Phone</label>
          <input v-model="formData.phone" type="text" class="w-full p-2 border rounded" required />
        </div>

        <div>
          <label class="block text-sm font-semibold mb-2">Make</label>
          <input v-model="formData.make" type="text" class="w-full p-2 border rounded" required />
        </div>

        <div>
          <label class="block text-sm font-semibold mb-2">Model</label>
          <input v-model="formData.model" type="text" class="w-full p-2 border rounded" required />
        </div>

        <div>
          <label class="block text-sm font-semibold mb-2">Year</label>
          <input v-model="formData.year" type="number" class="w-full p-2 border rounded" required />
        </div>

        <div>
          <label class="block text-sm font-semibold mb-2">VIN</label>
          <input v-model="formData.vin" type="text" class="w-full p-2 border rounded" required />
        </div>

        <div>
          <label class="block text-sm font-semibold mb-2">Request</label>
          <textarea v-model="formData.request" class="w-full p-2 border rounded" required></textarea>
        </div>

        <button type="submit" class="bg-primary text-white w-full py-2 px-4 rounded-lg hover:bg-secondary-light">
          Submit
        </button>
      </form>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Toastification from 'vue-toastification';
import NavBar from '~/components/NavBar.vue';
import { carPartSchema } from '~/server/models/CarPart';

const toast = Toastification.useToast(); 

const formData = ref({
  name: '',
  phone: '',
  make: '',
  model: '',
  year: '',
  vin: '',
  request: '',
});

const submitForm = async () => {
  try {
    // Validate the formData using Zod
    const result = carPartSchema.safeParse(formData.value);
    if (!result.success) {
      result.error.errors.forEach(error => {
        toast.error(error.message);
      });
      return;
    }

    await $fetch('/api/cars/post', {
      method: 'POST',
      body: result.data,
    });

    toast.success('Car part request submitted successfully!');
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
