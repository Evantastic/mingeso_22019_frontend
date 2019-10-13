<template>
  <v-card max-width="auto" dark color="indigo">
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
                label="Date"
                hint="MM/DD/YYYY format"
                persistent-hint
                prepend-icon="fas fa-calendar-alt"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date1" no-title @input="menu1 = false"></v-date-picker>
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
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="computedDateFormatted2"
                label="Date (read only text field)"
                hint="MM/DD/YYYY format"
                persistent-hint
                prepend-icon="fas fa-calendar-alt"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date2" no-title @input="menu2 = false"></v-date-picker>
          </v-menu>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data: vm => ({
    date1: new Date().toISOString().substr(0, 10),
    date2: new Date().toISOString().substr(0, 10),
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    menu1: false,
    menu2: false
  }),

  computed: {
    computedDateFormatted1() {
      return this.formatDate(this.date1);
    },
    computedDateFormatted2() {
      return this.formatDate(this.date2);
    }
  },

  watch: {
    date() {
      this.dateFormatted = this.formatDate(this.date1);
      
    }
  },

  methods: {
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    }
  }
};
</script>