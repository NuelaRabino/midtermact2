<template>
  <div class="product-item">
    <div class="product-name">{{ product.name }}</div>
    <div class="product-description">{{ product.description }}</div>
    <div class="product-price">{{ product.price }}</div>
    <button class="edit-button" @click="edit">Edit</button>
    <button class="delete-button" @click="remove">Delete</button>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  props: ['product'],
  methods: {
    edit() {
      this.$emit('edit', this.product);
    },
    remove() {
      this.$emit('delete', this.product);
    },
  },
};
</script>

<style>
.product-item {
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.product-name {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.product-description {
  margin-bottom: 10px;
}

.product-price {
  font-size: 1.1rem;
  color: #007bff;
  margin-bottom: 10px;
}

.edit-button,
.delete-button {
  padding: 8px 16px;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.edit-button {
  background-color: #28a745;
  color: white;
}

.delete-button {
  background-color: #dc3545;
  color: white;
  margin-left: 8px; /* Add margin here */
}

.edit-button:hover,
.delete-button:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
