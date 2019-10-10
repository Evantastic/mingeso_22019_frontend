<template>
  <v-content >
      <v-row align="center" justify="center" class="mt-3">
      <h1 class="font-italic font-weight-light display-3">Reserva</h1>
    </v-row>
    <v-row align="center" justify="center" class="mt-3">
      <v-img :src="require('@/assets/imgs/super-divider.svg')" max-height="600" max-width="500"></v-img>
    </v-row>

    <v-container>
      <v-row align="start" justify="center" class="mt-3">
          <h1 class="text-center font-weight-blod headline pa-4 pb-5 mb-4">¿Está preparado/a para disfrutar del placer de descansar? Reserve su habitación en este momento llamando al siguiente numero o enviando un correo a la siguiente dirección:</h1>
      </v-row>
      <v-row justify="center">
              <v-img :src="require('@/assets/imgs/key.png')"  max-width="200"></v-img>
          
      </v-row>
      <v-row>
          <v-col>
              <v-btn x-large disabled block class="ma-2" outlined color="#302F2D">
                  <v-icon class="px-3">
                      far fa-envelope
                  </v-icon>
                  reservas@habbohotel.cl
              </v-btn>
              
          </v-col>
          <v-col>
              <v-btn x-large block disabled class="ma-2" outlined color="#302F2D">
                  <v-icon class="px-3">
                      fas fa-phone
                  </v-icon>
                  +562 2498 1800
              </v-btn>
          </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {

}
</script>

<style>

</style>