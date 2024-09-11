<template>
    <div class="form-and-table-container">
      <div class="form-container">
        <h2>Add Customer</h2>
        <form @submit.prevent="addCustomer">
          <div class="form-group">
            <label for="name">Name:</label>
            <input v-model="customer.name" type="text" id="name" required />
          </div>
          <div class="form-group">
            <label for="address">Address:</label>
            <input v-model="customer.address" type="text" id="address" required />
          </div>
          <div class="form-group">
            <label for="phone">Phone Number:</label>
            <input v-model="customer.phone" type="tel" id="phone" required />
          </div>
          <div class="form-group">
            <label for="age">Age:</label>
            <input v-model="customer.age" type="number" id="age" required />
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input v-model="customer.email" type="email" id="email" required />
          </div>
          <button type="submit" class="submit-btn">Add Customer</button>
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
  /* Container Styling */
  .form-and-table-container {
    margin-left: 5%;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding: 20px;
    flex-wrap: wrap; /* Makes it responsive */
  }
  
  /* Form Styling */
  .form-container {
    flex: 1;
    padding: 20px;
    width: 60%;
    background-color: #f1f3f5;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adds a subtle shadow */
  }
  
  h2 {
    margin-bottom: 20px;
    font-size: 24px;
    color: #343a40;
    text-align: center;
  }
  
  /* Form Groups */
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
    color: #495057;
  }
  
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ced4da;
    border-radius: 4px;
    font-size: 16px;
    box-sizing: border-box; /* Ensures padding doesn't break layout */
  }
  
  /* Button Styling */
  .submit-btn {
    margin-left: 20%;
    width: 60%;
    padding: 12px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 15px;
    transition: background-color 0.3s ease;
  }
  
  .submit-btn:hover {
    background-color: #218838;
  }
  
  /* Table Styling */
  .table-container {
    flex: 1;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Matches form box shadow */
    max-width: 100%;

  }
  
  @media (max-width: 768px) {
    /* Stack form and table on smaller screens */
    .form-and-table-container {
      flex-direction: column;
    }
    .form-container{
        width: 100%;
        margin:auto;
    }
  }
  </style>
  