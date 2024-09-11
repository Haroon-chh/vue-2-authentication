<template>
    <div class="table-body">
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
  .table-body{
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Matches form box shadow */
    background-color: #aaceb1;
    border-radius: 10px;
    padding: 20px;



  }
table {
  width: 100%;
  border-collapse: collapse;
  background-color: #f8f9fa; /* Light background for table */
  border-radius: 8px;
  table-layout: fixed; /* Ensures table cells respect the width limits */
  height: 100%;
  
}

thead {
  background-color: #343a40; /* Dark header for contrast */
  color: white;
}

th, td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  white-space: nowrap; /* Keeps text in a single line */
  overflow: hidden;
  text-overflow: ellipsis; /* Adds ellipsis for overflowed text */
  max-width: 200px; /* Limits the width of each cell */
}

th {
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
}

td {
  background-color: white; /* Contrast between header and rows */
}

tr:nth-child(even) {
  background-color: #f2f2f2; /* Light gray for alternating rows */
}

tr:hover {
  background-color: #e9ecef; /* Light hover effect */
}

/* Add scrolling to the tbody */
tbody {
  display: block;
  max-height: 450px; /* Set a max height for the table body */
  overflow-y: auto; /* Make the tbody scrollable */
}

/* Ensure the table headers stay aligned */
thead, tbody tr {
  display: table;
  width: 100%;
  table-layout: fixed; /* Align thead and tbody columns */
  max-height: 350px; /* Set a max height for the table body */

}

/* Optional: Style for when no customers are found */
p {
  margin-top: 20px;
  font-style: italic;
  color: #6c757d;
  text-align: center;
}
</style>
