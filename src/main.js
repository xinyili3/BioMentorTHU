import { createApp } from 'vue'
import '@fontsource/source-sans-3/latin-400.css'
import '@fontsource/source-sans-3/latin-600.css'
import '@fontsource/source-sans-3/latin-700.css'
import App from './App.vue'
import RouterLink from './components/RouterLink.vue'
import './styles/main.css'

createApp(App).component('RouterLink', RouterLink).mount('#app')
