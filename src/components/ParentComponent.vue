<template>
    <div>
      <ProductItem :product="product" @edit="handleEdit" @delete="handleDelete" />
    </div>
  </template>
  
  <script>
  import ProductItem from './ProductItem.vue';
  
  export default {
    components: {
      ProductItem,
    },
    data() {
      return {
        product: {
          name: 'Product Name',
          description: 'Product Description',
          price: 10,
        },
      };
    },
    methods: {
      handleEdit(product) {
        // Handle edit functionality
        console.log('Edit product:', product);
      },
      handleDelete(product) {
        // Handle delete functionality
        console.log('Delete product:', product);
      },
    },
  };
  </script>
  