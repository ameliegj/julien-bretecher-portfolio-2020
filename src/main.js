//import "./assets/styles/reset.min.css";
// import "./assets/styles/bootstrap/bootstrap-grid.min.css";

import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
