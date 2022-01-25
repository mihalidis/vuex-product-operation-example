import Vue from "vue";
import Vuex from "vuex";
import product from "./modules/product";
import * as getters from "./getters";
import * as actions from "./actions";
import * as mutations from "./mutations";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    purchaseAmount: 0,
    salesAmount: 0,
    balance: 0,
  },
  getters,
  actions,
  mutations,
  modules: {
    product
  }
});
