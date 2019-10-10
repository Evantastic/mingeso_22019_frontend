<template>
  <v-app class="color-app-back">
    <tolbar></tolbar>
    
    <carousel></carousel>
    <rooms id="Habitaciones"></rooms>
    <contact id="Nosotros"></contact>
    <reserva id="Reserva"></reserva>
    <Footer></Footer>
  </v-app>
</template>

<script>

import tolbar  from '@/components/rootComponents/tolbar'
import Footer  from '@/components/rootComponents/footer'


// componentes de cuerpo de la pagina

import carousel from '@/components/MainComponents/carouselComponent'
import rooms from "@/components/MainComponents/roomsComponent"
import contact from "@/components/MainComponents/contactComponent"
import reserva from "@/components/MainComponents/reservaComponent"




export default {
  // ejemplo de pagina de hotel :  https://www.plazaelbosque.cl
  
  components: {
    tolbar,
    Footer,
    carousel,
    rooms,
    contact,
    reserva,
  },

  name: 'App',
  data: () => ({
    
  }),
};
</script>
<style scoped>

.color-app-back {
  background-color: #d8d8d8 !important;
}

</style>
