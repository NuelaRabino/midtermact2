<template>
  <div id="app">
    <div class="container">
      <h1 class="title">Product Management</h1>
      <AddProductForm @add-product="handleAddProduct" />
      <ProductList :products="products" @handleUpdateProducts="handleUpdateProduct" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import ProductList from './components/ProductList.vue';
import AddProductForm from './components/AddProductForm.vue';

export default {
  name: 'App',
  components: {
    ProductList,
    AddProductForm
  },
  setup() {
    const products = ref([
      // Initial dummy products, you can fetch actual products from Vuex store
      { id: 1, name: 'Product 1', description: 'Description 1', price: 10, isEditing: false },
      { id: 2, name: 'Product 2', description: 'Description 2', price: 20, isEditing: false },
      { id: 3, name: 'Product 3', description: 'Description 3', price: 30, isEditing: false },
    ]);

    const handleAddProduct = (newProduct) => {
      // Add the new product to the list of products
      products.value.push(newProduct);
    };

    const handleUpdateProduct = (updatedProduct) => {
      // Update the products array with the edited product
      const index = products.value.findIndex(product => product.id === updatedProduct.id);
      if (index !== -1) {
        products.value.splice(index, 1, updatedProduct);
      }
      console.log(products.value);
    };

    return {
      products,
      handleAddProduct,
      handleUpdateProduct
    };
  }
}

</script>

<style>
#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
  color: #333;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.title {
  font-size: 28px;
  margin-bottom: 20px;
}
</style>
