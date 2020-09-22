import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './permission'
import './core/use'

createApp(App).use(store).use(router).mount('#app')
