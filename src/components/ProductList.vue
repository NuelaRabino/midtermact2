<template>
    <div>
      <h2>Product List</h2>
      <ProductItem v-for="(product, index) in products" :key="index" :product="product" @edit="editProduct" @delete="deleteProduct" />
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
      editProduct(product) {
        console.log('Editing product:', product);
      },
      deleteProduct(product) {
        console.log('Deleting product:', product);
      },
    },
  };
  </script>
  
  <style>
  /* Add your component's styles here */
  </style>
  