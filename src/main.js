
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Particles from "vue3-particles";
import './assets/normalize.css'
import './assets/styles/styles.css'

const app = createApp(App)

app.use(router)

app.mount('#app')

app.use(Particles)


import { loadFull } from "tsparticles";



const particlesInit = async (engine) => {
  await loadFull(engine);
};

const particlesLoaded = async (container) => {
  console.log("Particles container loaded", container);
};
