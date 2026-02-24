import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vScroll from './directives/vScroll'

const app = createApp(App)

app.directive('scroll', vScroll)

app.use(router)

app.mount('#app')
