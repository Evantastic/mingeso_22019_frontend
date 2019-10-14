<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="700">
      <v-snackbar v-model="success" color="success" :bottom="true">
        {{ 'Reserva realizada exitosamente'}}
        <v-btn color="white" text @click="setSuccess(null)">Cerrar</v-btn>
      </v-snackbar>
      <v-snackbar v-model="error" color="error" :bottom="true">
        {{ 'No se ha podido realizar la reserva'}}
        <v-btn color="white" text @click="setSuccess(null)">Cerrar</v-btn>
      </v-snackbar>

      <template>
        <v-card class="pa-5">
          <h1>Nueva Reserva</h1>
          <v-divider></v-divider>
          <v-form ref="form" v-model="valid">
            <!-- Nombre -->
            <v-row>
              <v-col>
                <v-text-field
                  v-model="name"
                  :rules="nameRules"
                  label="Nombre y apellidos del huésped"
                  required
                  
                ></v-text-field>
              </v-col>
            </v-row>
            <!-- -->
            <v-row>
              <v-col>
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="Correo del huésped"
                  required
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  v-model="phone"
                  :rules="phoneRules"
                  label="Número de teléfono"
                  required
                ></v-text-field>
              </v-col>
            </v-row>

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
                  label="Fecha de nacimiento huésped"
                  hint="En formato : dd-mm-aaaa"
                  persistent-hint
                  v-on="on"
                  prepend-icon="fas fa-calendar-alt"
                  :rules="dateRules"
                  required
                  class="pb-5"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" no-title @input="menuDate = false"></v-date-picker>
            </v-menu>

            <template>
              <v-card max-width="auto" dark color="indigo" class="py-3">
                <v-container>
                  <v-row>
                    <v-col cols="12" lg="6">
                      <v-menu
                        ref="menu1"
                        v-model="menu1"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-y
                        full-width
                        max-width="290px"
                        min-width="290px"
                      >
                        <template v-slot:activator="{ on }">
                          <v-text-field
                            v-model="computedDateFormatted1"
                            label="Fecha inicio de reserva"
                            hint="En formato : dd-mm-aaaa"
                            persistent-hint
                            prepend-icon="fas fa-calendar-alt"
                            v-on="on"
                            required
                          ></v-text-field>
                        </template>
                        <v-date-picker
                          v-model="date1"
                          :min="todayD"
                          no-title
                          @input="menu1 = false"
                        ></v-date-picker>
                      </v-menu>
                    </v-col>

                    <v-col cols="12" lg="6">
                      <v-menu
                        v-model="menu2"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-y
                        full-width
                        max-width="290px"
                        min-width="290px"
                        :disabled="computedDateFormatted1 === null"
                      >
                        <template v-slot:activator="{ on }">
                          <v-text-field
                            v-model="computedDateFormatted2"
                            label="Fecha de termino de reserva"
                            hint="En formato : dd-mm-aaaa"
                            persistent-hint
                            prepend-icon="fas fa-calendar-alt"
                            readonly
                            v-on="on"
                            required
                            :disabled="computedDateFormatted1 === null"
                          ></v-text-field>
                        </template>
                        <v-date-picker
                          v-model="date2"
                          :disabled="computedDateFormatted1 === null"
                          :min="tommorowD"
                          no-title
                          @input="menu2 = false"
                        ></v-date-picker>
                      </v-menu>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-autocomplete
                      class="mx-5 py-3"
                      v-model="select"
                      :rules="[() => !!select || 'La habitación es requerida']"
                      :items="items"
                      label="Habitación"
                      placeholder="Elige el tipo de habitación"
                      required
                      hide-no-data
                    ></v-autocomplete>
                  </v-row>
                </v-container>
              </v-card>
            </template>
            <div class="py-4">
              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="sendCompleteInfo();resetForm()"
                :loading="this.loading"
              >Enviar</v-btn>

              <v-btn color="error" class="mr-4" @click="closeForm">Volver</v-btn>
            </div>
          </v-form>
        </v-card>
      </template>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data: vm => ({
    vm,
    today: new Date().toISOString().substr(0, 10),
    date: null,
    date1: null,
    date2: null,
    phone: "",
    menuDate: false,
    menu1: "",
    menu2: "",
    valid: true,
    name: "",
    nameRules: [v => !!v || "El nombre es requerido",
                v=> /^[a-zA-Z ]+$/.test(v) || "El nombre debe ser válido",
                v => v.length <= 70 || "El máximo de caracteres es 70" ],
    email: "",
    emailRules: [
      v => !!v || "El correo es requerido",
      v =>
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ .test(v) || "El correo debe ser válido"
    ],
    dateRules: [
      v => !!v || "La fecha es requerida",
      v =>
        /^(0?[1-9]|[12][0-9]|3[01])[/-](0?[1-9]|1[012])[/-]\d{4}$/.test(v) ||
        "La fecha debe ser válida"
    ],
    phoneRules: [
      v => !!v || "El número de teléfono es requerido",
      v =>
        /^[+]{1}[5]{1}[6]{1}\d{9}$/.test(v) ||
        "El número debe ser del tipo +56XXXXXXXXX"
    ],
    select: null,
    checkbox: false
  }),
  computed: {
    ...mapState("reserveStore", ["dialog", "success", "error", "loading"]),
    ...mapState("roomStore", ["rooms"]),

    todayD() {
      return this.todayDate(this.today);
    },
    tommorowD() {
      return this.tommorowDate(this.date1);
    },
    computedDateFormatted() {
      return this.formatDate(this.date);
    },
    computedDateFormatted1() {
      return this.formatDate(this.date1);
    },
    computedDateFormatted2() {
      return this.formatDate(this.date2);
    },
    items() {
      let items = [];
      for (let index = 0; index < this.rooms.length; index++) {
        const element = this.rooms[index].title;
        items.push(element);
      }
      return items;
    }
  },
  watch: {
    date() {
      this.dateFormatted = this.formatDate(this.date);
    }
  },
  methods: {
    ...mapMutations("reserveStore", [
      "setDialog",
      "setSuccess",
      "setStartDate",
      "setEndDate",
      "setName",
      "setBirth",
      "setEmail",
      "setPhone",
      "setRoomId"
    ]),
    ...mapActions("reserveStore", ["postReserva"]),

    getRoomID(room) {
      for (let index = 0; index < this.rooms.length; index++) {
        const element = this.rooms[index].title;
        if (element === room) {
          return this.rooms[index].id;
        }
      }
    },

    resetForm() {
      this.$refs.form.reset();
      this.date1 = null;
      this.date2 = null;
      this.date = null;
      this.computedDateFormatted = null;
      this.computedDateFormatted1 = null;
      this.computedDateFormatte2 = null;
    },
    sendCompleteInfo() {
      this.setStartDate(this.computedDateFormatted1);

      this.setEndDate(this.computedDateFormatted2);

      this.setName(this.name);

      this.setBirth(this.computedDateFormatted1);

      this.setEmail(this.email);

      this.setPhone(this.phone);

      this.setRoomId(this.getRoomID(this.select));

      this.postReserva();
    },
    closeForm() {
      this.$refs.form.reset();
      this.setDialog(false);
      this.date1 = null;
      this.date2 = null;
      this.date = null;
      this.computedDateFormatted = null;
      this.computedDateFormatted1 = null;
      this.computedDateFormatte2 = null;
    },
    todayDate(date) {
      if (!date) return null;
      var [year, month, day] = date.split("-");
      day = day - 1;
      return `${year}-${month}-${day}`;
    },
    tommorowDate(date) {
      if (!date) return null;
      var [year, month, day] = date.split("-");
      day = day + 1;
      return `${year}-${month}-${day}`;
    },
    formatDate(date) {
      if (!date) return null;
      const [year, month, day] = date.split("-");
      return `${day}-${month}-${year}`;
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
