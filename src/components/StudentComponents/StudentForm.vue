<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="700">
      <v-snackbar
        v-model=success
        color=success
        bottom=true
        timeout="6000"
      >
        {{ 'Postulación realizada exitosamente'}}
      <v-btn
        color="white"
        text
        @click=setSuccess(false)
      >
        Close
      </v-btn>
    </v-snackbar>
      <template>
        <v-card class="pa-5">
          <v-form ref="form" v-model="valid" >
            <!-- Nombre -->
            <v-text-field v-model="firstName" :rules="nameRules" label="Nombre postulante" required></v-text-field>
            <v-text-field v-model="lastName" :rules="nameRules" label="Apellido postulante" required></v-text-field>

            <!-- -->

            <v-text-field v-model="rut" :rules="rutRules" label="Rut" required></v-text-field>

            
                <v-menu
                  ref="menuDate"
                  v-model="menuDate"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  full-width
                  max-width="290px"
                  min-width="290px"
                  
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="dateFormatted"
                      label="Fecha de nacimiento"
                      hint="En formato : dd-mm-aaaa"
                      persistent-hint
                      @blur="date = parseDate(dateFormatted)"
                      v-on="on"
                      :rules="dateRules"
                      required
                      class="pb-5"
                    ></v-text-field>
                  </template>
                  <!-- <v-date-picker v-model="date" no-title @input="menuDate = false"></v-date-picker>-->
                </v-menu>
              

            <v-autocomplete
              v-model="select"
              :rules="[() => !!select || 'La carrera es requerida']"
              :items="items"
              label="Carrera"
              placeholder="Elige la carrera"
              required
              hide-no-data
            ></v-autocomplete>

            <v-btn :disabled="!valid" color="success" class="mr-4" @click=sendCompleteInfo();resetForm();receiveStudent() :loading="this.loading">Enviar</v-btn>

            <v-btn color="error" class="mr-4" @click="closeForm">Volver</v-btn>
          </v-form>
        </v-card>
      </template>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import dataUsach from "@/data/carreras.json";

export default {
  data: vm => ({
    date: new Date().toISOString().substr(0, 10),
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    menuDate: false,
    valid: true,
    firstName: "",
    lastName: "",
    nameRules: [v => !!v || "El nombre es requerido"],
    rut: "",
    rutRules: [
      v => !!v || "El rut es requerido",
      v =>
        /^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(v) ||
        "El rut debe ser valido (XXXXXXXXX-X)"
    ],
    dateRules: [v => !!v || "La fecha de nacimiento es requerida"],
    select: null,
    items: dataUsach.carreras,
    checkbox: false
  }),
  created() {
      this.date=null;
  },
  computed: {
    ...mapState("studentStore", ["dialog","loading","success"]),
    computedDateFormatted() {
      return this.formatDate(this.date);
    }
  },
  watch: {
    date() {
      this.dateFormatted = this.formatDate(this.date);
    }
  },
  methods: {
    ...mapMutations("studentStore", ["setDialog","setCareer","setFirstName","setLastName","setBirth","setRut","setSuccess"]),
    ...mapActions("studentStore", ["sendStudent","receiveStudent"]),

    resetForm(){
      this.$refs.form.reset()
      this.setSuccess(false)
    },
    sendCompleteInfo(){

      //console.log(this.name,this.rut, this.select);
      this.setCareer(this.select);
      this.setFirstName(this.firstName);
      this.setLastName(this.lastName);
      this.setBirth(this.dateFormatted);
      this.setRut(this.rut);

      this.sendStudent();
    },

    closeForm () {
        this.$refs.form.reset();
        this.setDialog(false);
    },

    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${day}/${month}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    }
  }
};
</script>

<style>
</style>