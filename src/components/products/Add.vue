<template>
  <div class="container">
    <div class="row">
      <div class="col-6 offset-3 pt-3 card mt-5 shadow">
        <div class="card-body">
          <h3>Product Operations</h3>
          <hr>
          <div class="form-group">
            <label>Name</label>
            <input v-model="product.name" type="text" class="form-control" placeholder="Enter product name..">
          </div>
          <div class="form-group">
            <label>Count</label>
            <input v-model="product.count" type="number" class="form-control" placeholder="Enter how many products to add..">
          </div>
          <div class="form-group">
            <label>Price</label>
            <input v-model="product.price" type="number" class="form-control" placeholder="Enter single product price..">
          </div>
          <div class="form-group">
            <label>Description</label>
            <textarea v-model="product.description" cols="30" rows="5" placeholder="Enter a description of the product..." class="form-control"></textarea>
          </div>
          <hr>
          <button @click="saveProduct" class="btn btn-primary">Add Product</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Add",
  data() {
    return {
      product: {
        name: '',
        count: null,
        price: null,
        description: ''
      }
    }
  },
  mounted() {
    console.log(process.env.DB_URI);
  },
  methods: {
    ...mapMutations(['addProductToList']),
    saveProduct() {
      if(this.product.name && this.product.count && this.product.price && this.product.description) {
        this.$store.dispatch("saveProduct", this.product);
      }
    }
  }
}
</script>

<style scoped>

</style>
