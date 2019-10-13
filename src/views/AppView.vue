<template>
   <v-content>
     <overlay></overlay>
     <dialogReserve></dialogReserve>
     <navbar></navbar>
      <drawer></drawer>
    </v-content>
</template>

<script>

import {mapActions, mapState} from "vuex"

import drawer  from '@/components/AppsComponents/DrawerComponent'
import navbar  from '../components/AppsComponents/NavbarComponent'
import dialogReserve  from '../components/AppsComponents/reserveComponent'
import overlay from '@/components/MainComponents/overlayComponent'

export default {
  components: {
    drawer,
    navbar,
    dialogReserve,
    overlay,
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

}
</script>

<style>

</style>