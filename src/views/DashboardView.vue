<template>
    <div class="dashboard-layout">
      <Sidebar />
      <div class="main-content">
        <!-- This is where your child routes (like the form) will be rendered -->
        <router-view />
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
  }
  </style>
  