import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/HomeView'
import Student from '@/views/StudentView'
// @ -> hace referencia a la carpeta src/
// . -> hace referencia a la carpeta actual

Vue.use(Router)

export default new Router({

  // esto elimina el # de la ruta
  mode: 'history',

  // en general cada ruta debe tener un "path" y un componente que muestre ese path

  routes: [
    {
      path: '/',
      component: Home,
 
    },
    {
      path: '/students',
      component: Student,
    },
  ]
})
