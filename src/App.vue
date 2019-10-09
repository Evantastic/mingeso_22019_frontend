<template>
  <v-app>
    <tolbar></tolbar>

    <carousel></carousel>
    <!-- <v-content>
      <router-view/>
    </v-content> -->


    <Footer></Footer>
  </v-app>
</template>

<script>

import tolbar  from '@/components/rootComponents/tolbar'
import Footer  from '@/components/rootComponents/footer'

import carousel from '@/components/MainComponents/carouselComponent'


export default {
  // ejemplo de pagina de hotel :  https://www.plazaelbosque.cl
  
  components: {
    tolbar,
    Footer,
    carousel,
  },

  name: 'App',
  data: () => ({
    
  }),
};
</script>
