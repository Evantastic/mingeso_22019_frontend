import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.config.productionTip = false

// este es el archivo por defecto de vue

/* aca se aplican los estilos y distribuciones propios de view a
   todo lo que tenga id="app".

   Pero eso lo hace al momento de hacer build, por lo que no nos preocupamos de ello.
*/

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
