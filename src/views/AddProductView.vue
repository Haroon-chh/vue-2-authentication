<template>
    <div class="page-layout">
      <Sidebar />
      <Header title="Add New Products" />

      <div class="main-content">
        <AddProducts />
      </div>
    </div>
  </template>
  
  <script>
  import Sidebar from '../components/SidebarComponent.vue';
  import AddProducts from '../components/AddProduct.vue';
  import Header from '../components/HeaderComponent.vue';



  
  export default {
    components: {
      Sidebar,
      AddProducts,
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
  