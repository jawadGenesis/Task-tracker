import { createApp } from "vue";
import App from "./App.vue";
// import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

// Vue.use(BootstrapVue);

app.use(router);

app.mount("#app");
