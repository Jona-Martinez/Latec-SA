
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Particles from "vue3-particles";
import './assets/normalize.css'
import './assets/styles/styles.css'
import './assets/js/button_start.js'

const app = createApp(App)

app.use(router)

app.mount('#app')

app.use(Particles)
