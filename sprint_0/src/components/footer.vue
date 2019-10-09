    
<template>
  <v-footer height="auto" color="black" class="lighten-1 text-center">
    <v-row justify="center" align="center" class="pt-5 px-4">
      <v-col cols="12" lg="6" xl="6">
        <v-row align="center">
          <v-img
            class="test"
            :src="require('@/assets/logo-black.svg')"
            max-height="35"
            max-width="35"
          ></v-img>
          <!-- espacios -->
          &nbsp;
          &nbsp;
          <!-- fin espacios -->
          <span class="headline text-uppercase white--text">
            <strong>DevOps|</strong>
          </span>
          <span class="headline text-uppercase white--text font-weight-light">Grupo 3</span>
        </v-row>
        &nbsp;
        &nbsp;
        <v-row >
           <span class="white--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident rem aspernatur soluta molestias? Suscipit, tenetur perspiciatis officiis expedita quibusdam dolore ratione assumenda libero sequi. Aliquam tempore suscipit quos rem explicabo.</span>
        </v-row>
      </v-col>

      <v-col cols="12" lg="6" xl="6">
        <v-row justify="center" align="center">
          <v-col lighten-1 class="text-xs-center py-1" >
            <v-btn v-for="icon in icons" :key="icon" class="mx-4 my-4 white--text" icon>
              <v-icon class="custom_link" size="35px">{{ icon }}</v-icon>
            </v-btn>
          </v-col>

          <v-divider class="light-footer-theme" vertical></v-divider>

          <v-col class="text-center white--text"  >
            <h2 class="text-center " display-3><a class="custom_link white--text" href="/">Comentarios sobre el sitio</a></h2>
          </v-col>
        </v-row>
      </v-col>
      <v-col class="lighten-1 pt-5 text-xs-center white--text" cols="12">
        <v-divider class="light-footer-theme"></v-divider>
      </v-col>

      <v-col class="lighten-1 py-3 white--text text-left" cols=6>
        <img
          class="logo-footer-size pt-2"
          :src="require('@/assets/imgs/chile.svg')"
          alt="chile_flag"
        />
        &nbsp;
        {{ new Date().getFullYear() }}
      </v-col>
      <v-col class="lighten-1 py-3 white--text text-right" cols=6>
        <strong>DevOps|</strong>Grupo 3
        &nbsp;
        Todos los derechos reservados.
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

.custom_link {
  text-decoration: none;
  transition: color 0.2s ease-out !important;
}

.custom_link:hover {
  color : #2196F3 !important ; 
}

.white--text {
  color: white;
}

.light-footer-theme {
  border-color: rgba(255, 255, 255, 0.77);
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