<template>
  <div>
    <div>{{ product.name }}</div>
    <div>{{ product.description }}</div>
    <div>{{ product.price }}</div>
    <button @click="edit">Edit</button>
    <button @click="remove">Delete</button>
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
/* Add your component's styles here */
</style>
