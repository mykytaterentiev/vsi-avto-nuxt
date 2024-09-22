<!-- components/Modal.vue -->
<template>
    <!-- Use the prop `isVisible` to control the modal display -->
    <div v-if="isVisible" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white rounded-lg p-6 w-full max-w-lg relative">
        <button @click="closeModal" class="absolute top-2 right-2 text-gray-600 hover:text-gray-800">&times;</button>
        <h3 class="text-2xl font-bold mb-4">Leave a Review</h3>
  
        <form @submit.prevent="submitReview">
          <div class="mb-4">
            <label class="block mb-1 text-sm font-semibold">Name</label>
            <input v-model="formData.name" type="text" class="w-full p-2 border border-gray-300 rounded" required />
          </div>
          <div class="mb-4">
            <label class="block mb-1 text-sm font-semibold">Message</label>
            <textarea v-model="formData.message" class="w-full p-2 border border-gray-300 rounded" required></textarea>
          </div>
          <div class="mb-4">
            <label class="block mb-1 text-sm font-semibold">Rating</label>
            <select v-model="formData.rating" class="w-full p-2 border border-gray-300 rounded" required>
              <option disabled value="">Select a rating</option>
              <option v-for="star in 5" :key="star" :value="star">{{ star }} Star</option>
            </select>
          </div>
  
          <button type="submit" class="bg-primary text-white py-2 px-6 rounded-lg hover:bg-secondary-light transition duration-300">
            Submit
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, defineEmits, defineProps } from 'vue';
  import * as pkg from 'vue-toastification'; // Import all from vue-toastification
  const { useToast } = pkg;
  
  // Accept the isVisible prop
  const props = defineProps({
    isVisible: {
      type: Boolean,
      required: true,
    },
  });
  
  const emit = defineEmits(['close']);

  const toast = useToast(); // Call useToast
  
  const formData = ref({
    name: '',
    message: '',
    rating: '',
  });
  
  // Close the modal
  const closeModal = () => {
    emit('close');
  };
  
  // Submit the review
  const submitReview = async () => {
    try {
      await $fetch('/api/reviews/post', {
        method: 'POST',
        body: formData.value,
      });
      toast.success('Review submitted successfully!');
      formData.value = {
        name: '',
        message: '',
        rating: '',
      };
      closeModal();
    } catch (error) {
      toast.error('Error submitting review. Please try again.');
    }
  };
  </script>  