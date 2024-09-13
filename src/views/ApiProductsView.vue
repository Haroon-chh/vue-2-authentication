<template>
    <div class="page-layout">
      <Sidebar />
      <Header title="Our Products" />

      <div class="main-content">
        <Products />
      </div>
    </div>
  </template>
  
  <script>
  import Sidebar from '../components/SidebarComponent.vue';
  import Products from '../components/ApiProducts.vue';
  import Header from '../components/HeaderComponent.vue';



  
  export default {
    components: {
      Sidebar,
      Products,
      Header
    }
  };
  </script>
  
  <style scoped>
  .page-layout {
    display: flex;
    margin-top: 1%;
  }
  
  .main-content {
    margin-left: 3vw;
    width: 100vw;
  }
  </style>
  