import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'vant/lib/index.css'

//import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
//3-4
//4-2
app.mount('#app')
