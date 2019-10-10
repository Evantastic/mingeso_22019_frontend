<template>
  <v-content>
    <v-parallax dark :src="room6" height="600">
      <v-row align="center" justify="center">
        <v-img :src="require('@/assets/imgs/logo.svg')" max-height="400" max-width="500"></v-img>
      </v-row>
    </v-parallax>
    
  </v-content>
</template>

<script>
import room6 from "@/assets/imgs/carousel/room6-1.jpg";

export default {
  data() {
    return {
      room6
    };
  }
};
</script>

<style>
.logo-position {
  margin-top: -42%;
}
.img-logo-carousel {
  /* ... */
  border: 8px outset #999;
  -webkit-box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.4);
}
</style>