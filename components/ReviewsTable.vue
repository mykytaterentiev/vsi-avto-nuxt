<template>
    <div class="overflow-x-auto h-full p-4">
      <ag-grid-vue
        class="ag-theme-alpine"
        style="width: 100%; height: 600px;"
        @grid-ready="onGridReady"
        :columnDefs="columnDefs"
        :defaultColDef="defaultColDef"
        :rowData="rowData"
        :pagination="true"
        :paginationPageSize="10"
      />
    </div>
  </template>
  
  <script setup lang="ts">
  import 'ag-grid-community/styles/ag-grid.css';
  import 'ag-grid-community/styles/ag-theme-alpine.css';
  import { ref, onMounted } from 'vue';
  import { AgGridVue } from 'ag-grid-vue3';
  import { z } from 'zod';
  
  const columnDefs = ref([
    { field: 'name', headerName: 'Name', sortable: true, filter: 'agTextColumnFilter' },
    { field: 'message', headerName: 'Message', sortable: true, filter: 'agTextColumnFilter' },
  ]);
  
  const defaultColDef = ref({
    flex: 1,
    minWidth: 150,
    resizable: true,
    filter: true,
  });
  
  const ReviewSchema = z.object({
    name: z.string(),
    message: z.string(),
  });
  
  type Review = z.infer<typeof ReviewSchema>;
  
  const rowData = ref<Review[]>([]);
  
  const fetchReviews = async () => {
    try {
      const response = await $fetch('/api/reviews/get');
      if (response) {
        rowData.value = response.map((review: any) => ({
          name: review.name,
          message: review.message,
        }));
      } else {
        rowData.value = [];
      }
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };
  
  function onGridReady({ api }: { api: any }) {
    fetchReviews();
  }
  
  onMounted(() => {
    fetchReviews();
  });
  </script>
  
  <style scoped>
  .ag-theme-alpine {
    --ag-wrapper-border-radius: 8px;
    --ag-header-background-color: #f4f4f4;
    --ag-odd-row-background-color: #fff;
    --ag-alternate-row-background-color: #f9f9f9;
    --ag-header-foreground-color: #333;
    --ag-row-foreground-color: #333;
    --ag-cell-horizontal-border: 1px solid #ddd;
    --ag-header-cell-horizontal-border: 1px solid #ddd;
  }
  
  .ag-theme-alpine .ag-row {
    font-size: 14px;
  }
  </style>
  