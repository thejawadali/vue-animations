import { createPinia } from "pinia"
import { createApp } from 'vue'
import App from './App.vue'
import "./index.scss"
import router from "./router"
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'


const app = createApp( App )
app.use( createPinia() )
app.use( autoAnimatePlugin )
app.use( router )
app.mount( '#rd-appstore' )