<template>
  <selected-items>
    <v-container grid-list-xl fluid pa-0>
      <v-layout wrap id="input-container" justify-end>
        <v-flex v-for="(field, index) in fields" :key="index" xs4 lg3 mb-5>
          <field-input :input="field" />
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex align-self-end md3 lg1>
          <v-btn @click="nextHandler()" color="primary">
             {{$t('common_nextButton')}}
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
    <v-dialog v-model="noSelectionDialog" max-width="500px" transition="dialog-transition" persistent>
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          {{$t('common_DialogHeadline')}}
        </v-card-title>
        <v-card-text>
        {{$t('common_NoSelectionDialog')}}
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="noSelectionDialog = false">
            {{$t('common_understoodButton')}}
          </v-btn>
        </v-card-actions>
    </v-card>
  </v-dialog>
  </selected-items>
</template>

<script>

import SelectedItems from '@/components/SelectedItems.vue'
import FieldInput from '@/components/Input.vue'

export default {
  components: {
    SelectedItems,
    FieldInput
  },
  data: () => ({
    // label: shown next to input box, model: respective v-model name, fieldname: respective name in store, db_table_name: corresponding table row in msyql db
    fields: [
      { label: 'peopleSelection_label_mother', model: '', fieldname: 'mother', db_table_name: 'mother' },
      { label: 'peopleSelection_label_father', model: '', fieldname: 'father', db_table_name: 'father' },
      { label: 'peopleSelection_label_sibling1', model: '', fieldname: 'sibling1', db_table_name: 'sibling' },
      { label: 'peopleSelection_label_partner', model: '', fieldname: 'partner', db_table_name: 'spouse' },
      { label: 'peopleSelection_label_relative', model: '', fieldname: 'relative', db_table_name: 'relative' },
      { label: 'peopleSelection_label_grandparent', model: '', fieldname: 'grandparent', db_table_name: 'grandparent' },
      { label: 'peopleSelection_label_friend', model: '', fieldname: 'friend', db_table_name: 'friend' },
      { label: 'peopleSelection_label_teacher', model: '', fieldname: 'teacher', db_table_name: 'teacher' },
      { label: 'peopleSelection_label_flatmate', model: '', fieldname: 'flatmate', db_table_name: 'housemate' },
      { label: 'peopleSelection_label_neighbour', model: '', fieldname: 'neighbour', db_table_name: 'neighbour' },
      { label: 'peopleSelection_label_boss', model: '', fieldname: 'boss', db_table_name: 'boss' },
      { label: 'peopleSelection_label_pastor', model: '', fieldname: 'pastor', db_table_name: 'cleric' },
      { label: 'peopleSelection_label_classmate', model: '', fieldname: 'classmate', db_table_name: 'classmate' },
      { label: 'peopleSelection_label_sportsmate', model: '', fieldname: 'sportsmate', db_table_name: 'sportsmate' },
      { label: 'peopleSelection_label_pet', model: '', fieldname: 'pet', db_table_name: 'pet' }
    ],
    nextLink: '',
    noSelectionDialog: false
  }),
  methods: {
    nextHandler: function () {
      switch (this.nextLink) {
        case 'selectdevices':
          if (this.$store.state.selecteditems.items.length < 2) {
            this.noSelectionDialog = true
          } else {
            this.$router.push({ path: this.nextLink })
          }
          break
        case 'chessboardtutorial':
          if (this.$store.state.selecteditems.items.length < 3) {
            this.noSelectionDialog = true
          } else {
            this.$router.push({ path: this.nextLink })
          }
          break
      }
    }
  },
  created () {
    this.fields.sort(function () { return 0.5 - Math.random() }) // randomize input order
    if (this.$store.state.randomizedlinks.links[0].name === this.$route.name) { // send user to the right route
      this.$store.dispatch('countPages', 3)
      this.nextLink = 'selectdevices'
    } else {
      this.$store.dispatch('countPages', 4)
      this.nextLink = 'chessboardtutorial'
    }
  }
}
</script>

<style>
  #input-container {
    min-height: 75vh;
  }
</style>
