import { createApp } from 'vue'
import { createPinia } from 'pinia'

// import './style.css'
import App from './App.vue'
import {router} from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'



const app = createApp(App);

app.use(router);
app.use(createPinia())
app.use(ElementPlus)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}


import 'virtual:windi.css'
import './permission'
import "nprogress/nprogress.css"

app.mount('#app')
