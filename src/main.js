import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

// Bulba CSS
import '../node_modules/bulma/css/bulma.min.css'

// Router
import router from './router'
app.use(router)

// Mount app
app.mount('#app');

