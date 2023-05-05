import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import './assets/main.css'

import "tailwindcss/tailwind.css"

const app = createApp(App)

import './styles/index.css'
app.use(router)

app.mount('#app')
