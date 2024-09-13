<template>
    <div class="add-product-form">
      <h2>Add Product</h2>
      <form @submit.prevent="submitProduct">
        <!-- Form fields for product input -->
        <div class="form-group">
          <label for="title">Title</label>
          <input id="title" v-model="product.title" class="form-control" placeholder="Title" required />
        </div>
        
        <div class="form-group">
          <label for="price">Price</label>
          <input id="price" v-model="product.price" class="form-control" placeholder="Price" type="number" required />
        </div>
        
        <div class="form-group">
          <label for="description">Description</label>
          <input id="description" v-model="product.description" class="form-control" placeholder="Description" required />
        </div>
        
        <div class="form-group">
          <label for="image">Image URL</label>
          <input id="image" v-model="product.image" class="form-control" placeholder="Image URL" required />
        </div>
        
        <div class="form-group">
          <label for="category">Category</label>
          <input id="category" v-model="product.category" class="form-control" placeholder="Category" required />
        </div>
  
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
  
      <p v-if="successMessage" class="success">{{ successMessage }}</p>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        product: {
          title: '',
          price: '',
          description: '',
          image: '',
          category: ''
        },
        successMessage: '',
        errorMessage: ''
      };
    },
    methods: {
      async submitProduct() {
        try {
          const response = await fetch('https://fakestoreapi.com/products', {
            method: 'POST',
            body: JSON.stringify({
              title: this.product.title,
              price: parseFloat(this.product.price),
              description: this.product.description,
              image: this.product.image,
              category: this.product.category
            }),
            headers: {
              'Content-Type': 'application/json'
            }
          });
  
          const json = await response.json();
          console.log('Product Posted:', json);
          this.successMessage = 'Product successfully posted!';
          this.clearForm();
        } catch (error) {
          console.error('Error:', error);
          this.errorMessage = 'Error posting product. Please try again.';
        }
      },
      clearForm() {
        this.product = {
          title: '',
          price: '',
          description: '',
          image: '',
          category: ''
        };
      }
    }
  };
  </script>
  
  <style scoped>
  .add-product-form {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-group label {
    font-weight: bold;
  }
  
  .form-control {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .btn {
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #218838;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .btn:hover {
    background-color: #19672d;
  }
  
  .error {
    color: red;
    margin-top: 10px;
  }
  
  .success {
    color: green;
    margin-top: 10px;
  }
  </style>
  