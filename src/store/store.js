import Vue from "vue";
import Vuex from "vuex";
import product from "./modules/product";
import * as getters from "./getters";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    purchaseAmount: 10,
    salesAmount: 20,
    balance: 30,
  },
  getters,
  modules: {
    product
  }
});
