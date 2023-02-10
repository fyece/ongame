import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import vClickOutside from "click-outside-vue3"

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vClickOutside)

app.mount("#app");
