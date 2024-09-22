
<template>
    <div>
      <NavBar />
      
      <main class="p-8 max-w-4xl mx-auto text-center">
        <h1 class="text-4xl font-bold mb-6">Про нас</h1>
        <p class="text-lg mb-4">
          Ми - компанія з міста Запоріжжя, яка спеціалізується на постачанні високоякісних автозапчастин.
          Ми прагнемо забезпечити наших клієнтів найкращими продуктами за доступними цінами. Наша команда
          професіоналів завжди готова допомогти вам у виборі потрібних деталей для вашого автомобіля.
        </p>
        <p class="text-lg mb-4">
          Завдяки багаторічному досвіду, ми заслужили довіру тисяч клієнтів по всій Україні. Наша мета - 
          забезпечити ваш автомобіль всім необхідним для його надійної роботи.
        </p>
      </main>
  
      <Footer />
    </div>
  </template>
  
  <script setup>
  import NavBar from '~/components/NavBar.vue';
  import Footer from '~/components/Footer.vue';
  </script>
  