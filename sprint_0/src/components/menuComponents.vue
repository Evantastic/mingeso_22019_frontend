<template>
  <v-menu bottom offset-y>
    <template v-slot:activator="{ on }">
      <v-btn icon v-on="on">
        <v-icon>fas fa-bars</v-icon>
      </v-btn>
    </template>

    <v-list>
      <v-list-item v-for="(item, index) in items" :key="index">
        <v-list-item-title>
          <v-btn
            :to="item.route"
            text
            exact
            flat
            :ripple="false"
            exact-active-class="active-all"
            class="custom-menu-btn text-right "
          >{{ item.title }}</v-btn>
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: "Inicio", route: "/" },
      { title: "Estudiantes", route: "/students" }
    ]
  })
};
</script>

<style scoped>
.custom-menu-btn {
  height: 50px !important;
  -webkit-transition: none !important;
  -moz-transition: none !important;
  -o-transition: none !important;
  transition: color 0.4s ease-out !important;
}

.custom-menu-btn:before {
  color: transparent;
}
.custom-menu-btn:hover {
  color:blue;
}

.active-all {
  background-image: url("../assets/imgs/signal.svg");
  background-size: 12px 20px;
  background-position: 0% 45%;
}


</style>