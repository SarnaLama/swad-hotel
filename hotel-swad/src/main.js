/*import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')*/

import { createApp } from "vue";
import App from "./App.vue";
import AOS from "aos";
import "@fortawesome/fontawesome-free/css/all.css";
import "aos/dist/aos.css";
import "@/src/assets/styles/stylesheet.css"
import "@/src/assets/styles/responsive.css"

const app = createApp(App);
app.mount("#app");

AOS.init();
