<template>
    <div class="initials-avatar rounded-5 text-black bg-white fs-xs m-auto">
      <span>{{ initials }}</span>
    </div>
  </template>
  
  <script>
  export default {
    name: 'InitialsAvatar',
    data() {
      return {
        initials: this.getInitials()
      };
    },
    methods: {
      getInitials() {
        const authUser = JSON.parse(localStorage.getItem('authUser'));
  
        if (authUser && authUser.firstName && authUser.lastName) {
          const firstInitial = authUser.firstName.charAt(0).toUpperCase();
          const lastInitial = authUser.lastName.charAt(0).toUpperCase();
          return `${firstInitial}${lastInitial}`;
        }
  
        // Fallback initials if no user data is available
        return 'NN';
      }
    }
  };
  </script>
  
  <style scoped>
  .initials-avatar {
    display: flex;
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color:black;
  }
  </style>
  