import Vue from 'vue';
import Router from 'vue-router';
import LoginComponent from '@/components/loginComponent.vue'; // Use the updated name for your login component

Vue.use(Router);

export default new Router({
  mode: 'history',  // Optional: removes the # from URLs
  routes: [
    {
      path: '/',
      redirect: '/login',  // Redirect base URL to login page
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginComponent,  // Ensure this matches the actual path to your login component
    },
    // Add other routes as needed
  ],
});
