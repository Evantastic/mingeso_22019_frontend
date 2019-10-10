<template>
  <v-content>
    <v-row align="center" justify="center" class="mt-3">
      <h1 class="font-italic font-weight-light display-3">Nuestro Hotel</h1>
    </v-row>
    <v-row align="center" justify="center" class="mt-3">
      <v-img :src="require('@/assets/imgs/super-divider.svg')" max-height="600" max-width="500"></v-img>
    </v-row>
    <v-container>
      <v-row align="start" justify="center" class="mt-3">
          <h1 class="text-center font-weight-blod headline pa-4 pb-5 mb-4">Te invitamos a conocer  hotel en el sector Oriente de Santiago, Nueva Las Condes. Nos encontramos a pasos de importantes centros comerciales, la mejor conectividad y una excelente oferta gastronómica y turística.</h1>
        <v-col class="text-center">
          <v-img class="custom-img-contact mr-4" :src="require('@/assets/imgs/phone.svg')" max-width="600"></v-img>
        </v-col>
        <v-col class="mt-5">
          <v-row class="font-weight-light display-1">Nuestra ubicación:</v-row>  
          <v-row class="font-weight-light display-5"> San Sebastián 2800 </v-row>
          <v-row class="font-weight-light display-5"> Las Condes, Santiago - Chile </v-row>
          &nbsp;
          &nbsp;
          <v-row class="font-weight-light display-1">Nuestra número:</v-row>  
          <v-row class="font-weight-light display-5"> Mesa Central: +562 2498 1800 </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {};
</script>

<style>
.custom-img-contact{
    margin-top: -10%;
}
</style>