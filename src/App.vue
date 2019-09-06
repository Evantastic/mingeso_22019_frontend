<template>
  <v-app>
    <div>
        <v-container> 
          <Form></Form>
        </v-container>
      </div>
  </v-app>
</template>

<script>
import Form from './components/Form';
import DatePicker from "./components/DatePicker";
export default {
  name: 'App',
  components: {
    Form,
    DatePicker
  },
  data: () => ({
    //
  }),
};
</script>
