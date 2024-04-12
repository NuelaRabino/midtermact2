<template>
    <div>
      <h2>Add Product</h2>
      <form @submit.prevent="addProduct">
        <input type="text" v-model="name" placeholder="Product Name" required>
        <input type="text" v-model="description" placeholder="Description" required>
        <input type="number" v-model.number="price" placeholder="Price" required>
        <button type="submit">Add Product</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AddProductForm',
    data() {
      return {
        name: '',
        description: '',
        price: 0,
      };
    },
    methods: {
      addProduct() {
        // Implement add product functionality
      },
    },
  };
  </script>
  