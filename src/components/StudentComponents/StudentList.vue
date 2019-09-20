<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Rut</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in studentList" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.rut }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
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
        ...mapState(['studentList'])
    },
    methods: {
        ...mapActions(['receiveStudent']),
        ...mapMutations(['llenarLista']),
        
    }
  }
</script>