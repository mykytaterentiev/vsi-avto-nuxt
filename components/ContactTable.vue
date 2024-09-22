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
    { field: 'email', headerName: 'Email', sortable: true, filter: 'agTextColumnFilter' },
    { field: 'message', headerName: 'Message', sortable: true, filter: 'agTextColumnFilter' },
    { field: 'createdAt', headerName: 'Created At', sortable: true, sort: 'desc' },
  ]);
  
  const defaultColDef = ref({
    flex: 1,
    minWidth: 150,
    resizable: true,
    filter: true,
  });
  
  // Schema using Zod
  const ContactSchema = z.object({
    name: z.string(),
    email: z.string(),
    message: z.string(),
    createdAt: z.date().default(() => new Date())
  });
  
  type Contact = z.infer<typeof ContactSchema>;
  
  const rowData = ref<Contact[]>([]);
  
  const fetchContacts = async () => {
    try {
      const response = await $fetch('/api/contact/get');
      rowData.value = response.map((contact: any) => ({
        name: contact.name,
        email: contact.email,
        message: contact.message,
        createdAt: new Date(contact.createdAt),
      }));
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };
  
  function onGridReady({ api }: { api: any }) {
    fetchContacts();
  }
  
  onMounted(() => {
    fetchContacts();
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
  