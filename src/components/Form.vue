<template>
  <v-row align="center">
    <v-form
      ref="form"
      v-model="valid"
      :lazy-validation="lazy"
    >
      <v-text-field
        v-model="rut"
        label="Rut"
        required
      ></v-text-field>
      <v-text-field
        v-model="name"
        label="Name"
        required
      ></v-text-field>
      
      <DatePicker></DatePicker>

      <v-select
        v-model="select"
        :items="carreras"
        label="Carrera"
        required
      ></v-select>
      <v-btn
        :disabled="!valid"
        color="indigo lighten-1"
        class="mr-4"
        @click="push"
      >
        Ingresar estudiante
      </v-btn>
    </v-form>
  </v-row>
</template>
<script>
  import DatePicker from "./DatePicker";
  export default {
    name: 'Form',
    components: {
    DatePicker
  },
    data: () => ({
      valid: true,
      name: '',
      rut: '',
      select: null,
      carreras: [
        'Carrera 1',
        'Carrera 2',
        'Carrera 3'
      ],
      checkbox: false,
      lazy: false,
    }),

    methods: {
      push(){

      },
    mounted: function(){

    }
    },
  }
</script>