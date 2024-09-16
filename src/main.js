import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';


// Import Bootstrap and BootstrapVue CSS files
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Import BootstrapVue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);


Vue.use(Vuetify);

export default new Vuetify({});


Vue.config.productionTip = false

new Vue({
  store,
  router,
  vuetify: new Vuetify(), // <-- Include Vuetify here
  render: h => h(App)
}).$mount('#app');
