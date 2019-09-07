<template>
  <v-container>
    <div id="app">
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item @click="">
          <v-list-item-action>
            
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              <router-link to="/postulantsForm">Formulario</router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="">
          <v-list-item-action>
            
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              <router-link to="/postulantsList">RutaList</router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container
        fluid
        fill-height
      >
        <v-layout
          align-center
          justify-center
        >
        <router-view/>
          <v-flex text-xs-center>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</div>
  </v-container>
</template>

<script>
import Home from './views/Home';
export default {
  name: 'App',
  components: {
    Home
  },
  data: () => ({
    drawer: null
  }),
};
</script>
