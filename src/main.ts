import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { getStore } from '@/stores/initializer'

const app = createApp(App)

const store = getStore();
app.use(store);
app.use(router)

app.mount('#app')
