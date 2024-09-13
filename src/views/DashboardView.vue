<template>
    <div class="dashboard-layout">
      <Sidebar />
      <div class="main-content">
        <Header title="Welcome to Dashboard" />

        <router-view /> <!-- Main content will display form and table here -->
      </div>
    </div>
  </template>
  
  <script>
  import Sidebar from '../components/SidebarComponent.vue';
  import Header from '../components/HeaderComponent.vue';

  
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
    margin-top: 1%;
  }
  
  .main-content {
    flex: 1;
    flex-direction: row;
  }
  </style>
  