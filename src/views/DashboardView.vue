<template>
    <div>
      <Sidebar />
      <Dashboard />

    </div>
  </template>
  
  <script>
  import Sidebar from '@/components/SidebarComponent.vue';
  import Dashboard from '@/components/DashboardComponent.vue';

  
  export default {
    components: {
      Sidebar,
      Dashboard
    }
  };
  </script>

  <style scoped>
 
</style>
  