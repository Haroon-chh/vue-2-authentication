<template>
    <v-card class="mx-auto product-card" outlined>
      <v-img :src="product.image" class="product-image" contain></v-img>
      <v-card-title class="truncate-text">{{ product.title }}</v-card-title>
      <v-card-subtitle class="truncate-text">{{ product.category }}</v-card-subtitle>
      <v-card-text>
        <div class="product-details">
          <p class="fw-bold truncate-text">${{ product.price.toFixed(2) }}</p>
          <p class="rating truncate-text">Rating: {{ product.rating?.rate }} ({{ product.rating?.count }} reviews)</p>
          <p class="truncate-text">{{ product.description }}</p>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn class="buy-button" text>Buy Now</v-btn>
      </v-card-actions>
    </v-card>
  </template>
  
  <script>
  import Vue from 'vue'
  import Vuetify from 'vuetify/lib'
  import 'vuetify/dist/vuetify.min.css'
  
  // Import specific Vuetify components
  import { VCard, VImg, VCardTitle, VCardSubtitle, VCardText, VCardActions, VBtn } from 'vuetify/lib'
  
  Vue.use(Vuetify)
  
  export default {
    name: "ProductCard",
    vuetify: new Vuetify(), // Configure Vuetify for this component
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
      VBtn
    }
  }
  </script>
  
  <style scoped>
  .product-card {
    background-color: #ffffff; /* Custom background */
    padding: 1rem;
    border-radius: 0.625rem; /* 10px */
    box-shadow: 0 0.125rem 0.3125rem rgba(0, 0, 0, 0.1); /* 0 2px 5px */
    height: 100%;
    width: 100%;
    max-width: 26.25rem; /* 420px */
    overflow: hidden;
    transition: box-shadow 0.3s ease, height 0.3s ease;
  }
  
  .product-card:hover {
    box-shadow: 0 0.125rem 0.3125rem rgba(0, 0, 0, 0.715); /* 0 2px 5px */
  }
  
  .product-image {
    width: 100%;
    min-height: 55%;
    max-height: 16.875rem; /* 270px */
    border-radius: 0.625rem; /* 10px */
    object-fit: contain;
    mix-blend-mode: darken;
  }
  
  .truncate-text {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  .product-details {
    margin-bottom: 0.625rem; /* 10px */
  }
  
  .rating {
    font-weight: bold;
    color: #555;
  }
  .buy-button{
    background-color: #218837b4;
    position: absolute;
    bottom: 2%;

  }
  .buy-button:hover{
    background-color: #218837df;
    

  }
  </style>
  