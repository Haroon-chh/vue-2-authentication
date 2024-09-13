<template>
    <div class="product-list">
      <div v-if="loading">Loading products...</div>
  
      <div v-else>
        <div v-if="products.length" class="container">
          <div class="row">
            <div 
              v-for="product in paginatedProducts" 
              :key="product.id" 
              class="col-md-4 col-sm-6 mb-4"
            >
              <!-- Using ProductCard Component -->
              <ProductCard :product="product" />
            </div>
          </div>
  
          <!-- Bootstrap Pagination -->
          <nav aria-label="Page navigation">
            <ul class="pagination justify-content-center">
              <li class="page-item" :class="{ disabled: currentPage === 1 }">
                <button class="page-link" @click="prevPage">Previous</button>
              </li>
              <li
                v-for="page in totalPages"
                :key="page"
                class="page-item"
                :class="{ active: page === currentPage }"
                :style="{ backgroundColor: page === currentPage ? '#218837' : '' }"
              >
                <button class="page-link" @click="changePage(page)">{{ page }}</button>
              </li>
              <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                <button class="page-link" @click="nextPage">Next</button>
              </li>
            </ul>
          </nav>
        </div>
  
        <div v-else>No products available</div>
      </div>
    </div>
  </template>
  
  <script>
import axios from 'axios';
import ProductCard from './ProductCard.vue'; // Import the ProductCard component

export default {
  name: 'ApiProducts',
  components: {
    ProductCard, // Register the ProductCard component here
  },
  data() {
    return {
      products: [],
      loading: true,
      error: null,
      currentPage: 1, // Current active page
      itemsPerPage: 6, // Number of products per page
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.products.length / this.itemsPerPage); // Calculate total pages
    },
    paginatedProducts() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.products.slice(start, end); // Get products for the current page
    },
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
    },
    changePage(page) {
      this.currentPage = page; // Change current page
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
  },
  mounted() {
    this.fetchProducts();
  },
};
</script>

  
  <style scoped>
  .product-list {
    margin-top: 3%;
    padding: 20px;
    background-color: #ffffff;
    width: 90vw;
  }
  
  .product-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .product-card {
    background-color: #279f4148;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    height: 450px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  .product-card:hover {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
    height: 460px;
    width: 420px;
  }
  
  .product-image {
    width: 100%;
    border-radius: 10px;
    aspect-ratio: 3/2;
    object-fit: contain;
    mix-blend-mode:darken;
  }
  .image-bg{
    background-color: #ffffff;

  }
  
  h3 {
    margin: 10px 0;
    font-size: 1.25rem;
  }
  
  .rating {
    font-weight: bold;
    color: #555;
  }
  .custom-active {
  background-color: #218837 !important;
}
.pagination .page-link{
    color: #218837 !important;
}
.page-item.active .page-link {
  background-color: #218837 !important; /* Green */
  border-color: #1b6a2c !important; /* Green border */
  color: white !important; /* White text */
}

  </style>
  