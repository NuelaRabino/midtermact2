<template>
    <div>
      <h2>Add Product</h2>
      <form @submit.prevent="submitForm">
        <input type="text" v-model="name" placeholder="Product Name" required>
        <input type="text" v-model="description" placeholder="Description" required>
        <input type="number" v-model.number="price" placeholder="Price" required min="0">
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
      submitForm() {

        // Price Validation
        if (parseFloat(this.price) < 0) {
          window.alert("Invalid Input Error: Price cannot be negative.");
          return;
        }

        const newProduct = {
          id: Math.floor(Math.random() * 1000), // Generate a random ID (for demo)
          name: this.name,
          description: this.description,
          price: parseFloat(this.price),
          isEditing: false
        };
  
        // Emit an event to notify the parent component (App.vue) to add the product
        this.$emit('add-product', newProduct);
  
        // Reset the form fields
        this.name = '';
        this.description = '';
        this.price = 0;
      },
    },
  };
  </script>
  