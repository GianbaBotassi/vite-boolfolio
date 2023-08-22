import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'; // Importa il CSS di Bootstrap

// Import router js
import { router } from './router.js'

createApp(App).use(router).mount('#app')
