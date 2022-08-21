import { createApp } from "vue";
import VueClipboard from "vue-clipboard2";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(VueClipboard).use(router).mount("#app");
