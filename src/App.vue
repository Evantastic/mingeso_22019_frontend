<template>
  <!-- todo template debe tener un archivo root por defecto, solo 1 -->
  <!-- en este caso tenemos toda la aplicación -->

  <v-app id="app_background">
    <!-- hacemos uso del componente importado antes -->
    <!-- tambien podemos llamarlo de la forma : <navbar />  -->

    <navbar></navbar>

    <!-- notemos que luego del componente de navbar viene el cuerpo -->

    <!-- para el cuerpo utilizamos <v-content> propio de vuetify -->
    <v-content>
      <!-- el routerview hace referencia a todos los path y componenten en "router" -->
      <!-- router-view mostrará la pagina actual dependiendo de la ruta que se tenga en el navegador -->

      <router-view />
    </v-content>

    <!-- luego del cuerpo utilizamos el footer como componente final, (podriamos usar otro)  -->

    <Footer></Footer>
  </v-app>
</template>

<script>
import navbar from "./components/navbar";
import Footer from "./components/footer";

export default {
  name: "App",
  components: {
    navbar,
    Footer
  },
  data: () => ({
    //
  }),
  mounted() {
    console.log(this.$vuetify.breakpoint);
  }
};
</script>


<style scoped>
/* un estilo con scoped solo afectará a los componentes dentro de este archivo .vue */

/* los "." hacen referencia a las clases
   los "#" hacen referencia a los id´s
 */

/* La clase back-img no se usa XD -> se cambio por un parallax */
.back-img {
  background-image: url("./assets/imgs/back-connect.svg");
  background-repeat: no-repeat;
  background-size: 100% auto;
}

#app_background {
  background-color: #f1f0ee;
}
</style>