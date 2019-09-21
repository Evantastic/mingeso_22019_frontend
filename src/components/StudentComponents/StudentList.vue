<template>
  <v-row justify="center">
    <v-dialog v-model="dialogList" persistent scrollabl max-width="800">
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
      <!--
      <v-simple-table>
        <template v-slot:default>
          <thead>
            
            <tr>
              <th class="text-left">Name</th>
              <th class="text-left">Rut</th>
              <th class="text-left">Carrera</th>
              <th class="text-left">Años</th>
              
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in studentList" :key="item.name">
              <td>{{ item.name }}</td>
              <td>{{ item.rut }}</td>
              <td>{{ item.career }}</td>
              <td>{{ item.age }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      -->
      <v-divider></v-divider>
      <v-card-actions>
      
      </v-card-actions>
    </v-dialog>
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
        headers: [{
          text: 'Postulante',
          align: 'left',
          value: 'name',
        },
        {text: 'Rut' , value: 'rut'},
        {text: 'Carrera' , value: 'career'},
        {text: 'Edad' , value: 'age'},
        
        
        
        ],
        estudiantes: []
      }
    },
    computed :{
        ...mapState("studentStore",['studentList','dialogList'])
    },
    methods: {
        ...mapMutations("studentStore",['llenarLista','setDialogList']),
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