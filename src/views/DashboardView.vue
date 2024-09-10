<template>
    <div class="dashboard-layout">
      <Sidebar />
      <div class="main-content">
        <router-view /> <!-- Main content will display form and table here -->
      </div>
    </div>
  </template>
  
  <script>
  import Sidebar from '../components/SidebarComponent.vue';
  
  export default {
    components: {
      Sidebar,
    }
  };
  </script>
  
  <style scoped>
  .dashboard-layout {
    display: flex;
  }
  
  .main-content {
    flex: 1;
    flex-direction: row;
  }
  </style>
  