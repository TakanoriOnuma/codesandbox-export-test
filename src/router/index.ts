import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import TablePage from "../views/Table.vue";
import InputFormPage from "../views/InputForm.vue";
import ButtonPage from "../views/Button.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: TablePage
  },
  {
    path: "/input-form",
    component: InputFormPage
  },
  {
    path: "/button",
    component: ButtonPage
  }
];

const router = new VueRouter({
  routes
});

export default router;
