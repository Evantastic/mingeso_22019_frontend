import Vue from "vue";
import Vuex from "vuex";


// improtacion de los modulos
import { studentStore } from './studentStore'


Vue.use(Vuex);



export default new Vuex.Store({
  modules : {
    studentStore,
  }
});
