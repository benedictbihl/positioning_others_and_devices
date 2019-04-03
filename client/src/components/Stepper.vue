<template>
  <v-stepper :value="activeStep">
    <v-stepper-header>
      <template v-for="(step, index) in steps">
        <v-stepper-step :key="index +'1'" :complete="steps[index].stepcomplete" :step="index+1"></v-stepper-step>
        <v-divider :key="index" v-if="index != steps.length-1"></v-divider>
      </template>
    </v-stepper-header>
  </v-stepper>
</template>
<script>
import _ from 'lodash'
export default {
  name: 'Stepper',
  data: () => ({
    activeStep: '',
    steps: [
      { stepcomplete: false },
      { stepcomplete: false },
      { stepcomplete: false },
      { stepcomplete: false },
      { stepcomplete: false },
      { stepcomplete: false },
      { stepcomplete: false }
    ]
  }),
  computed: {
    counter () {
      return this.$store.state.pagecount.pagecount
    }
  },
  watch: {
    counter () { // refresh stepper on route change
      this.activeStep = this.counter
      _.forEach(this.steps, function (el, key) {
        el.stepcomplete = false
      })
      for (var i = 0; i < this.counter - 1; i++) {
        this.steps[i].stepcomplete = true
      }
    }
  }
}
</script>

<style scoped lang="scss">

.v-stepper {
  background: none !important;
  box-shadow: none !important;
  *{
  box-shadow: none !important;
  }
}

.v-stepper__step--active .v-stepper__step__step.primary {
  background-color: #689F38;
}
</style>
