<template>
    <div>
      <h1>Welcome to the Dashboard</h1>
      <!-- Add any additional components or dashboard content here -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'DashboardComponent',
    mounted() {
      // Check if the user is authenticated (authUser exists in local storage)
      const authUser = localStorage.getItem('authUser');
      
      // If the authUser array is empty, redirect to login page
      if (!authUser || authUser.length === 0) {
        this.$router.push('/login');
      }
    },
  };
  </script>
  
  <style scoped>
  /* Add any styles specific to the dashboard here */
  </style>
  