<!-- its component + view  -->
<template>
    <div class="product-detail container">
      <!-- Product Image Carousel using Bootstrap -->
      <div id="productCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div
            v-for="(image, index) in productImages"
            :key="index"
            :class="['carousel-item', { active: index === 0 }]"
          >
            <img :src="image" class="d-block w-100 product-image" alt="Product Image" />
          </div>
        </div>
        <!-- Carousel controls -->
        <button class="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon rounded-5 bg-dark" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon rounded-5 bg-dark" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
  
      <!-- Product Info -->
      <div class="product-info mt-4">
        <h1>{{ product.title }}</h1>
        <p class="price"><strong>Price:</strong> ${{ product.price }}</p>
        <p class="type"><strong>Type:</strong> {{ product.category.name }}</p>
        <p class="description"><strong>Description:</strong> {{ product.description }}</p>
      </div>
  
      <!-- Add to Cart Button -->
      <div class="mt-4">
        <button class="btn btn-success" @click="addToCart">
          <span class="material-icons">add_shopping_cart</span> Add to Cart
        </button>
      </div>
  
      <!-- Reviews Section with Star Ratings -->
      <div class="reviews mt-4">
        <h2>Reviews</h2>
        <p v-if="!product.rating">No reviews yet</p>
        <div v-else>
          <p><strong>Rating:</strong> {{ product.rating.rate }} / 5 ({{ product.rating.count }} reviews)</p>
          <!-- Star Ratings -->
          <div class="star-rating">
            <span v-for="star in starsArray" :key="star.id" v-html="star.icon" class="star"></span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';

  export default {
    name: 'ProductDetail',
    data() {
      return {
        product: {},
        productImages: [],
        starsArray: [],
      };
    },
    async created() {
      const productId = this.$route.params.id; // Get product ID from route
      try {
        const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${productId}`);
        this.product = response.data;
  
        // Set up product images using the JSON structure
        this.productImages = this.product.images;
  
        // Set stars based on rating
        if (this.product.rating) {
          this.generateStarRating(this.product.rating.rate);
        }
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    },
    methods: {
      addToCart() {
        alert(`${this.product.title} added to cart`);
      },
      // Method to generate star ratings
      generateStarRating(rating) {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - Math.ceil(rating);
  
        this.starsArray = [];
  
        // Full Stars
        for (let i = 0; i < fullStars; i++) {
          this.starsArray.push({ id: i, icon: '<i class="fas fa-star"></i>' });
        }
  
        // Half Star
        if (halfStar) {
          this.starsArray.push({ id: 'half', icon: '<i class="fas fa-star-half-alt"></i>' });
        }
  
        // Empty Stars
        for (let i = 0; i < emptyStars; i++) {
          this.starsArray.push({ id: fullStars + i + 1, icon: '<i class="far fa-star"></i>' });
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .product-detail {
    margin-top: 2rem;
  }
  
  .product-image {
    max-height: 400px;
    object-fit: contain;
  }
  
  .price {
    font-size: 1.5rem;
    color: #218837;
  }
  
  .type {
    font-size: 1.2rem;
    margin-top: 0.5rem;
  }
  
  .description {
    margin-top: 1rem;
    font-size: 1rem;
  }
  
  .reviews {
    margin-top: 2rem;
    font-size: 1.1rem;
  }
  
  /* Star Rating Styling */
  .star-rating .star {
    font-size: 1.5rem;
    color: #FFD700;
    margin-right: 5px;
  }
  
  button .material-icons {
    vertical-align: middle;
    margin-right: 0.5rem;
  }
  </style>
  