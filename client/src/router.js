import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Curcin from './views/Curcin.vue'
import Register from './views/Register.vue'
import Home from './views/Home.vue'



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/curcin',
      name: 'curcin',
      component: Curcin
    }
   
  ]
})
