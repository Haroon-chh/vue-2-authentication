import Vue from 'vue';
import Router from 'vue-router';
import LoginComponent from '../components/LoginComponent.vue'; // Login component
import SignupComponent from '../components/SignupComponent.vue'; // Signup component (add your own)
// import DashboardComponent from '../components/DashboardComponent.vue'; // Dashboard component (add your own)
// import NotFoundComponent from '../components/NotFoundComponent.vue'; // 404 Not Found component

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
    {
      path: '/signup',
      name: 'Signup',
      component: SignupComponent,  // Ensure this matches the actual path to your signup component
    },
    // {
    //   path: '/dashboard',
    //   name: 'Dashboard',
    //   component: DashboardComponent,  // Ensure this matches the actual path to your dashboard component
    // },
    // {
    //   path: '*', // Fallback route for 404
    //   name: 'NotFound',
    //   component: NotFoundComponent,  // A custom 404 component
    // },
  ],
});
