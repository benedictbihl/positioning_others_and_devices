<template>
  <selected-items>
        <v-layout wrap id="checkbox-container">
          <v-flex v-for="(device, index) in devices" :key="index" xs6>
            <check-box :device="device" />
          </v-flex>
          <v-spacer></v-spacer>
          <v-flex align-self-end offset-lg11 offset-md10>
            <v-btn @click="nextHandler()" color="primary">
                {{$t('common_nextButton')}}
          </v-btn>
          </v-flex>
        </v-layout>
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
import CheckBox from '@/components/Checkbox.vue'

export default {
  components: {
    CheckBox,
    SelectedItems
  },
  data: () => ({
    // label: shown next to input box, model: respective v-model name, icon: shown in box over label text, db_table_name: corresponding table row in msyql db
    devices: [
      { label: 'deviceSelection_label_mobile', model: false, icon: 'cellphone-iphone', db_table_name: 'mobile' },
      { label: 'deviceSelection_label_VA', model: false, icon: 'google-home', name: 'Speaker', db_table_name: 'voiceassistant' }, // name added bc label is too long for the card
      { label: 'deviceSelection_label_tv', model: false, icon: 'television-classic', db_table_name: 'tv' },
      { label: 'deviceSelection_label_laptop', model: false, icon: 'laptop', db_table_name: 'laptop' },
      { label: 'deviceSelection_label_radio', model: false, icon: 'radio', db_table_name: 'radio' },
      { label: 'deviceSelection_label_tablet', model: false, icon: 'tablet', db_table_name: 'tablet' },
      { label: 'deviceSelection_label_telephone', model: false, icon: 'phone-classic', db_table_name: 'phone' },
      { label: 'deviceSelection_label_videogame', model: false, icon: 'gamepad-variant', db_table_name: 'videogameconsole' },
      { label: 'deviceSelection_label_desktop', model: false, icon: 'desktop-mac', db_table_name: 'pc' },
      { label: 'deviceSelection_label_smartwatch', model: false, icon: 'watch-variant', db_table_name: 'smartwatch' },
      { label: 'deviceSelection_label_gps', model: false, icon: 'navigation', db_table_name: 'gps' }
    ],
    nextLink: '',
    noSelectionDialog: false
  }),
  methods: {
    nextHandler: function () {
      switch (this.nextLink) {
        case 'selectpeople':
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
    this.devices.sort(function () { return 0.5 - Math.random() }) // randomize input order
    if (this.$store.state.randomizedlinks.links[0].name === this.$route.name) { // send user to the right route
      this.$store.dispatch('countPages', 3)
      this.nextLink = 'selectpeople'
    } else {
      this.$store.dispatch('countPages', 4)
      this.nextLink = 'chessboardtutorial'
    }
  }
}
</script>

<style>
video {
  max-width: 100%;
  border: 1px solid #e0e0e0;
}

  #checkbox-container {
    min-height: 75vh;
  }
</style>
