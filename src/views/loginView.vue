<template>
    <div class="boddy">
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
 .boddy {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: auto;
    background-image: url(../assets/bacground.jpg);
    background-size: contain;
}
</style>
  