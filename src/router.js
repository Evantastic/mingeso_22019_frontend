import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import PostulantsList from './views/PostulantsList.vue'
import PostulantsForm from './views/PostulantsForm.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/postulantsForm',
      name: 'postulantsForm',
      component: PostulantsForm,
    },
    {
      path: '/postulantsList',
      name: 'postulantsList',
      component: PostulantsList,
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
