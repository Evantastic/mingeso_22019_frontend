<template>
  <!-- etiqueta propia de vuetiy para crear el navbar -->
  <v-app-bar
    app
    elevate-on-scroll
    class="custom-color-navbar pa-3"
    :class="{'': scrollPosition <= 1, 'custom-solid': scrollPosition > 1 }"
  >
    <v-img v-if="$vuetify.breakpoint.width > 400" class="test" :src="require('@/assets/logo.svg')" max-height="40" max-width="40"></v-img>
    <!-- espacios -->
    &nbsp;
    &nbsp;
    <!-- fin espacios -->
    <v-toolbar-title  class="headline text-uppercase">
      <span>DevOps|</span>
      <span class="font-weight-light">Grupo 3</span>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <!-- ################## Parte responsive ################## -->

    <v-btn  v-if="$vuetify.breakpoint.mdAndUp" text to="/students">
      <span class="mr-2">Estudiantes</span>
    </v-btn>

    <v-divider inset class="custom-color-divider mx-5" vertical></v-divider>

    <v-btn v-if="$vuetify.breakpoint.mdAndUp" text to="/">
      <span class="mr-2">Inicio</span>
    </v-btn>

    <menuNav v-if="$vuetify.breakpoint.smAndDown"></menuNav>


  </v-app-bar>
</template>

<script>
import menuNav from "./menuComponents";

export default {
  components: {
    menuNav
  },
  data: () => ({
    scrollPosition: 0
  }),
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  }
};
</script>





<style >
.custom-color-navbar {
  background-color: transparent !important;
  transition: background-color 0.5s ease-out, box-shadow 0.5s ease-out !important;
}

.custom-solid {
  background-color: white !important;
}

.custom-color-divider {
  border-color: black !important ;
}

.active-bot {
  background-image: url("../assets/imgs/divider.svg");
  background-size: 70px 15px;
  background-position: 100% 100%;
}

</style>