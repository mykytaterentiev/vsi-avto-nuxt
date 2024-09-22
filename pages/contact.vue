<!-- pages/contact.vue -->
<template>
  <div>
    <NavBar />
    <main class="p-8 max-w-lg mx-auto">
      <h1 class="text-3xl font-bold text-center mb-6">Contact Us</h1>

      <form @submit.prevent="submitForm" class="bg-white shadow-md rounded-lg p-6 space-y-4">
        <div>
          <label class="block text-sm font-semibold mb-2">Name</label>
          <input v-model="formData.name" type="text" class="w-full p-2 border rounded" />
        </div>

        <div>
          <label class="block text-sm font-semibold mb-2">Email</label>
          <input v-model="formData.email" type="email" class="w-full p-2 border rounded" />
        </div>

        <div>
          <label class="block text-sm font-semibold mb-2">Message</label>
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
import { contactSchema } from '~/server/models/contactSchema'; // Import the Zod validation schema

const toast = useToast(); // Call useToast

const formData = ref({
  name: '',
  email: '',
  message: '',
});

const submitForm = async () => {
  try {
    // Validate the form data using Zod schema
    const result = contactSchema.safeParse(formData.value);

    // Check if validation failed
    if (!result.success) {
      // Show validation errors as toast messages
      result.error.errors.forEach(error => {
        toast.error(error.message);
      });
      return; // Stop form submission if validation fails
    }

    // If validation passes, proceed with the API request
    await $fetch('/api/contact/post', {
      method: 'POST',
      body: result.data, // Use the validated data from Zod
    });

    // Show success toast message
    toast.success('Contact request submitted successfully!');

    // Reset form fields after successful submission
    formData.value = {
      name: '',
      email: '',
      message: '',
    };
  } catch (error) {
    console.error('Error submitting form:', error);
    // Show error toast if the form submission fails
    toast.error('Error submitting contact request. Please try again.');
  }
};
</script>

<style scoped>
/* Add any additional styling if necessary */
</style>
