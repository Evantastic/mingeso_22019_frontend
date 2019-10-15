<template>
  <v-overlay opacity="0.7" :value="loadingTy">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
</template>

<script>
import { mapState } from 'vuex';
export default {

computed: {
    ...mapState("roomType",["loadingTy"]),
}
}
</script>

<style>

</style>