import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Page2 from '../views/Page2.vue'
import Login from "../views/Login.vue"
import Signup from "../views/Signup.vue"
import Gamepage from '../views/Gamepage.vue'
import Personal from '../views/Personal.vue'
// import { component } from 'vue/types/umd'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/page2',
    name: 'Page2',
    component: Page2
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: "/register",
    name: "Signup",
    component: Signup
  },
  {
    path: "/game",
    name: "Gamepage",
    component: Gamepage
  },
  {
    path: "/personal",
    name: "Personal",
    component: Personal

  }
]

const router = new VueRouter({
  routes
})

export default router
