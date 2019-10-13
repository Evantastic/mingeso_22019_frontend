<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-row justify="center" align="center" class="py-3">
          <v-avatar size="45px" class="px-3" color="grey">
            <strong>H</strong>A
          </v-avatar>
          &nbsp;

          <span>Habbo|</span>
          <span class="font-weight-light">App</span>
        </v-row>
        <v-divider class="mx-5"></v-divider>
        <v-list-item class="py-3">
          <v-btn text block class="justify-start" active-class="btn-active"  to="/app"><v-icon class="mr-3">fas fa-home
            </v-icon> Inicio </v-btn>
        </v-list-item>
        <v-list-item class="  py-3">
          <v-btn text block class="justify-start" active-class="btn-active"  to="/"><v-icon class="mr-3">fas fa-hotel
            </v-icon> Página principal </v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import { mapState } from 'vuex';

export default {

computed: {
  ...mapState("appRootStore",["drawer"]),
},
}
</script>

<style scoped>
.btn-active {
  background-color: #DEE1FC;
}
</style>