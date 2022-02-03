import Vue from 'vue';
import {router} from "../../router";

const state = {
  productList: []
};

const getters = {
  getProductList(state) {
    return state.productList;
  }
};

const mutations = {
  addProductToList(state, newList) {
    state.productList = newList;
  }
};

const actions = {
  // eslint-disable-next-line no-unused-vars
  saveProduct({ commit, dispatch }, payload){
    Vue.http.post(`${process.env.VUE_APP_DBURI}products.json`, payload).then(() => {
      dispatch("setSaleInfo", {
        purchaseAmount: payload.price,
        salesAmount: 0,
        count: payload.count
      })
    });
  },
  getProducts({commit}) {
    Vue.http.get(`${process.env.VUE_APP_DBURI}products.json`).then((res)=>{
      const changedList = Object.keys(res.body).map((key) => {
        return {
          id: key,
          ...res.body[key]
        }
      });

        commit("addProductToList", changedList);
    });
  },
  removeProduct({state, dispatch}, payload) {
    // pass by reference & pass by value
    let product = state.productList.filter(product => product.id === payload.id);
    const totalCount = product[0].count - payload.count;
    Vue.http.patch(`${process.env.VUE_APP_DBURI}products/${payload.id}.json`, {count : totalCount}).then(() => {
      product[0].count = totalCount;

      dispatch("setSaleInfo", {
        purchaseAmount: 0,
        salesAmount: product[0].price,
        count: payload.count
      })
    }).then(router.replace("/"));
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
