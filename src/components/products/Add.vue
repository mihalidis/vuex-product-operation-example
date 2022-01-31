<template>
  <div class="container">
    <div class="loading" :style="isLoading">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
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
          <button @click="saveProduct" class="btn btn-primary" :class="{'disabled' : !activatedButton}">Add Product</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Add",
  data() {
    return {
      product: {
        name: '',
        count: null,
        price: null,
        description: ''
      },
      itemsSaved: false
    }
  },
  computed: {
    activatedButton() {
      return !!(this.product.name && this.product.count && this.product.price && this.product.description);
    },
    isLoading() {
      if(this.itemsSaved) {
        return {
          display: 'block'
        }
      } else {
        return {
          display: 'none'
        }
      }
    }
  },
  beforeRouteLeave(to, from, next) {
    if(!this.itemsSaved) {
      if(confirm("You have unsaved fields, still want you to continue")) {
        next();
      } else {
        next(false);
      }
    } else {
      next();
    }
  },
  methods: {
    saveProduct() {
      this.itemsSaved = false;
      if(this.product.name && this.product.count && this.product.price && this.product.description) {
        this.$store.dispatch("saveProduct", this.product);
        this.itemsSaved = true;
        this.$router.replace('/');
      }
    }
  }
}
</script>
