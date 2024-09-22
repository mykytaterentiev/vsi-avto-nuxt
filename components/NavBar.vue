<template>
    <nav class="bg-primary p-4 text-customColors-light relative font-benzin">
      <div class="container mx-auto flex justify-between items-center">
        <!-- Left side: Brand Name -->
        <div class="text-2xl font-bold">VSI AVTO</div>
  
        <!-- Desktop menu -->
        <ul class="hidden md:flex space-x-8">
          <li>
            <NuxtLink to="/" class="hover:text-secondary-light">Головна</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" class="hover:text-secondary-light">Про Нас</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/services" class="hover:text-secondary-light">Сервіси</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact" class="hover:text-secondary-light">Запитати</NuxtLink>
          </li>
        </ul>
  
        <!-- Mobile burger menu icon -->
        <button @click="toggleMenu" class="md:hidden focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
  
      <!-- Mobile Menu (Slide-in from the left) -->
      <div 
        class="fixed top-0 left-0 h-full w-64 bg-customColors-background shadow-lg transform transition-transform duration-300 ease-in-out z-50 rounded-r-lg"
        :class="{'-translate-x-full': !isOpen, 'translate-x-0': isOpen}"
      >
        <ul class="flex flex-col space-y-4 p-6 text-dark font-benzin">
          <li>
            <NuxtLink @click="toggleMenu" to="/" class="block py-2 hover:text-customColors.accent rounded">Головна</NuxtLink>
          </li>
          <li>
            <NuxtLink @click="toggleMenu" to="/about" class="block py-2 hover:text-customColors.accent rounded">Про нас</NuxtLink>
          </li>
          <li>
            <NuxtLink @click="toggleMenu" to="/services" class="block py-2 hover:text-customColors.accent rounded">Послуги</NuxtLink>
          </li>
          <li>
            <NuxtLink @click="toggleMenu" to="/contact" class="block py-2 hover:text-customColors.accent rounded">Запитайте нас</NuxtLink>
          </li>
        </ul>
      </div>
  
      <!-- Dark overlay when menu is open -->
      <div 
        v-if="isOpen"
        class="fixed inset-0 bg-black bg-opacity-50 z-40"
        @click="toggleMenu"
      ></div>
    </nav>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // State to toggle mobile menu visibility
  const isOpen = ref(false);
  
  // Function to toggle mobile menu
  const toggleMenu = () => {
    isOpen.value = !isOpen.value;
  };
  </script>  