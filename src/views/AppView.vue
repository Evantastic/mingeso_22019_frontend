<template>
  <v-content>
    <rack></rack>
    <overlay></overlay>
    <dialogReserve></dialogReserve>
    <navbar></navbar>
    <drawer></drawer>
  </v-content>
</template>

<script>


import drawer from "@/components/AppsComponents/DrawerComponent";
import navbar from "@/components/AppsComponents/NavbarComponent";
import dialogReserve from "@/components/AppsComponents/reserveComponent";
import overlay from "@/components/MainComponents/overlayComponent";
import rack from "@/components/AppsComponents/rackComponent";

export default {
  components: {
    drawer,
    navbar,
    dialogReserve,
    overlay,
    rack
  },
};
</script>

<style>
</style>