import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import Toast from "vue-toastification";
import { createPinia } from 'pinia';
import './assets/styles/tailwind.css'
import "vue-toastification/dist/index.css";
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


const vuetify = createVuetify({
  components,
  directives,
})

const pinia= createPinia()

const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(vuetify)
app.use(Toast);

app.mount('#app')
