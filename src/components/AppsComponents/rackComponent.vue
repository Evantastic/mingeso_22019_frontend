<template>
  <v-content>
    <template>
      <v-row justify="center">
        <v-dialog v-model="dateError" persistent max-width="400">
          <v-card>
            <v-container>
              <v-row justify="center" align="center">
                <v-icon color="error">fas fa-exclamation-triangle</v-icon>
              </v-row>

              <v-row justify="center" align="center" class="pb-3">
                <h3 class="font-weight-black headline">¡Error!</h3>
              </v-row>
              <v-row justify="center" align="center">
                <span
                  class="text-center"
                >La fecha de término no puede ser menor a la fecha de inicio</span>
              </v-row>
            </v-container>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text @click="dateError = false">aceptar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </template>
    <template>
      <v-row justify="center">
        <v-dialog v-model="EmptyError" persistent max-width="400">
          <v-card>
            <v-container>
              <v-row justify="center" align="center">
                <v-icon color="error">fas fa-exclamation-triangle</v-icon>
              </v-row>

              <v-row justify="center" align="center" class="pb-3">
                <h3 class="font-weight-black headline">¡Error!</h3>
              </v-row>
              <v-row justify="center" align="center">
                <span
                  class="text-center"
                >Los campos de fecha inicio y fecha fin no pueden quedar vacios</span>
              </v-row>
            </v-container>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text @click="EmptyError = false">aceptar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </template>
    <v-card max-width="auto" class="pa-5 ma-5" color="white">
      <template>
        <v-card max-width="auto" dark color="indigo" elevation="21" class="py-3 card-move-margin">
          <v-container>
            <v-row justify="center" align="center">
              <v-col>
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
                  <v-date-picker v-model="date1" no-title @input="menu1 = false"></v-date-picker>
                </v-menu>
              </v-col>

              <v-icon class="text-center px-5">fas fa-arrow-right</v-icon>

              <v-col>
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
                      label="Fecha de término de reserva"
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
              <v-col class="text-center">
                <v-btn
                  color="white"
                  outlined
                  :loading="loadingT"
                  class="black-text"
                  @click="getAllData()"
                >Filtrar</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </template>
    </v-card>

    <!-- datos -->
    <v-container>
      <v-card>
        <template>
          <v-data-table
            :headers="headers"
            :loading="loadingT"
            :items="items"
            class="elevation-1"
          >
            <!-- <template v-slot:item.room="{ item }">
              <v-chip :color="getColor(item.room)" dark>{{ item.room }}</v-chip>
            </template>-->
          </v-data-table>
        </template>
      </v-card>
    </v-container>
  </v-content>
</template>

