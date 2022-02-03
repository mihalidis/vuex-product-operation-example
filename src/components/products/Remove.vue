<template>
  <div class="container">
    <div class="row">
      <div class="col-6 offset-3 pt-3 card mt-5 shadow">
        <div class="card-body">
          <h3>Remove Products</h3>
          <hr>
          <div class="form-group">
            <label>Product Name</label>
            <select v-model="selected" class="form-control">
              <option selected disabled>--Please choose an option--</option>
              <option v-for="product in getProductList"
                      :key="product.id"
                      :value="product"
                      :disabled="product.count == 0"
              >
                {{ product.name }}</option>
            </select>
          </div>
          <transition name="fade" mode="out-in">
            <div v-if="selected !== ''" class="card mb-2 border border-danger">
              <div class="card-body">
                <div class="row">
                  <div class="col-12 text-center">
                    <div class="mb-3 badge-background">
                      <span class="badge badge-info">Stock : {{ selected.count }}</span>
                      <span class="badge badge-primary">Price : {{ selected.price }}</span>
                    </div>
                    <p class="border border-warning p-2 text-secondary">
                      {{ selected.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </transition>
          <div class="form-group">
            <label>
              How many products do you want to remove?</label>
            <input v-model="removeProductCount" type="number" class="form-control" :class="{'count-warning' : countWarning }" placeholder="please enter the amount of items to be removed">
            <label v-if="countWarning" class="warning-text">
              you can't remove items more than {{ selected.count }}</label>

          </div>
          <hr>
          <button class="btn btn-primary" :class="{'disabled' : !activatedButton}" @click="removeProduct">Remove Product</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "Remove",
  data() {
    return {
      selected: '',
      removeProductCount: null,
      countWarning: false
    }
  },
  computed: {
    ...mapGetters(["getProductList"]),
    activatedButton() {
      return !!(this.selected !== '' || this.removeProductCount !== null);
    },
  },
  watch: {
    removeProductCount(value) {
      if(value.length) {
        this.countWarning = false;
      }
    }
  },
  mounted() {
    this.getProducts();
  },
  beforeRouteLeave(to, from, next) {
    if((this.selected === '' || this.removeProductCount === null)) {
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
    ...mapActions(["getProducts"]),
    removeProduct() {
      if(parseInt(this.selected.count) >= parseInt(this.removeProductCount)) {
        this.$store.dispatch("removeProduct",{
          id: this.selected.id,
          count: this.removeProductCount
        });
      } else {
        this.countWarning = true;
      }
    }
  }
}
</script>

<style scoped>
.form-control {
  margin-bottom: 16px;
}

.badge-background {
  background-color: #24A19C;
}

.count-warning {
  border: 1px solid red;
}

.warning-text {
  color: red;
  font-size: 12px;
}
</style>
