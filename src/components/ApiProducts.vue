<template>
    <div class="product-list">
      <!-- Dropdown to filter by category -->
      <div class="filter-container text-right mb-4">
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="categoryDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {{ selectedCategory || 'Select Category' }}
          </button>
          <ul class="dropdown-menu" aria-labelledby="categoryDropdown">
            <li>
              <a class="dropdown-item" href="#" @click="filterByCategory(null)">
                All Products
              </a>
            </li>
            <li
              v-for="category in categories"
              :key="category.id"
            >
              <a
                class="dropdown-item"
                href="#"
                @click="filterByCategory(category)"
              >
                {{ category.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>
  
      <!-- Skeleton loader will show when loading is true -->
      <div v-if="loading" class="skeleton-wrapper">
        <v-skeleton-loader
          class="mx-auto"
          elevation="12"
          max-width="400"
          type="table-heading, list-item-two-line, image, table-tfoot"
        ></v-skeleton-loader>
        <v-skeleton-loader
          class="mx-auto"
          elevation="12"
          max-width="400"
          type="table-heading, list-item-two-line, image, table-tfoot"
        ></v-skeleton-loader>
        <v-skeleton-loader
          class="mx-auto"
          elevation="12"
          max-width="400"
          type="table-heading, list-item-two-line, image, table-tfoot"
        ></v-skeleton-loader>
      </div>
  
      <!-- Products will show once loading is false -->
      <div v-else>
        <div v-if="filteredProducts.length" class="container">
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
                <button class="page-link" @click="changePage(page)">
                  {{ page }}
                </button>
              </li>
              <li
                class="page-item"
                :class="{ disabled: currentPage === totalPages }"
              >
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
      products: [], // All products from the API
      filteredProducts: [], // Products filtered by category
      categories: [
        { id: 1, name: 'Clothes' },
        { id: 2, name: 'Electronics' },
        { id: 3, name: 'Furniture' },
        { id: 4, name: 'Shoes' },
        { id: 5, name: 'Miscellaneous' },
      ],
      selectedCategory: null, // Initially no category selected
      loading: true,
      error: null,
      currentPage: 1, // Current active page
      itemsPerPage: 6, // Number of products per page
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.filteredProducts.length / this.itemsPerPage); // Calculate total pages
    },
    paginatedProducts() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredProducts.slice(start, end); // Get products for the current page
    },
  },
  methods: {
    async fetchProducts() {
      try {
        // Simulate loading delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        // Fetch products from the updated API
        const response = await axios.get('https://api.escuelajs.co/api/v1/products');
        this.products = response.data;
        this.filteredProducts = this.products; // Initially show all products
      } catch (error) {
        this.error = 'Error fetching products';
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
    filterByCategory(category) {
      this.selectedCategory = category ? category.name : null;
      if (category) {
        // Filter products by selected category name
        this.filteredProducts = this.products.filter((product) =>
          product.category.name === category.name
        );
      } else {
        // Show all products when no category is selected
        this.filteredProducts = this.products;
      }
      this.currentPage = 1; // Reset to first page after filtering
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
  .filter-container {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
  }
  .category-dropdown {
    width: 250px;
  }
  @media (max-width: 815px) {
    .product-list {
      width: 100%;
    }
    .skeleton-wrapper {
      flex-direction: column;
    }
  }
  
  .skeleton-wrapper {
    display: flex;
    justify-content: space-around;
    gap: 20px;
  }
  
  .v-skeleton-loader {
    width: 100%;
    margin-bottom: 20px;
  }
  
  .pagination .page-link {
    color: #218837 !important;
  }
  
  .page-item.active .page-link {
    background-color: #218837 !important;
    border-color: #1b6a2c !important;
    color: white !important;
  }
  </style>
  