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
  import axios from "axios";
  export default {
    data () {
      return {
        estudiantes: []
      }
    },
    computed :{
        ...mapState("studentStore",['studentList'])
    },
    methods: {
        ...mapMutations("studentStore",['llenarLista']),
        ...mapActions("studentStore",['receiveStudent']),
    },
    mounted: {
      listData(){
        console.log(this.studentList);
        this.receiveStudent();
        console.log(this.studentList)
        
      }
    },
    /*
    mounted(){
      let vue = this;
      axios.get(
        "http://35.224.191.225:8081/Backend/api/rest/students?page=1&quantity=50")
        .then(function(response){
          
          vue.estudiantes = response.data.content
          //console.log(response.data.content)
        })
    }*/
  }
</script>