<script>
import moment from "moment";
import { mapActions, mapState } from "vuex";
export default {
  data: vm => ({
    date1: "",
    date2: "",
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    today: new Date().toISOString().substr(0, 10),
    menu1: false,
    menu2: false,
    dateError: false,
    EmptyError: false,
    coloreatedUser: [],
    headers: [],
    items: []
  }),

  computed: {
    ...mapState("roomType", ["roomType", "loadingTy"]),
    ...mapState("reserveStore", [
      "loadingT",
      "successT",
      "errorT",
      "reservasTime"
    ]),

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
    staticToday() {
      return moment(this.today, "YYYY-MM-DD").format("DD-MM-YYYY");
    },
    staticEndDay() {
      return moment(this.today, "YYYY-MM-DD")
        .add(5, "days")
        .format("DD-MM-YYYY");
    }
  },
  watch: {
    date() {
      this.dateFormatted = this.formatDate(this.date1);
    }
  },

  async mounted() {
    await this.getRoomType();

    console.log("paso1");

    this.headers = this.getHeaders(this.staticToday, this.staticEndDay);
    console.log("paso2");

    this.items = this.placeRackRoom(this.roomType);
    console.log("paso3");

    console.log(this.headers,this.items);
  },

  methods: {
    ...mapActions("roomType", ["getRoomType"]),
    ...mapActions("reserveStore", ["getReservasByDate"]),

    getColor(user) {
      for (let index = 0; index < this.coloreatedUser.length; index++) {
        const element = this.coloreatedUser[index];

        if (user === element.user) {
          return element.color;
        }
      }
      return "white";
    },
    exitColorUser(color, array) {
      for (let index = 0; index < array.length; index++) {
        const element = array[index].color;

        if (color === element) {
          return true;
        }
      }
      return false;
    },
    getColorUser(reserves) {
      var user = [];
      var colorUser = [];

      for (let index = 0; index < reserves.length; index++) {
        const client = reserves[index].clientName;
        console.log(client, "client");
        if (!user.includes(client)) {
          user.push(client);
        }
        // ya tenemos todos los users
        console.log(user, "user");

        for (let us = 0; us < user.length; us++) {
          const elUS = user[us];

          var color = "#" + ((Math.random() * 0xffffff) << 0).toString(16);

          while (this.exitColorUser(color, colorUser)) {
            color = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
          }

          let userOBJ = { user: elUS, color: color };
          colorUser.push(userOBJ);
        }
        return colorUser;
      }
    },

    placeRackRoom(roomTypes) {
      var rooms = [];
      console.log(roomTypes)
      for (let index = 0; index < roomTypes.length; index++) {
        const element = roomTypes[index].rooms;
        rooms = rooms.concat(element);
        
      }
      
      // ya se tienen todas las habitaciones

      var itemsOBJ = [];

      for (let i = 0; i < rooms.length; i++) {
        const room = rooms[i];

        var roomOBJ = { room: room };

        itemsOBJ.push(roomOBJ);
      }
      return itemsOBJ;
    },
    getHeaders(dateInit, dateFinish) {
      var fecha1 = moment(dateInit, "DD-MM-YYYY");
      var fecha2 = moment(dateFinish, "DD-MM-YYYY");
      var fechas = [];

      let fecha_iter = fecha1;
      var fechas_obj = [];
      fechas.push("Habitación");

      let diff = fecha2.diff(fecha1, "days");

      for (let index = 0; index <= diff; index++) {
        fechas.push(fecha_iter.format("DD-MM-YYYY"));
        fecha_iter = fecha_iter.add(1, "days");
      }

      let obj = { text: "Habitación", value: "room", align: "center" };
      fechas_obj.push(obj);

      for (let index = 1; index < fechas.length; index++) {
        const element = fechas[index];

        let obj = { text: element, value: "fecha" + index, align: "center" };

        fechas_obj.push(obj);
      }
      return fechas_obj;
    },

    getDateArray(dateInit, dateFinish) {
      var fecha1 = moment(dateInit, "DD-MM-YYYY");
      var fecha2 = moment(dateFinish, "DD-MM-YYYY");
      var fechas = [];

      let fecha_iter = fecha1;

      let diff = fecha2.diff(fecha1, "days");

      for (let index = 0; index <= diff; index++) {
        fechas.push(fecha_iter.format("DD-MM-YYYY"));
        fecha_iter = fecha_iter.add(1, "days");
      }
      return fechas;
    },

    mergeObject(obj, array) {
      var flag = 0;
      for (let index = 0; index < array.length; index++) {
        const element = array[index].room;

        if (element === obj.room) {
          array[index] = { ...array[index], ...obj };
          flag = 1;
        }
      }
      if (flag === 0) {
        array.push(obj);
      }
      return array;
    },
    async getAllData() {
      var fecha1 = moment(this.computedDateFormatted1, "DD-MM-YYYY");
      var fecha2 = moment(this.computedDateFormatted2, "DD-MM-YYYY");

      var data_1 = this.computedDateFormatted1;
      var data_2 = this.computedDateFormatted2;

      var payloadOBJ = { start: data_1, end: data_2 };

      if (fecha2.diff(fecha1, "days") < 0) {
        this.dateError = true;
      }
      else if (this.date1 === "" && this.date2 === "") {
        this.EmptyError = true;
        
      }
       else {
        await this.getReservasByDate(payloadOBJ);

        this.headers = this.getHeaders(data_1, data_2);

        this.items = this.getItems(this.reservasTime, this.headers);

        //this.coloreatedUser = this.getColorUser(this.reservasTime);
      }

      this.computedDateFormatted1= "";
      this.computedDateFormatted2= "";
      this.date1= "";
      this.date2= "";
    },

    getItemObject(reserva, headers) {
      var dates = this.getDateArray(reserva.startDate, reserva.endDate);

      var item = {};
      item.room = reserva.roomNumber;

      for (let index = 0; index < headers.length; index++) {
        const element = headers[index].text;
        const value = headers[index].value;

        for (let index_reser = 0; index_reser < dates.length; index_reser++) {
          const day = dates[index_reser];

          if (element === day) {
            item[value] = reserva.clientName;
          }
        }
      }
      return item;
    },

    getItems(reserves, headers) {
      var rooms = [];
      var items = this.placeRackRoom(this.roomType);
      for (let index = 0; index < reserves.length; index++) {
        const element = reserves[index].roomNumber;

        if (!rooms.includes(element)) {
          rooms.push(element);
        }
      }
      // hasta aca tengo todas las habitaciones

      for (let index = 0; index < rooms.length; index++) {
        const room = rooms[index];

        for (
          let index_reserves = 0;
          index_reserves < reserves.length;
          index_reserves++
        ) {
          const reserva = reserves[index_reserves];

          if (reserva.roomNumber === room) {
            var item = this.getItemObject(reserva, headers);
            items = this.mergeObject(item, items);
          }
        }
      }
      return items;
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
.card-move-margin {
  margin-top: -4%;
}
</style>