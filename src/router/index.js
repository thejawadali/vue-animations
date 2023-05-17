import { createRouter, createWebHistory } from 'vue-router'
import Home from "../HomePage.vue"
import About from "../AboutPage.vue"




const routes = [
  {
    path: '/', component: Home
  },
  {
    path: '/about', component: About
  },

]

const router = createRouter( {
  history: createWebHistory(),
  routes
} )

export default router