<template>
  <v-btn
@click="nextPage(newPath)"
  color="primary"
  :disabled=isDisabled
>
  {{$t('common_nextButton')}}
</v-btn>
</template>

<script>
export default {
  props: {
    newPath: String,
    isDisabled: Boolean
  },
  methods: {
    /**
     * @param newPath the path to be routed to
     */
    nextPage (newPath) {
      this.$router.push({ path: newPath })
    }
  }
}
</script>

<style>
button{
  color: #fff !important;
}
</style>
