<!-- components/Reviews.vue -->
<template>
    <section class="relative py-8 bg-customColors.background">
      <h2 class="text-center text-3xl font-bold text-customColors.light mb-6">Customer Reviews</h2>
  
      <!-- Add Review Button -->
      <div class="text-center mb-6">
        <button
          @click="toggleModal"
          class="bg-primary text-white py-2 px-6 rounded-lg hover:bg-secondary-light transition duration-300"
        >
         Надіслати відгук
        </button>
      </div>
  
      <!-- Reviews container with horizontal scroll -->
      <div class="flex overflow-x-auto space-x-4 py-4 px-4 scroll-smooth scrollbar-hide">
        <div
          v-for="(review, index) in reviews"
          :key="index"
          class="bg-white shadow-md rounded-lg p-6 min-w-72 flex-shrink-0"
        >
          <h3 class="text-xl font-semibold text-dark mb-2">{{ review.name }}</h3>
          <p class="text-sm text-gray-600">{{ review.message }}</p>
          <div class="mt-4 text-yellow-500">
            <span v-for="star in review.rating" :key="star" class="inline-block">
              ★
            </span>
          </div>
        </div>
      </div>
  
      <!-- Modal for submitting a review -->
      <Modal :isVisible="isModalVisible" @close="toggleModal" />
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import Modal from '~/components/Modal.vue';
  
  const reviews = ref([]);
  const isModalVisible = ref(false);
  
  // Function to toggle the modal visibility
  const toggleModal = () => {
    isModalVisible.value = !isModalVisible.value;
    console.log('Modal visibility toggled:', isModalVisible.value);
  };
  
  // Fetch reviews when the component is mounted
  onMounted(async () => {
    try {
      reviews.value = await $fetch('/api/reviews/get');
      console.log('Reviews fetched:', reviews.value);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  });
  </script>
  