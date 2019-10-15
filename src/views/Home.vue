<template>
  <div class="color-app-back">
    <tolbar></tolbar>
    <overlay></overlay>
    <carousel></carousel>
    <contact id="Nosotros" class = "back-color-contact"></contact>
    <rooms id="Habitaciones"></rooms>
    <reserva id="Reserva"></reserva>
    <Footer></Footer>
  </div>
</template>

<script>

import tolbar  from '@/components/rootComponents/tolbar'
import Footer  from '@/components/rootComponents/footer'
import overlay from '@/components/MainComponents/overlayComponent'

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
    overlay,
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
.back-color-contact {
  background-color: #bebebe !important;
}

</style>
