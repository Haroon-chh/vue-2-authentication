import Vue from 'vue';
import Router from 'vue-router';
import LoginComponent from '../components/LoginComponent.vue';
import SignupComponent from '../components/SignupComponent.vue';
import DashboardComponent from '../components/DashboardComponent.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginComponent,
    },
    {
      path: '/signup',
      name: 'Signup',
      component: SignupComponent,
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardComponent,
      meta: { requiresAuth: true }, // Requires authentication
    },
  ],
});

// Navigation guard to protect routes
router.beforeEach((to, from, next) => {
  const authUser = localStorage.getItem('authUser');
  
  // Check if route requires authentication and if the user is authenticated
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!authUser || authUser.length === 0) {
      // Redirect to login page if not authenticated
      next({ name: 'Login' });
    } else {
      // Proceed to the requested page
      next();
    }
  } else {
    // Proceed if no authentication is required
    next();
  }
});

export default router;
