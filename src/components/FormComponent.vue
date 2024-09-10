<template>
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
  </template>
  
  <script>
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
      addCustomer() {
        // Get the current list of customers from localStorage
        let customers = JSON.parse(localStorage.getItem('customers')) || [];
        // Add the new customer to the array
        customers.push(this.customer);
        // Update localStorage with the new customer list
        localStorage.setItem('customers', JSON.stringify(customers));
        // Emit the customer-added event and pass the updated customers array
        this.$emit('customer-added', customers);
        // Clear the form after adding the customer
        this.clearForm();
        // Notify the user that the customer was added successfully
        alert('Customer added successfully!');
      },
      clearForm() {
        // Reset the form fields
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
  .form-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
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
    box-sizing: border-box;
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
  