<template>
    <v-card class="mx-auto product-card" outlined>
      <!-- Use the first image from the images array -->
      <v-img :src="product.images[0]" class="product-image" contain></v-img>
      
      <!-- Product title -->
      <v-card-title class="truncate-text">{{ product.title }}</v-card-title>
      
      <!-- Access category name from the category object -->
      <v-card-subtitle class="truncate-text">{{ product.category.name }}</v-card-subtitle>
      
      <v-card-text>
        <div class="product-details">
          <!-- Price with two decimal places -->
          <p class="fw-bold truncate-text">${{ product.price.toFixed(2) }}</p>
          
          <!-- Rating and count (conditionally rendered if rating exists) -->
          <p v-if="product.rating" class="rating truncate-text">
            Rating: {{ product.rating?.rate }} ({{ product.rating?.count }} reviews)
          </p>
          
          <!-- Product description (truncated) -->
          <p class="truncate-text">{{ product.description }}</p>
        </div>
      </v-card-text>
      
      <v-card-actions>
        <!-- Buy Now button triggers the goToProductDetail method -->
        <v-btn class="buy-button" @click="goToProductDetail">Buy Now</v-btn>
      </v-card-actions>
    </v-card>
  </template>
  
  <script>
  import Vue from 'vue';
  import Vuetify from 'vuetify/lib';
  import 'vuetify/dist/vuetify.min.css';
  import { VCard, VImg, VCardTitle, VCardSubtitle, VCardText, VCardActions, VBtn } from 'vuetify/lib';
  
  Vue.use(Vuetify);
  
  export default {
    name: "ProductCard",
    vuetify: new Vuetify(),
    props: {
      product: {
        type: Object,
        required: true,
      },
    },
    components: {
      VCard,
      VImg,
      VCardTitle,
      VCardSubtitle,
      VCardText,
      VCardActions,
      VBtn,
    },
    methods: {
      goToProductDetail() {
        // Use Vue Router to navigate to the product detail page
        this.$router.push({ name: 'ProductDetail', params: { id: this.product.id } });
      },
    },
  };
  </script>
  
  <style scoped>
  .product-card {
    background-color: #ffffff;
    padding: 1rem;
    border-radius: 0.625rem;
    box-shadow: 0 0.125rem 0.3125rem rgba(0, 0, 0, 0.1);
    height: 100%;
    width: 100%;
    max-width: 26.25rem;
    overflow: hidden;
    transition: box-shadow 0.3s ease, height 0.3s ease;
  }
  
  .product-card:hover {
    box-shadow: 0 0.125rem 0.3125rem rgba(0, 0, 0, 0.715);
  }
  
  .product-image {
    width: 100%;
    min-height: 55%;
    max-height: 16.875rem;
    border-radius: 0.625rem;
    object-fit: contain;
    mix-blend-mode: darken;
  }
  
  .truncate-text {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  .product-details {
    margin-bottom: 0.625rem;
  }
  
  .rating {
    font-weight: bold;
    color: #555;
  }
  
  .buy-button {
    background-color: #218837df !important;
    position: absolute;
    bottom: 2%;
    color: white;
  }
  
  .buy-button:hover {
    background-color: #218837 !important;
  }
  </style>
  