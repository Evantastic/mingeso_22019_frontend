<template>
  <v-parallax :src="require('@/assets/imgs/back-connect.svg')" height="650">
    <v-container>
      <v-row class="max-height py-5" justify="center" align="center">
        <v-col align-self="center" cols="6">
          <h1 class="text-title text--black pb-5">DevOps</h1>

          <span
            class="text--black"
          >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor architecto debitis, ullam quae amet ipsa exercitationem fugit inventore, quo consequatur nisi porro sint! Rem magnam consectetur beatae sapiente odit iste?</span>
        </v-col>
        <v-img
          :src="require('@/assets/imgs/DevOps.svg')"
          min-height="400"
          max-height="550"
          max-width="600"
          min-width="400"
        ></v-img>
      </v-row>
      <v-img :src="require('@/assets/imgs/divider.svg')" max-height="50" max-width="300"></v-img>
    </v-container>
  </v-parallax>
</template>


<style>
.text-title {
  font-size: 50px;
}
.text--black {
  color: black;
}
.divider-theme-black {
  border-color: black !important;
  height: 5px !important;
}
.justify-content-center {
  justify-content: center;
}
</style>