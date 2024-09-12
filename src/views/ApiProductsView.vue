<template>
    <div class="page-layout">
      <Sidebar />
      <div class="main-content">
        <Products />
      </div>
    </div>
  </template>
  
  <script>
  import Sidebar from '../components/SidebarComponent.vue';
  import Products from '../components/ApiProducts.vue';


  
  export default {
    components: {
      Sidebar,
      Products
    }
  };
  </script>
  
  <style scoped>
  .page-layout {
    display: flex;
    margin-top: 1%;
  }
  
  .main-content {
    flex: 1;
    flex-direction: row;
  }
  </style>
  