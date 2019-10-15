import Vue from 'vue'
import Vuex from 'vuex'
import { roomStore } from './roomStore'
import { appRootStore } from './appRootStore'
import { reserveStore } from './reserveStore'
import { roomType } from './roomType'
import { contactStore } from './contactStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    roomStore,
    appRootStore,
    reserveStore,
    roomType,
    contactStore,
  }


})
