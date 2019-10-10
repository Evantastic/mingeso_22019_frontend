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
        <v-img height="250" :src="room.img"></v-img>

        <v-card-title>{{room.title}}</v-card-title>
        <v-card-text>
          <v-row align="center mx-3">
            <v-rating :value="room.rate" color="amber" half-increments dense size="14" readonly></v-rating>

            <div class="grey--text ml-4">{{room.rate}} ({{room.number}})</div>
          </v-row>

          <div class="my-4 subtitle-1 black--text"> desde ${{room.price}} • por noche</div>

          <div>{{room.description}}</div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-text>
          <div class="title text--primary">Disponible!</div>
          <v-chip-group v-model="selection" active-class="deep-purple accent-4 white--text" column>
            <v-chip v-for="tool in room.tools" :key="tool">{{tool}}</v-chip>
          </v-chip-group>
        </v-card-text>

        <!-- <v-card-actions>
          <v-btn color="deep-purple accent-4" text @click="reserve">Reserve</v-btn>
        </v-card-actions> -->

      </v-card>
    </v-row>
  </v-content>
</template>

<script>
export default {
  data() {
    return {
      rooms: [
        {
          id: 1,
          img: "https://i.imgur.com/91xnJ46.jpg",
          title: "Suit premium plaza",
          rate: 4.5,
          number: 233,
          price: 567000,
          description: "Dos ambientes completamente equipados, cuenta con sala de estar, comedor, cocina. Además de un dormitorio con cama King size y baño en suite. Ideal para quien viaja en plan de negocios o turismo. Wifi liberado. No fumador.",
          tools : ["wifi","comedor","king","hall","Aire acondicionado","balcón","minibar"],
        },
        {
          id: 2,
          img: "https://i.imgur.com/F9wbl43.jpg",
          title: "Habitación maximum plaza",
          rate: 5,
          number: 1529,
          price: 437000,
          description: " Situadas entre la quinta y séptima planta, con balcón amueblado privado y unas vistas magníficas e inolvidables de la resplandeciente ciudad , las habitaciones ofrecen una gama de servicios y equipamiento superiores en un entorno de lujoso diseño en tonos mediterráneos.",
          tools : ["wifi","king","balcón", "Aire acondicionado", "hall" ],
        },
        {
          id: 3,
          img: "https://i.imgur.com/LJkCpXM.jpg",
          title: "Habitación medium plus",
          rate: 4,
          number: 473,
          price: 267000,
          description: "Un amplio espacio equipado para disfrutar de tu viaje en familia y negocios. Contamos con sala de estar, cocina equipada y dos dormitorios, con 2 camas y 1 baño. Wifi liberado. No fumador.",
          tools : ["wifi","comedor","king"],
        },
        {
          id: 4,
          img: "https://i.imgur.com/OCea88b.jpg",
          title: "Habitación clasic plus",
          rate: 3,
          number: 233,
          price: 189000,
          description: "Contempla la belleza de la ciudad desde éstas cálidas, elegantes y luminosas estancias. Ponemos a tu disposición habitaciones con una inmejorable vista a la conocida y tranquila belleza urbana, con gran riqueza culturales",
          tools : ["wifi","king","secador"],
        },
      ]
    };
  }
};
</script>

<style>
.img-top-margin {
  margin-top: -15%;
}
</style>