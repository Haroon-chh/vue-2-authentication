import Vue from 'vue';
import Router from 'vue-router';
import LoginView from '../views/loginView.vue'; 
import SignupView from '../views/SignupView.vue';
import DashboardView from '../views/DashboardView.vue';

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
      component: LoginView,
      meta: { title: 'Login' },
    },
    {
      path: '/signup',
      name: 'Signup',
      component: SignupView,
      meta: { title: 'Signup' },  // Added title meta
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardView,
      meta: { requiresAuth: true, title: 'Dashboard' },  // Added title meta
    },
    {
      path: '*',
      redirect: '/login',
    },
  ],
});

// Navigation guard to protect routes and set page title
router.beforeEach((to, from, next) => {
  const authUser = JSON.parse(localStorage.getItem('authUser'));

  // Set document title dynamically based on meta.title or fallback to default
  document.title = to.meta.title || 'Default Title';

  // Check if route requires authentication and if the user is authenticated
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!authUser || authUser === null) {
      next({ name: 'Login' });  // Redirect to login if not authenticated
    } else {
      next();  // Proceed to the requested page
    }
  } else {
    next();  // Proceed if no authentication is required
  }
});

export default router;
