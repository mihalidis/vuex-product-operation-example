import Vue from 'vue';

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
  sellProduct() {

  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
