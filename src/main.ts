import Vue from "vue";
import Vuetify from "vuetify";
import App from "./App.vue";
import router from "./router";

Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify: new Vuetify({
    theme: {
      themes: {
        light: {
          primary: "#5ba5c5",
          accent: "#e2b13f",
          secondary: "#37cba1",
          success: "#6fd775",
          info: "#3aa2e3",
          warning: "#fb8c00",
          error: "#ec4054"
        }
      }
    }
  }),
  render: (h) => h(App)
}).$mount("#app");
