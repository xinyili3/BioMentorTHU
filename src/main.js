import { createApp } from 'vue'
import App from './App.vue'
import RouterLink from './components/RouterLink.vue'
import './styles/main.css'

createApp(App).component('RouterLink', RouterLink).mount('#app')
