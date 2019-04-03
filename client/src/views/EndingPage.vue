<template>
  <v-container grid-list-xs text-xs-center>
    <v-layout row wrap>
      <v-flex xs12 class="display-1">
        {{$t('endPage_Text1')}}
      </v-flex>
      <v-flex xs12>
        {{$t('endPage_Text2')}}
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  mounted () {
    this.$store.dispatch('countPages', 7)// needed for stepper
    this.$store.dispatch('clearItems')
    console.log('items cleared')
  }
}
</script>

<style>

</style>
