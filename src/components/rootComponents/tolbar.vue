<template>
  <!-- etiqueta propia de vuetiy para crear el navbar -->
  <v-app-bar
    app
    height="90"
    elevate-on-scroll
    class="custom-color-navbar"
  >
    <v-img v-if="$vuetify.breakpoint.width > 400" class="test" :src="require('@/assets/imgs/minilogo.svg')" max-height="70" max-width="50"></v-img>
    
    <!-- espacios -->
    &nbsp;
    &nbsp;
    <!-- fin espacios -->

    <v-img  :src="require('@/assets/imgs/tittle_logo.svg')" max-height="95" max-width="220"></v-img>

    <v-spacer></v-spacer>

    <!-- ################## Parte responsive ################## -->

    <v-btn  v-if="$vuetify.breakpoint.mdAndUp" text to="/students">
      <span class="mr-2"></span>
    </v-btn>

    <v-divider inset class="custom-color-divider mx-5" vertical></v-divider>

    <v-btn v-if="$vuetify.breakpoint.mdAndUp" class="custom-menu-btn" text to="/">
      <span class="mr-2 text--white">Inicio</span>
    </v-btn>

  </v-app-bar>
</template>

<script>


export default {
  components: {
    
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
.text--white{
  color:white;
}

.custom-color-navbar {
  background-color: #302F2D !important;
  transition: background-color 0.5s ease-out, box-shadow 0.5s ease-out !important;
}

.custom-solid {
  background-color: white !important;
}

.custom-color-divider {
  border-color: #e5b864 !important ;
}

.active-bot {
  background-image: url("../../assets/imgs/divider.svg");
  background-size: 70px 15px;
  background-position: 100% 100%;
}

.custom-menu-btn {
  height: 50px !important;
  -webkit-transition: none !important;
  -moz-transition: none !important;
  -o-transition: none !important;
  transition: color 0.4s ease-out !important;
}
.custom-menu-btn:before {
  color: transparent !important;
}
.custom-menu-btn:hover {
  color: #e5b864;
}
.active-all {
  background-size: 12px 20px;
  background-position: 0% 45%;
}

</style>