<template>
  <v-overlay opacity="0.7" :value="loading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
</template>

<script>
import { mapState } from 'vuex';
export default {

computed: {
    ...mapState("roomStore",["loading"]),
}
}
</script>

<style>

</style>