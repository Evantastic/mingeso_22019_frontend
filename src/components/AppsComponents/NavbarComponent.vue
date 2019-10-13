<template>
  <v-app-bar app color="indigo" dark>
    <v-app-bar-nav-icon @click.stop="setDrawer(!drawer)"></v-app-bar-nav-icon>
    <v-toolbar-title>
      <span>Habbo|</span>
      <span class="font-weight-light">App</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn color="white" class="black-text" @click="setDialog(true)">Nueva Reserva</v-btn>
  </v-app-bar>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  computed: {
    ...mapState("appRootStore", ["drawer"])
  },
  methods: {
    ...mapMutations("appRootStore", ["setDrawer"]),
    ...mapMutations("reserveStore", ["setDialog"]),
  }
};
</script>

<style>
.black-text {
    color: black !important;
}
</style>