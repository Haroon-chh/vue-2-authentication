<template>
    <div class="page-layout">
      <Header title="Our Products" />

      <div class="main-content">
        <Products />
      </div>
    </div>
  </template>
  
  <script>
  import Products from '../components/ApiProducts.vue';
  import Header from '../components/HeaderComponent.vue';



  
  export default {
    components: {
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
  @media (max-width: 815px) {
    .main-content{
    width: 90vw;
  }
  }
  </style>
  