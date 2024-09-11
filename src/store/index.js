import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    customers: JSON.parse(localStorage.getItem('customers')) || [],
  },
  mutations: {
    ADD_CUSTOMER(state, customer) {
      state.customers.push(customer);
      localStorage.setItem('customers', JSON.stringify(state.customers));
    }
  },
  actions: {
    addCustomer({ commit }, customer) {
      commit('ADD_CUSTOMER', customer);
    }
  },
  getters: {
    allCustomers: (state) => state.customers
  }
});
