<template>
  <div>
    <h2>Product List</h2>
    <div v-for="(product, index) in products" :key="index">
      <div v-if="!product.isEditing">
        <ProductItem :product="product" @edit="toggleEditing(product)" @delete="deleteProduct(product)" />
      </div>
      <div v-else>
        <form @submit.prevent="saveEditedProduct(product)">
          <input type="text" v-model="product.name"> <br>
          <input type="text" v-model="product.description"> <br>
          <input type="number" v-model.number="product.price"> <br>
          <button type="submit">Save</button>
          <button type="button" @click="cancelEditing(product)">Cancel</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue';

export default {
  name: 'ProductList',
  props: ['products'],
  components: {
    ProductItem,
  },
  methods: {
    toggleEditing(product) {
      product.isEditing = true;
    },
    saveEditedProduct(updatedProduct) {
      // Emit an event to notify the parent component (App.vue) of the edited products
      updatedProduct.isEditing = false;
      this.$emit('handleUpdateProducts', updatedProduct);
    },
    deleteProduct(product) {
      console.log('Deleting product:', product);
    },
    cancelEditing(product) {
      product.isEditing = false;
    }
  },
};
</script>

<style>
/* Add your component's styles here */
</style>