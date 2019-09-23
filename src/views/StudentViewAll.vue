<template>
  <v-container class="custom-padding">
    <v-row class="py-5" justify="space-c" no-gutters>
      <v-btn color="secondary" class="mr-4" to="/students">
        <v-icon class="pr-3">fas fa-angle-left</v-icon>Volver
      </v-btn>
    </v-row>
    <v-row v-if="loadingG">
      <v-text-field color="secondary" loading disabled></v-text-field>
    </v-row>

    <div v-if="!loadingG">
      <v-card class="mx-auto py-3" v-for="student in studentList[page-1]" :key="student.id">
        <v-row justify="center" no-gutters>
          <v-col>
            <v-subheader class="caption gray--text">Nombre</v-subheader>
            <span class="font-weight-regular px-3">{{ student.firstName }}</span>
          </v-col>

          <v-col>
            <v-subheader class="caption gray--text">Apellidos</v-subheader>
            <span class="font-weight-regular px-3">{{ student.lastName }}</span>
          </v-col>

          <v-col>
            <v-subheader class="caption gray--text">Rut</v-subheader>
            <span class="font-weight-regular px-3">{{ student.rut }}</span>
          </v-col>

          <v-col>
            <v-subheader class="caption gray--text">Fecha de nacimiento</v-subheader>
            <span class="font-weight-regular px-3">{{ student.birth }}</span>
          </v-col>

          <v-col>
            <v-subheader class="caption gray--text">Carrera</v-subheader>
            <span class="font-weight-regular px-3 text-center justify-center">{{ student.career }}</span>
          </v-col>
        </v-row>
      </v-card>
    </div>

    <div v-if="studentList[page-1].length === 0">
      <v-card class="mx-auto py-3">
        <v-row justify="center" no-gutters>
           No hay datos para ser mostrados
        </v-row>
      </v-card>
    </div>

    <v-row class="py-5" justify="center" no-gutters>
      <v-btn
        color="secondary"
        outlined
        :disabled="page === 1"
        class="mx-4"
        @click="setPage(page-1)"
      >
        <v-icon class="pr-3">fas fa-angle-left</v-icon>anterior
      </v-btn>

      <v-btn disabled color="secondary text-center" outlined>{{page}}</v-btn>

      <v-btn color="secondary" :disabled="studentList[page-1].length === 0" outlined class="mx-4" @click="loadingItems">
        siguiente
        <v-icon class="pl-3">fas fa-angle-right</v-icon>
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
import { mapMutations } from "vuex";
import { mapState } from "vuex";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      search: "",
      item: 1,
      maxPage: 0
    };
  },
  computed: {
    ...mapState("studentStore", [
      "studentList",
      "dialogList",
      "page",
      "loadingG",
      "successG"
    ])
  },
  methods: {
    ...mapMutations("studentStore", [
      "llenarLista",
      "setDialogList",
      "setPage"
    ]),
    ...mapActions("studentStore", ["receiveStudent"]),

    loadingItems() {
      this.maxPage = this.studentList.length;
      if (this.page === this.maxPage) {
        this.receiveStudent();
      } else {
        this.setPage(this.page + 1);
      }
      console.log(this.page, "hola");
    },

    closeList() {
      this.setDialogList(false);
    }
  },
  mounted() {
    if (this.studentList.length === 0) {
      this.receiveStudent(); 
    }
  }
};
</script>
<style scoped>
.custom-padding {
  padding: 50px;
}
</style>
