/*import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')*/

import { createApp } from "vue";
import App from "./App.vue";
import AOS from "node_modules/aos";
import "@fortawesome/fontawesome-free/css/all.css";
import "aos/dist/aos.css";
import "@/assets/styles/stylesheet.css"
import "@/assets/styles/responsive.css"

const app = createApp(App);
app.mount("#app");

AOS.init();
