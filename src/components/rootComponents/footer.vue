<template>
  <v-footer height="auto" color="#302F2D" class="lighten-1 text-center">
    <v-row justify="center" align="center" class="pt-5 px-4">
      <v-col cols="12" lg="6" xl="6">
        <v-row align="center">
          <!-- espacios -->
          &nbsp;
          &nbsp;
          <!-- fin espacios -->
          <span class="headline text-uppercase white--text">
            <strong class="color-logo-text">HABBO HOTEL</strong>
          </span>
        </v-row>
        &nbsp;
        &nbsp;
        
        <v-row justify="center" align="center">
          <span class="white--text">
            De viaje, pero sintiéndose en casa.
            Nuestras amplias habitaciones diseñadas para la comodidad y el descanso.
            Cercano a estación de Metro y Centros comerciales.
            Totalmente equipadas para disfrutar de largas estadías o vacaciones en Santiago.
          </span>
          </v-row>
          &nbsp;

         <v-row class="px-4"> <span class="white--text">San Sebastián 2800</span> </v-row>
         <v-row class="px-4"> <span class="white--text">Las Condes, Santiago - Chile</span> </v-row>
         <v-row class="px-4"> <span class="white--text">Mesa Central: +562 2498 1800</span> </v-row>
        
      </v-col>

      <v-col cols="12" lg="6" xl="6">
        <v-row justify="center" align="center">
          <v-col lighten-1 class="text-xs-center py-1">
            <v-btn @click="$router.push('/contact')" v-for="icon in icons" :key="icon" class="mx-4 my-4 white--text" icon>
              <v-icon size="35px">{{ icon }}</v-icon>
            </v-btn>
          </v-col>

          <v-divider class="light-footer-theme" vertical></v-divider>

          <v-col class="text-center white--text">
            <h2 class="text-center" display-3>
              <a class="custom_link white--text" @click="$router.push('/contact')">Contáctanos</a>
            </h2>
          </v-col>
        </v-row>
      </v-col>
      <v-col class="lighten-1 pt-5 text-xs-center white--text" cols="12">
        <v-divider class="light-footer-theme"></v-divider>
      </v-col>

      <v-col class="lighten-1 py-3 white--text text-left" cols="6">
        
        <img
          class="logo-footer-size pt-2"
          :src="require('@/assets/imgs/chile.svg')"
          alt="chile_flag"
        />
        
        &nbsp;
        {{ new Date().getFullYear() }}
      </v-col>
      <v-col class="lighten-1 py-3 white--text text-right">
        <div>
          <div class="color-logo-text">Habbo Hotel</div>&nbsp;
          Todos los derechos reservados.
        </div>
      </v-col>
    </v-row>
  </v-footer>
</template>



<script>
export default {
  data: () => ({
    icons: ["fas fa-phone", "fab fa-facebook", "fab fa-instagram"],
    item: 1
  })
};
</script>

<style scoped>
.color-logo-text {
  background: -webkit-linear-gradient(#9d7943, #e5b864, #9d7943);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.custom_link {
  text-decoration: none;
  transition: color 0.2s ease-out !important;
}

.custom_link:hover {
  background: -webkit-linear-gradient(#9d7943, #e5b864, #9d7943);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.white--text {
  color: white;
}
.light-footer-theme {
  border-color: #e5b864;
}
.logo-footer-size {
  height: 25px;
  width: 25px;
}
.custom-list-footer {
  background-color: black;
  color: white;
}
</style>