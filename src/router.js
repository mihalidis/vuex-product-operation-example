import Vue from 'vue';
import VueRouter from 'vue-router';

import Add from "./components/products/Add";
import List from "./components/products/List";
import Remove from "./components/products/Remove";

Vue.use(VueRouter);

export const routes = [
  {
    path: "/",
    name: 'List',
    component: List
  },
  {
    path: "/add-product",
    name: 'Add',
    component: Add
  },
  {
    path: "/remove-product",
    name: 'Remove',
    component: Remove
  },
  {
    path: "*",
    redirect: "/"
  }
]

export const router = new VueRouter({
  routes,
  mode: 'history'
});
