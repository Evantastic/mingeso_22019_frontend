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
            class="custom-menu-btn text-right"
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

  font-size: 17px;
  font-weight: bold;
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
</style>