<template>
    <div>
      <h2>Customer List</h2>
      <table v-if="customers && customers.length">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(customer, index) in customers" :key="index">
            <td>{{ customer.name }}</td>
            <td>{{ customer.address }}</td>
            <td>{{ customer.phone }}</td>
            <td>{{ customer.age }}</td>
            <td>{{ customer.email }}</td>
          </tr>
        </tbody>
      </table>
      <p v-else>No customers found.</p>
    </div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex';
  
  export default {
    name: 'CustomerTable',
    computed: {
      ...mapGetters(['allCustomers']),
      customers() {
        return this.allCustomers || [];
      }
    },
    mounted() {
      // Optionally, check if customers were already loaded from Vuex
    }
  };
  </script>
  
  <style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    padding: 8px;
    border: 1px solid #ddd;
  }
  </style>
  