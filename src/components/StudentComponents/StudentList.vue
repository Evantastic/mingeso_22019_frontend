<template>
  <v-row justify="center">
    <v-dialog v-model="dialogList" persistent max-width="700">
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
      <v-btn color="error" class="mr-4" @click="closeList">Volver</v-btn>
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