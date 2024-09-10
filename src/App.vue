<template>
  <div id="app">
    <!-- Conditionally render sidebar except for Login and Signup pages -->
    <div v-if="!hideSidebar">
      <Sidebar />
    </div>

    <div :class="{ 'main-content': !hideSidebar }">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/SidebarComponent.vue';

export default {
  components: {
    Sidebar,
  },
  computed: {
    hideSidebar() {
      // Check the current route and hide sidebar on Login or Signup
      const routeName = this.$route.name;
      return routeName === 'Login' || routeName === 'Signup';
    },
  },
};
</script>

<style>
/* Optional: Apply styling to main content when sidebar is present */
.main-content {
  padding: 20px;
}

/* Add any global styles */
</style>
