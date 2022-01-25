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
    state.productList.push(newList);
  }
};

const actions = {
  // eslint-disable-next-line no-unused-vars
  saveProduct({ commit, dispatch }, payload){
    Vue.http.post(`${process.env.VUE_APP_DBURI}products.json`, payload).then((res) => {
      commit("addProductToList", {
        id: res.data.name,
        ...payload
      });

      dispatch("setSaleInfo", {
        purchase: payload.price,
        sale: 0,
        count: payload.count
      })
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
