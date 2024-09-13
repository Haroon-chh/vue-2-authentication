<template>
    <v-card class="mx-auto" max-width="344" outlined>
      <v-img :src="product.image" height="200px"></v-img>
      <v-card-title>{{ product.title }}</v-card-title>
      <v-card-subtitle>{{ product.category }}</v-card-subtitle>
      <v-card-text>
        <div class="product-details">
          <p class="fw-bold">${{ product.price.toFixed(2) }}</p>
          <p class="rating">Rating: {{ product.rating?.rate }} ({{ product.rating?.count }} reviews)</p>
          <p>{{ product.description }}</p>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn color="green darken-1" text>Buy Now</v-btn>
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
  .product-details {
    margin-bottom: 10px;
  }
  
  .rating {
    font-weight: bold;
    color: #555;
  }
  </style>
  