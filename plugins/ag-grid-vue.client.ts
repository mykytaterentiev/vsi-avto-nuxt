// plugins/ag-grid-vue.client.ts
import { defineNuxtPlugin } from '#app';
import { AgGridVue } from 'ag-grid-vue3';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('AgGridVue', AgGridVue);
});
