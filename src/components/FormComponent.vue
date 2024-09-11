<template>
    <div class="form-and-table-container">
      <div class="form-container">
        <h2>Add Customer</h2>
        <form @submit.prevent="addCustomer">
          <div>
            <label for="name">Name:</label>
            <input v-model="customer.name" type="text" id="name" required />
          </div>
          <div>
            <label for="address">Address:</label>
            <input v-model="customer.address" type="text" id="address" required />
          </div>
          <div>
            <label for="phone">Phone Number:</label>
            <input v-model="customer.phone" type="tel" id="phone" required />
          </div>
          <div>
            <label for="age">Age:</label>
            <input v-model="customer.age" type="number" id="age" required />
          </div>
          <div>
            <label for="email">Email:</label>
            <input v-model="customer.email" type="email" id="email" required />
          </div>
          <button type="submit">Add Customer</button>
        </form>
      </div>
  
      <!-- Table component rendered on the right -->
      <div class="table-container">
        <router-view />
      </div>
    </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  
  export default {
    data() {
      return {
        customer: {
          name: '',
          address: '',
          phone: '',
          age: '',
          email: ''
        }
      };
    },
    methods: {
      ...mapActions(['addCustomer']),
      addCustomer() {
        this.$store.dispatch('addCustomer', { ...this.customer });
        this.clearForm();
        alert('Customer added successfully!');
      },
      clearForm() {
        this.customer = {
          name: '',
          address: '',
          phone: '',
          age: '',
          email: ''
        };
      }
    }
  };
  </script>
  
  <style scoped>
  .form-and-table-container {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding: 20px;
  }
  .form-container {
    flex: 1;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
  }
  .table-container {
    flex: 1;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 8px;
  }
  form div {
    margin-bottom: 15px;
  }
  label {
    display: block;
    margin-bottom: 5px;
  }
  input {
    width: 100%;
    padding: 8px;
  }
  button {
    padding: 10px 15px;
    background-color: #28a745;
    color: white;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background-color: #218838;
  }
  </style>
  