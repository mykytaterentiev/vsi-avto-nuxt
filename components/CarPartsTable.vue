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
  
  // Define columns
  const columnDefs = ref([
    { field: 'name', headerName: 'Name', sortable: true, filter: 'agTextColumnFilter' },
    { field: 'make', headerName: 'Make', sortable: true, filter: 'agTextColumnFilter' },
    { field: 'model', headerName: 'Model', sortable: true, filter: 'agTextColumnFilter' },
    { field: 'year', headerName: 'Year', sortable: true, filter: 'agNumberColumnFilter' },
    { field: 'vin', headerName: 'VIN', sortable: true, filter: 'agTextColumnFilter' },
    { field: 'request', headerName: 'Request', sortable: true, filter: 'agTextColumnFilter' },
    { field: 'Phone', headerName: 'Phone', sortable: true, filter: 'agTextColumnFilter' },
    { field: 'createdAt', headerName: 'Created At', sortable: true, sort: 'desc' },
  ]);
  
  const defaultColDef = ref({
    flex: 1,
    minWidth: 150,
    resizable: true,
    filter: true,
  });
  
  // Define the schema using Zod
  const CarPartSchema = z.object({
    name: z.string(),
    make: z.string(),
    model: z.string(),
    year: z.number(),
    vin: z.string(),
    request: z.string(),
    createdAt: z.date().default(() => new Date())
  });
  
  type CarPart = z.infer<typeof CarPartSchema>;
  
  const rowData = ref<CarPart[]>([]);
  
  const fetchCarParts = async () => {
    try {
      const response = await $fetch('/api/cars/get');
      
      const carParts = response;
      rowData.value = carParts ? carParts.map((part: any) => ({
        name: part.name,
        make: part.make,
        model: part.model,
        year: part.year,
        vin: part.vin,
        request: part.request,
        phone: part.phone,
        createdAt: new Date(part.createdAt)
      })) : [];
      
    } catch (error) {
      console.error('Error fetching car parts:', error);
    }
    console.log(rowData.value);
  };
  
  // Grid ready event to fetch data
  function onGridReady({ api }: { api: any }) {
    fetchCarParts();
  }
  
  onMounted(() => {
    fetchCarParts();
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
  