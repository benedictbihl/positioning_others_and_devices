<template>
    <v-checkbox v-model="device.model" :label="$t(device.label)" color="secondary"></v-checkbox>
</template>

<script>

export default {
  props: ['device'],
  watch: {
    device: {
      /**
       * @param val {boolean} the value of the selected input.
       * @description adds or removes the device belonging to the selected input to/from the store
       */
      handler: function (val) {
        var name
        if (val.name) { // check if label is too long and if another name is specified
          name = val.name
        } else {
          name = val.label
        }
        var arr = { name: name, icon: val.icon, db_table_name: val.db_table_name }
        if (val.model === true && !this.inStore(name)) {
          this.$store.dispatch('addDeviceToItems', arr)
        } else if (val.model === false) {
          this.$store.dispatch('removeDevice', arr)
        }
      },
      deep: true
    }
  },
  methods: {
    /**
    @param field the device to be looked up within the store.
    @returns true if the device was selected previously. this is need in case the user uses the browsers back button.
     */
    inStore (field) {
      var isFilled = this.$store.state.selecteditems.items.find(function (el) {
        return el.name === field
      })
      return isFilled
    }
  },
  mounted () {
    var name
    if (this.device.name) { // check if label is too long and if another name is specified
      name = this.device.name
    } else {
      name = this.device.label
    }
    if (this.inStore(name)) this.device.model = true
  }
}

</script>

<style>

</style>
