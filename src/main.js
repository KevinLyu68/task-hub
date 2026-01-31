import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router' // 引入路由
import App from './App.vue'
import './style.css'

const app = createApp(App)
app.use(createPinia()) // 插件注册
app.use(router) // 注册路由
app.mount('#app')