import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'vant/lib/index.css'

//import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

const rootValue = 16
const rootwidth = 390
const deviceWidth = document.documentElement.clientWidth
console.log(deviceWidth)
document.documentElement.style.fontSize = (deviceWidth * rootValue) / rootwidth + 'px'

app.mount('#app')
