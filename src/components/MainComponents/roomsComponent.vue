<template>
  <v-content>
    <v-row align="center" justify="center" class="mt-3">
      <h1 class="font-italic font-weight-light display-3">Nuestras habitaciones</h1>
    </v-row>
    <v-row align="center" justify="center" class="mt-3">
      <v-img :src="require('@/assets/imgs/super-divider.svg')" max-height="600" max-width="500"></v-img>
    </v-row>
    <v-row align="center" justify="center" class="mt-3 pa-5">
      <h2 class="font-italic font-weight-light display-1 text-center">Habitaciones y suites para todos aquellos que visitan Santiago por negocios y placer, el Servicio formará parte de tu experiencia.</h2>
    </v-row>
    <v-row>
      <v-card v-for="room in rooms" :key="room.id"  class="mx-auto my-5" max-width="350">
        <v-img height="250" :src="room.url"></v-img>

        <v-card-title class="pb-3">{{room.title}}</v-card-title>
        <v-card-text>
          <v-row  justify="start" align="center mx-3">
            <v-icon  class="px-3 ">fas fa-bed</v-icon> {{room.beds}}
            <v-icon class="px-3 ">fas fa-users</v-icon> {{room.capacity}}

          </v-row>

          <div class="my-4 subtitle-1 black--text"> desde ${{room.price}} • por noche</div>

          <div>{{room.description}}</div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-text>
          
            <v-chip  class="ma-1" color="#e5b864" v-for="service in room.services" :key="service">{{service}}</v-chip>
          
        </v-card-text>

      </v-card>
    </v-row>
  </v-content>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  data() {
    return {
      
      
    };
    
  },
  computed: {
    ...mapState("roomStore",["rooms"]),
  },
  methods: {
    ...mapActions("roomStore", ["getRooms"]),
  },
  mounted(){
    this.getRooms();
  },
};
</script>

<style>
.img-top-margin {
  margin-top: -15%;
}
</style>