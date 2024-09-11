<template>
    <div class="dashboard-layout">
      <Sidebar />
      <div class="main-content">
        <Header />

        <router-view /> <!-- Main content will display form and table here -->
      </div>
    </div>
  </template>
  
  <script>
  import Sidebar from '../components/SidebarComponent.vue';
  import Header from '../components/DashboardComponent.vue';

  
  export default {
    components: {
      Sidebar,
      Header,
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
  