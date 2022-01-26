import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import { router } from "./router";
import { store } from "./store/store"

Vue.use(VueResource);

Vue.config.productionTip = false;

// {{ purchase | currency }}
Vue.filter('currency', (value) => {
  return parseFloat(value).toLocaleString(undefined, { minimumFractionDigits: 2 }) + ' €';
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
