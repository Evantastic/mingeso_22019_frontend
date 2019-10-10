<template>
  <v-row justify="center">
      <v-card class="pa-9">
        <v-card-title>
          Postulaciones
          <div class="flex-grow-1"></div>
            <v-text-field
            v-model="search"
            label="Search"
            single-line
            hide-details
            ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="studentList"
          :search="search"
      ></v-data-table>
      <v-btn color="secondary" class="mr-5" @click="closeList">Volver</v-btn>
      </v-card>
      <v-divider></v-divider>
      <v-card-actions>
      </v-card-actions>
  </v-row>
</template>
<script>
  import { mapMutations } from "vuex";
  import { mapState } from "vuex";
  import { mapActions } from "vuex";
  export default {
    data () {
      return {
        search: '',
        page: 0,
        headers: [{
          text: 'Nombre',
          align: 'left',
          value: 'firstName',
        },
        {text: 'Apellido' , value: 'lastName'},
        {text: 'Rut' , value: 'rut'},
        {text: 'Carrera' , value: 'career'},
        {text: 'Fecha de Nacimiento' , value: 'birth'},
        
        
        
        ],
        estudiantes: []
      }
    },
    computed :{
        ...mapState("studentStore",['studentList','dialogList'])
    },
    methods: {
        ...mapMutations("studentStore",['llenarLista','setDialogList','setPage']),
        ...mapActions("studentStore",['receiveStudent']),
        closeList () {
          this.setDialogList(false);
        }
    },
    mounted() {
      this.receiveStudent();
    },
  }
</script>