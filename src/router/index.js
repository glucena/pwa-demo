import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Map from '@/components/Map'
import Welcome from '@/components/Welcome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome,
      meta: { bodyClass: 'welcome' }
    },
    {
      path: '/home/:qrId',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/map',
      name: 'Map',
      component: Map
    }
  ]
})
