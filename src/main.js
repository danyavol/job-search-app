import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

// Bulma CSS
import '../node_modules/bulma/css/bulma.min.css'

// Icons
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
app.component('font-awesome-icon', FontAwesomeIcon);

// Router
import router from './router'
app.use(router)

// Mount app
app.mount('#app');

