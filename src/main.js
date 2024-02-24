//scripts
import { createApp, createRenderer } from 'vue'
import './style.css'
import App from './App.vue'
import vue3GoogleLogin from 'vue3-google-login'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import '@material/web/all.js'
import { router } from './router.js'
const app = createApp(App)
app.use(router)
app.use(VueSidebarMenu)
app.use(vue3GoogleLogin, {
    // HINT: Be sure to fill this with your client id
    clientId: ''
})
app.config.globalProperties.projectName = 'Watchcat';
app.mount('#app')
