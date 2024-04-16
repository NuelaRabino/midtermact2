<template>
  <div class="product-list">
    <h2>Product List</h2>
    <div v-for="(product, index) in products" :key="index" class="product-item">
      <div v-if="!product.isEditing" class="product-details">
        <ProductItem :product="product" @edit="toggleEditing(product)" @delete="confirmDeleteProduct(product)" />
      </div>
      <div v-else class="edit-form">
        <form @submit.prevent="saveEditedProduct(product)">
          <div class="form-group">
            <input type="text" v-model="product.name" required placeholder="Product Name" class="form-input">
          </div>
          <div class="form-group">
            <input type="text" v-model="product.description" required placeholder="Description" class="form-input">
          </div>
          <div class="form-group">
            <input type="number" v-model.number="product.price" required min="0" placeholder="Price" class="form-input">
          </div>
          <div class="button-group">
            <button type="submit" class="save-button">Save</button>
            <button type="button" @click="cancelEditing(product)" class="cancel-button">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue';
import Swal from 'sweetalert2';

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
      updatedProduct.isEditing = false;
      this.$emit('handleUpdateProducts', updatedProduct);
    },
    confirmDeleteProduct(product) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'You will not be able to recover this product!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteProduct(product);
        }
      });
    },
    deleteProduct(product) {
      // Dispatch deleteProduct action with product ID
      this.$store.dispatch('deleteProduct', product.id);
    },
    cancelEditing(product) {
      product.isEditing = false;
    }
  },
};
</script>


<style scoped>
.product-list {
  margin-top: 20px;
}

.product-item {
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  padding: 20px;
}

.product-details {
  justify-content: space-between;
  align-items: center;
}

.edit-form {
  padding: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-input {
  width: calc(100% - 40px);
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.button-group {
  display: flex;
  justify-content: flex-end;
}

button {
  padding: 10px 20px;
  margin-left: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
}

button:hover {
  opacity: 0.8;
}

.save-button {
  background-color: #28a745;
  color: #fff;
}

.cancel-button {
  background-color: #dc3545;
  color: #fff;
}
</style>
