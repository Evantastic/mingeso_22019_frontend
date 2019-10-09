<template>
  <v-container class="pa-5">

    <studentform></studentform>

    <v-row justify="start">
      <h1
        class="mx-3 py-5"
        :class="$vuetify.breakpoint.smAndDown ? 'text-center' : '' "
      >Sistema de registro de Estudiantes</h1>
    </v-row>

    <v-row class="py-5" justify="center" align="center">
      <v-img :src="require('@/assets/imgs/students.svg')" max-height="600" max-width="600"></v-img>
    </v-row>


    <v-row class="pa-5" justify="center" align="center">

      <v-col class="text-center" >
        <v-btn block height="70" color="secondary" @click="setDialog(true)"  >
          Nueva Postulación
        </v-btn>
      </v-col>

      <v-col v-if="$vuetify.breakpoint.width <= 498" cols=12>
      <v-divider></v-divider>
      </v-col>

      <v-col class="text-center">
        <v-btn block height="70"  outlined color="secondary" to="/students/all">
          Ver Postulaciones
        </v-btn>
      </v-col>

    </v-row>





  </v-container>
</template>

<script>

import studentform from "@/components/StudentComponents/StudentForm";
import { mapMutations } from "vuex";

export default {

  components: {
    studentform,
  },
  methods: {
        ...mapMutations('studentStore',['setDialog','setDialogList']),
        
  },
};
</script>

<style >
.custom-container {
  height: 800px;
}
</style>