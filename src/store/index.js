import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // Load customers from localStorage into the state
    customers: JSON.parse(localStorage.getItem('customers')) || [],
  },
  mutations: {
    // Mutation to add a customer and update localStorage
    ADD_CUSTOMER(state, customer) {
      state.customers.push(customer);
      localStorage.setItem('customers', JSON.stringify(state.customers));
    },
    // Mutation to load customers from localStorage (for manual refreshes)
    LOAD_CUSTOMERS(state) {
      state.customers = JSON.parse(localStorage.getItem('customers')) || [];
    }
  },
  actions: {
    // Action to add a customer
    addCustomer({ commit }, customer) {
      commit('ADD_CUSTOMER', customer);
    },
    // Action to refresh customers from localStorage if needed
    loadCustomers({ commit }) {
      commit('LOAD_CUSTOMERS');
    }
  },
  getters: {
    // Getter to retrieve all customers from state
    allCustomers: (state) => state.customers
  }
});
