<template>
  <v-parallax :src="require('@/assets/imgs/back-connect.svg')" height="820" jumbotron>
    <v-container>
      <v-row class="max-height py-5" justify="center" align="start">
        <v-col align-self="center" cols="12" md="6" lg="6" xl="6">
          <h1 class="text-title text--black pb-5">DevOps 2019</h1>
          <span
            
            class="text--black"
          >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor architecto debitis, ullam quae amet ipsa exercitationem fugit inventore, quo consequatur nisi porro sint! Rem magnam consectetur beatae sapiente odit iste?</span>
        </v-col>
        <v-img
          :src="require('@/assets/imgs/DevOps.svg')"
          max-height="550"
          max-width="600"
        ></v-img>
      </v-row>
      <v-img :src="require('@/assets/imgs/divider.svg')" max-height="50" max-width="500"></v-img>
    </v-container>
  </v-parallax>
</template>


<style>

.back-img {
  background-repeat: no-repeat;
  background-size: 100% auto;
}

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