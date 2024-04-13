<template>
  <div class="add-product-container">
    <h2>Add Product</h2>
    <form @submit.prevent="submitForm" class="add-product-form">
      <div class="form-group">
        <label for="name">Product Name</label>
        <input type="text" id="name" v-model="name" placeholder="Product Name" required>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input type="text" id="description" v-model="description" placeholder="Description" required>
      </div>
      <div class="form-group">
        <label for="price">Price</label>
        <input type="number" id="price" v-model.number="price" placeholder="Price" required min="0">
      </div>
      <button type="submit" class="add-product-button">Add Product</button>
    </form>
    <button class="product-list-button" @click="goToProductList">Product List</button>
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

      // Emit an event to notify the parent component (ProductList) to add the product
      this.$emit('add-product', newProduct);

      // Reset the form fields
      this.name = '';
      this.description = '';
      this.price = 0;
    },
    goToProductList() {
      this.$router.push('/product-list'); // Assuming you're using Vue Router
    }
  },
};
</script>

<style scoped>
.add-product-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.add-product-form {
  display: grid;
  gap: 10px;
}

.form-group {
  display: grid;
  gap: 5px;
}

label {
  font-weight: bold;
}

input[type="text"],
input[type="number"] {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

.add-product-button,
.product-list-button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.add-product-button {
  background-color: #64a100;
  color: white;
}

.product-list-button {
  margin-top: 10px;
  background-color: #2377c0;
  color: white;
}

</style>