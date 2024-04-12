<template>
  <div id="app">
    <ProductList :products="products" />
    <AddProductForm />
  </div>
</template>

<script>
import { ref } from 'vue';
import ProductList from './components/ProductList.vue';
import AddProductForm from './components/AddProductForm.vue';
// eslint-disable-next-line no-unused-vars
import store from './store/store.js'; // Import your Vuex store

export default {
  name: 'App',
  components: {
    ProductList,
    AddProductForm
  },
  setup() {
    const products = ref([
      // Initial dummy products, you can fetch actual products from Vuex store
      { id: 1, name: 'Product 1', description: 'Description 1', price: 10 },
      { id: 2, name: 'Product 2', description: 'Description 2', price: 20 },
      { id: 3, name: 'Product 3', description: 'Description 3', price: 30 },
    ]);

    return {
      products
    };
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
