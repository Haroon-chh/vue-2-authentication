<template>
    <div class="body">
      <Login />
    </div>
  </template>
  
  <script>
  import Login from '@/components/LoginComponent.vue';
  
  export default {
    components: {
      Login
    }
  };
  </script>

  <style scoped>
 body {
    background-color: #f8f9fa;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-image: url(../assets/bacground.jpg);
    background-size: contain;
}
</style>
  