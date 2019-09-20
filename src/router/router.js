import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/HomeView'
import Student from '@/views/StudentView'
//STUDENTLIST ESTÁ SOLO PARA TESTEO (PARA VISUALIZARLO EN LA PÁGINA)
import StudentList from '@/components/StudentComponents/StudentList'

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
    //STUDENTLIST ESTÁ SOLO PARA TESTEO (BORRAR LUEGO)
    {
      path: '/test',
      component: StudentList,
    },
  ]
})
