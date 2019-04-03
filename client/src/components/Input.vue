<template>
    <v-text-field v-model="input.model" :label="$t(input.label)" :title="$t(input.label)" :fieldname="input.fieldname" :counter="10" maxlength="10"></v-text-field>
</template>

<script>
import _ from 'lodash'

export default {
  props: ['input'],
  watch: {
    input: {
      /**
       * @param val the value of the selected input.
       * @description adds or removes the category belonging to the selected input to/from the store, along with the entered name.
       * @see {@link https://lodash.com/docs/4.17.11#debounce}
       */
      handler: _.debounce(function (val) {
        var isFilled = this.$store.state.selecteditems.items.find(function (el) {
          return el.inputField === val.fieldname
        })
        var arr = { input: val.model, inputField: val.fieldname, db_table_name: val.db_table_name }

        if (!isFilled) { // if no -> put in store
          this.$store.dispatch('addPersonToItems', arr)
        } else { // if yes -> alter stored value
          this.$store.dispatch('alterPerson', arr)
        }
      }, 500),
      deep: true
    }
  },
  methods: {
    /**
    @param field the device to be looked up within the store.
    @returns true if the category was selected previously. this is need in case the user uses the browsers back button.
     */
    inStore (field) {
      var isFilled = this.$store.state.selecteditems.items.findIndex(function (el) {
        return el.inputField === field
      })
      if (isFilled !== -1) this.input.model = this.$store.state.selecteditems.items[isFilled].name
    }
  },
  mounted () {
    this.inStore(this.input.fieldname)
  }
}
</script>

<style>

</style>
