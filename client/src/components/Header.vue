<template>
  <v-container id="header" fluid pa-0>
    <v-layout>
      <v-flex xs2 pa-3>
        <img src="../assets/img/UniLogo.svg" alt="Uni Logo" height="70">
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex xs8 lg6 pa-2>
        <stepper />
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import Stepper from '@/components/Stepper.vue'

export default {
  components: {
    Stepper
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#header {
  max-height: fit-content;
}
</style>
