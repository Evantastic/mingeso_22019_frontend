<template>
  <v-container align-content-center>
    <v-row align="center" justify="center" class="pa-5">
      <v-img :src="require('@/assets/imgs/404.svg')" max-height="400" max-width="500"></v-img>
    </v-row>

    <v-row justify="center">
      <h1 class="font-italic font-weight-light display-3 marg-text-NF">¿Buscabas algo?</h1>
    </v-row>
    <v-row justify="center">
      <h1 class="font-weight-light display-6">
        Perece que algo salió mal, volvamos a
        <strong>HABBO HOTEL</strong>
      </h1>
    </v-row>
    <v-row justify="center" class="py-3">
      <v-btn dark to="/">
        <h2 class="text-center" display-3>
          <a class="black--text">Habbo Hotel</a>
        </h2>
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.black--text {
  color: black;
  background: -webkit-linear-gradient(#9d7943, #e5b864, #9d7943);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.marg-text-NF {
  margin-top: -6%;
}
</style>

