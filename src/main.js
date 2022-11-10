import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/assets/scss/main.scss";

import { VueAxios } from "./config/axios.js";

import axios from "axios";

import "@/config/globalMixin";
import "@/config/component";

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
