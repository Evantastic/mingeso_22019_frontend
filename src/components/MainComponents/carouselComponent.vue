<template>
  <v-content>
    <v-carousel
      cycle
      interval="6000"
      height="500"
      hide-delimiter-background
      show-arrows-on-hover
      :show-arrows="false"
      hide-delimiters
    >
      <v-carousel-item v-for="item in items" :src="item.src" :key="item"></v-carousel-item>
    </v-carousel>
    <v-container>
      <v-row class="fill-height logo-position" align="center" justify="center">
        <v-img :src="require('@/assets/imgs/logo.svg')" max-height="400" max-width="500"></v-img>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { src: require('@/assets/imgs/carousel/room1.jpg'), },
        { src: require('@/assets/imgs/carousel/room2.jpg'), },
        { src: require('@/assets/imgs/carousel/room3.jpg'), },
        { src: require('@/assets/imgs/carousel/room4.jpg'), },
        { src: require('@/assets/imgs/carousel/room5.jpg'), },
        { src: require('@/assets/imgs/carousel/room6.jpg'), },
        { src: require('@/assets/imgs/carousel/room7.jpg'), }
      ]
    };
  }
};
</script>

<style>
.logo-position {
  margin-top: -42%;
}
</style>