import Vue from 'vue'
import Vuex from 'vuex'

// vuex es la tienda donde todos vamos a consumir datos que esten aca


Vue.use(Vuex)

export default new Vuex.Store({

  //state son los datos fijos y que no necesitan una función para mostrar


  // actions -> mutations -> states

  
  state: {

  },

  //mutattions son datos que requieren de alguna función para ser mostrados, pero siguen siendo datos.
  mutations: {

  },
  // actions son los metodos y necesitan un commit para operar.
  actions: {

  }
})
