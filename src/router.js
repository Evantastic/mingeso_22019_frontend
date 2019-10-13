import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home' 
import Appview from './views/AppView' 

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/app',
      name: 'app',
      component: Appview
    },
  ]
})
