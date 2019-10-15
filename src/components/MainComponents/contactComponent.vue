<template>
  <v-content>
    <v-snackbar v-model="success" color="success" :bottom="true">
      {{ 'Información exitosamente'}}
      <v-btn color="white" text @click="setSuccess(null)">Cerrar</v-btn>
    </v-snackbar>
    <v-snackbar v-model="error" color="error" :bottom="true">
      {{ 'No se ha podido enviar la información'}}
      <v-btn color="white" text @click="setSuccess(null)">Cerrar</v-btn>
    </v-snackbar>
    <v-row align="center" justify="center" class="mt-3">
      <h1 class="font-italic font-weight-light display-3">Contáctanos</h1>
    </v-row>
    <v-row align="center" justify="center" class="mt-3">
      <v-img :src="require('@/assets/imgs/super-divider.svg')" max-height="600" max-width="500"></v-img>
    </v-row>
    <v-container>
      <v-row justify="center" class="py-5">
        <h1
          class="text-center font-weight-blod headline pa-4 pb-5 mb-4"
        >¿Tienes dudas? Ponte en contacto con nosotros.</h1>
      </v-row>
      <v-row align="start" justify="center" class="mt-3">
        <v-col class="text-center">
          <v-img
            class="custom-img-contact mr-4"
            :src="require('@/assets/imgs/contact.svg')"
            max-width="600"
          ></v-img>
        </v-col>

        <v-col class="mt-5">
          <v-form ref="form" v-model="valid">
            <v-row>
              <v-col>
                <v-text-field
                  v-model="name"
                  :rules="nameRules"
                  label="Nombre y apellidos"
                  :counter="70"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <!-- -->
            <v-row>
              <v-col>
                <v-text-field v-model="email" :rules="emailRules" label="Correo" required></v-text-field>
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
            <v-row>
              <v-textarea v-model="comment" :rules="detailRules" color="teal">
                <template v-slot:label>
                  <div>Comentarios</div>
                </template>
              </v-textarea>
            </v-row>
            <v-row>
              <v-btn block color="#e5b864" :loading="loading" :disabled="!valid" @click="sendData();resetForm()">Enviar</v-btn>
            </v-row>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      phone: "",
      valid: true,
      name: "",
      email: "",
      comment: "",
      nameRules: [
        v => !!v || "El nombre es requerido",
        v =>
          /^[a-zA-ZñáéíóúüÁÉÍÓÚÚÑ]+[a-zA-Z ñáéíóúüÁÉÍÓÚÚÑ]*$/.test(v) ||
          "El nombre debe ser válido",
        v => v.length <= 70 || "El máximo de caracteres es 70"
      ],
      detailRules: [v => !!v || "El comentario es requerido"],

      emailRules: [
        v => !!v || "El correo es requerido",
        v =>
          /^(([^<>()\\.,;:\s@"]+(\.[^<>()\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            v
          ) || "El correo debe ser válido"
      ],
      phoneRules: [
        v => !!v || "El número de teléfono es requerido",
        v =>
          /^[+]{1}[5]{1}[6]{1}\d{9}$/.test(v) ||
          "El número debe ser del tipo +56XXXXXXXXX"
      ]
    };
  },
  computed: {
    ...mapState("contactStore", ["loading", "error", "success"])
  },
  methods: {
    ...mapMutations("contactStore", [
      "setName",
      "setEmail",
      "setPhone",
      "setDetails",
      "setLoading",
      "setSuccess",
      "setError",
    ]),
    ...mapActions("contactStore", ["postContact"]),

    resetForm() {
      this.$refs.form.reset();
      this.name = "";
      this.email = "";
      this.phone = "";
      this.comment = "";
    },

    sendData() {
      this.setName(this.name);
      this.setEmail(this.email);
      this.setPhone(this.phone);
      this.setDetails(this.comment);

      this.postContact();
    }
  }
};
</script>

<style>
.custom-img-contact {
  margin-top: -10%;
}
</style>