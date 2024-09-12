<template>
    <div class="product-list">
      <h2>Product List</h2>
      <div v-if="loading">Loading products...</div>
      <div v-else>
        <div v-if="products && products.length" class="product-container">
          <div v-for="product in products" :key="product.id" class="product-card">
            <img :src="product.image" :alt="product.title" class="product-image" />
            <h3>{{ product.title }}</h3>
            <p>{{ product.category }}</p>
            <p>${{ product.price.toFixed(2) }}</p>
            <p class="rating">Rating: {{ product.rating.rate }} ({{ product.rating.count }} reviews)</p>
            <p>{{ product.description }}</p>
          </div>
        </div>
        <div v-else>No products available</div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'ApiProducts',
    data() {
      return {
        products: [],
        loading: true,
        error: null
      };
    },
    methods: {
      async fetchProducts() {
        try {
          const response = await axios.get('https://fakestoreapi.com/products');
          this.products = response.data;
        } catch (error) {
          this.error = 'Error fetching products';
          console.error(error);
        } finally {
          this.loading = false;
        }
      }
    },
    mounted() {
      this.fetchProducts();
    }
  };
  </script>
  
  <style scoped>
  .product-list {
    padding: 20px;
    background-color: #f4f4f9;
  }
  
  .product-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .product-card {
    background-color: white;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    width: 300px;
  }
  
  .product-image {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
  
  h3 {
    margin: 10px 0;
    font-size: 1.25rem;
  }
  
  .rating {
    font-weight: bold;
    color: #555;
  }
  </style>
  