<template>
<v-container fluid>
    <v-card class="my-4">
    <v-card-title class="headline">
      Distance
          <json-excel
          class   = "btn btn-default"
          :data   = "distanceEntries"
          type    = "csv"
          name    = "distances.csv">
          <v-icon title="Export to csv" color="primary" class="mx-2 download">mdi-download</v-icon>
        </json-excel>

      <v-spacer></v-spacer>
      <v-text-field
        v-model="distanceSearch"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="distanceHeaders"
      :items="distanceEntries"
      :search="distanceSearch"
      prev-icon="mdi-menu-left"
      next-icon="mdi-menu-right"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.participantID }}</td>
        <td class="text-xs-right">{{ props.item.datapoint }}</td>
        <td class="text-xs-right">{{ props.item.date }}</td>
        <td class="text-xs-right">{{ props.item.mother }}</td>
        <td class="text-xs-right">{{ props.item.father }}</td>
        <td class="text-xs-right">{{ props.item.sibling }}</td>
        <td class="text-xs-right">{{ props.item.spouse }}</td>
        <td class="text-xs-right">{{ props.item.relative }}</td>
        <td class="text-xs-right">{{ props.item.grandparent }}</td>
        <td class="text-xs-right">{{ props.item.friend }}</td>
        <td class="text-xs-right">{{ props.item.teacher }}</td>
        <td class="text-xs-right">{{ props.item.housemate }}</td>
        <td class="text-xs-right">{{ props.item.neighbour }}</td>
        <td class="text-xs-right">{{ props.item.boss }}</td>
        <td class="text-xs-right">{{ props.item.cleric }}</td>
        <td class="text-xs-right">{{ props.item.classmate }}</td>
        <td class="text-xs-right">{{ props.item.sportsmate }}</td>
        <td class="text-xs-right">{{ props.item.pet }}</td>
        <td class="text-xs-right">{{ props.item.mobile }}</td>
        <td class="text-xs-right">{{ props.item.voiceassistant }}</td>
        <td class="text-xs-right">{{ props.item.tv }}</td>
        <td class="text-xs-right">{{ props.item.laptop }}</td>
        <td class="text-xs-right">{{ props.item.radio }}</td>
        <td class="text-xs-right">{{ props.item.tablet }}</td>
        <td class="text-xs-right">{{ props.item.phone }}</td>
        <td class="text-xs-right">{{ props.item.videogameconsole }}</td>
        <td class="text-xs-right">{{ props.item.pc }}</td>
        <td class="text-xs-right">{{ props.item.smartwatch }}</td>
        <td class="text-xs-right">{{ props.item.gps }}</td>
      </template>
      <v-alert slot="no-results" :value="true" color="error" icon="mdi-alert-outline">
        Your search for "{{ distanceSearch }}" found no results.
      </v-alert>
    </v-data-table>
  </v-card>
      <v-card>
    <v-card-title class="headline">
      Coordinates
          <json-excel
          class   = "btn btn-default"
          :data   = "coordEntries"
          type    = "csv"
          name    = "coordinates.csv">
          <v-icon title="Export to csv" color="primary" class="mx-2 download">mdi-download</v-icon>
        </json-excel>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="coordSearch"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="coordHeaders"
      :items="coordEntries"
      :search="coordSearch"
      prev-icon="mdi-menu-left"
      next-icon="mdi-menu-right"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.participantID }}</td>
        <td class="text-xs-right">{{ props.item.datapoint }}</td>
        <td class="text-xs-right">{{ props.item.date }}</td>
        <td class="text-xs-right">{{ props.item.me_x }}</td>
        <td class="text-xs-right">{{ props.item.me_y }}</td>
        <td class="text-xs-right">{{ props.item.mother_x }}</td>
        <td class="text-xs-right">{{ props.item.mother_y }}</td>
        <td class="text-xs-right">{{ props.item.father_x }}</td>
        <td class="text-xs-right">{{ props.item.father_y }}</td>
        <td class="text-xs-right">{{ props.item.sibling_x }}</td>
        <td class="text-xs-right">{{ props.item.sibling_y }}</td>
        <td class="text-xs-right">{{ props.item.spouse_x }}</td>
        <td class="text-xs-right">{{ props.item.spouse_y }}</td>
        <td class="text-xs-right">{{ props.item.relative_x }}</td>
        <td class="text-xs-right">{{ props.item.relative_y }}</td>
        <td class="text-xs-right">{{ props.item.grandparent_x }}</td>
        <td class="text-xs-right">{{ props.item.grandparent_y }}</td>
        <td class="text-xs-right">{{ props.item.friend_x }}</td>
        <td class="text-xs-right">{{ props.item.friend_y }}</td>
        <td class="text-xs-right">{{ props.item.teacher_x }}</td>
        <td class="text-xs-right">{{ props.item.teacher_y }}</td>
        <td class="text-xs-right">{{ props.item.housemate_x }}</td>
        <td class="text-xs-right">{{ props.item.housemate_y }}</td>
        <td class="text-xs-right">{{ props.item.neighbour_x }}</td>
        <td class="text-xs-right">{{ props.item.neighbour_y }}</td>
        <td class="text-xs-right">{{ props.item.boss_x }}</td>
        <td class="text-xs-right">{{ props.item.boss_y }}</td>
        <td class="text-xs-right">{{ props.item.cleric_x }}</td>
        <td class="text-xs-right">{{ props.item.cleric_y }}</td>
        <td class="text-xs-right">{{ props.item.classmate_x }}</td>
        <td class="text-xs-right">{{ props.item.classmate_y }}</td>
        <td class="text-xs-right">{{ props.item.sportsmate_x }}</td>
        <td class="text-xs-right">{{ props.item.sportsmate_y }}</td>
        <td class="text-xs-right">{{ props.item.pet_x }}</td>
        <td class="text-xs-right">{{ props.item.pet_y }}</td>
        <td class="text-xs-right">{{ props.item.mobile_x }}</td>
        <td class="text-xs-right">{{ props.item.mobile_y }}</td>
        <td class="text-xs-right">{{ props.item.voiceassistant_x }}</td>
        <td class="text-xs-right">{{ props.item.voiceassistant_y }}</td>
        <td class="text-xs-right">{{ props.item.tv_x }}</td>
        <td class="text-xs-right">{{ props.item.tv_y }}</td>
        <td class="text-xs-right">{{ props.item.laptop_x }}</td>
        <td class="text-xs-right">{{ props.item.laptop_y }}</td>
        <td class="text-xs-right">{{ props.item.radio_x }}</td>
        <td class="text-xs-right">{{ props.item.radio_y }}</td>
        <td class="text-xs-right">{{ props.item.tablet_x }}</td>
        <td class="text-xs-right">{{ props.item.tablet_y }}</td>
        <td class="text-xs-right">{{ props.item.phone_x }}</td>
        <td class="text-xs-right">{{ props.item.phone_y }}</td>
        <td class="text-xs-right">{{ props.item.videogameconsole_x }}</td>
        <td class="text-xs-right">{{ props.item.videogameconsole_y }}</td>
        <td class="text-xs-right">{{ props.item.pc_x }}</td>
        <td class="text-xs-right">{{ props.item.pc_y }}</td>
        <td class="text-xs-right">{{ props.item.smartwatch_x }}</td>
        <td class="text-xs-right">{{ props.item.smartwatch_y }}</td>
        <td class="text-xs-right">{{ props.item.gps_x }}</td>
        <td class="text-xs-right">{{ props.item.gps_y }}</td>
      </template>
      <v-alert slot="no-results" :value="true" color="error" icon="mdi-alert-outline">
        Your search for "{{ coordSearch }}" found no results.
      </v-alert>
    </v-data-table>
  </v-card>
</v-container>
</template>

<script>

import ChessboardArrangementService from '@/services/ChessboardArrangementService'
import JsonExcel from 'vue-json-excel'

export default {
  components: {
    JsonExcel
  },
  data: () => ({
    distanceSearch: '',
    distanceEntries: [],
    distanceHeaders: [
      {
        text: 'participantID',
        align: 'left',
        sortable: false,
        value: 'participantID'
      },
      { text: 'datapoint', value: 'datapoint' },
      { text: 'date', value: 'date' },
      { text: 'mother', value: 'mother' },
      { text: 'father', value: 'father' },
      { text: 'sibling', value: 'sibling' },
      { text: 'spouse', value: 'spouse' },
      { text: 'relative', value: 'relative' },
      { text: 'grandparent', value: 'grandparent' },
      { text: 'friend', value: 'friend' },
      { text: 'teacher', value: 'teacher' },
      { text: 'housemate', value: 'housemate' },
      { text: 'neighbour', value: 'neighbour' },
      { text: 'boss', value: 'boss' },
      { text: 'cleric', value: 'cleric' },
      { text: 'classmate', value: 'classmate' },
      { text: 'sportsmate', value: 'sportsmate' },
      { text: 'pet', value: 'pet' },
      { text: 'mobile', value: 'mobile' },
      { text: 'voiceassistant', value: 'voiceassistant' },
      { text: 'tv', value: 'tv' },
      { text: 'laptop', value: 'laptop' },
      { text: 'radio', value: 'radio' },
      { text: 'tablet', value: 'tablet' },
      { text: 'phone', value: 'phone' },
      { text: 'videogameconsole', value: 'videogameconsole' },
      { text: 'pc', value: 'pc' },
      { text: 'smartwatch', value: 'smartwatch' },
      { text: 'gps', value: 'gps' }
    ],
    coordSearch: '',
    coordEntries: [],
    coordHeaders: [
      {
        text: 'participantID',
        align: 'left',
        sortable: false,
        value: 'participantID'
      },
      { text: 'datapoint', value: 'datapoint' },
      { text: 'date', value: 'date' },
      { text: 'me X', value: 'me_x' },
      { text: 'me Y', value: 'me_y' },
      { text: 'mother X', value: 'mother_x' },
      { text: 'mother Y', value: 'mother_y' },
      { text: 'father X', value: 'father_x' },
      { text: 'father Y', value: 'father_y' },
      { text: 'sibling X', value: 'sibling_x' },
      { text: 'sibling Y', value: 'sibling_y' },
      { text: 'spouse X', value: 'spouse_x' },
      { text: 'spouse Y', value: 'spouse_y' },
      { text: 'relative X', value: 'relative_x' },
      { text: 'relative Y', value: 'relative_y' },
      { text: 'grandparent X', value: 'grandparent_x' },
      { text: 'grandparent Y', value: 'grandparent_y' },
      { text: 'friend X', value: 'friend_x' },
      { text: 'friend Y', value: 'friend_y' },
      { text: 'teacher X', value: 'teacher_x' },
      { text: 'teacher Y', value: 'teacher_y' },
      { text: 'housemate X', value: 'housemate_x' },
      { text: 'housemate Y', value: 'housemate_y' },
      { text: 'neighbour X', value: 'neighbour_x' },
      { text: 'neighbour Y', value: 'neighbour_y' },
      { text: 'boss X', value: 'boss_x' },
      { text: 'boss Y', value: 'boss_y' },
      { text: 'cleric X', value: 'cleric_x' },
      { text: 'cleric Y', value: 'cleric_y' },
      { text: 'classmate X', value: 'classmate_x' },
      { text: 'classmate Y', value: 'classmate_y' },
      { text: 'sportsmate X', value: 'sportsmate_x' },
      { text: 'sportsmate Y', value: 'sportsmate_y' },
      { text: 'pet X', value: 'pet_x' },
      { text: 'pet Y', value: 'pet_y' },
      { text: 'mobile X', value: 'mobile_x' },
      { text: 'mobile Y', value: 'mobile_y' },
      { text: 'voiceassistant X', value: 'voiceassistant_x' },
      { text: 'voiceassistant Y', value: 'voiceassistant_y' },
      { text: 'tv X', value: 'tv_x' },
      { text: 'tv Y', value: 'tv_y' },
      { text: 'laptop X', value: 'laptop_x' },
      { text: 'laptop Y', value: 'laptop_y' },
      { text: 'radio X', value: 'radio_x' },
      { text: 'radio Y', value: 'radio_y' },
      { text: 'tablet X', value: 'tablet_x' },
      { text: 'tablet Y', value: 'tablet_y' },
      { text: 'phone X', value: 'phone_x' },
      { text: 'phone Y', value: 'phone_y' },
      { text: 'videogameconsole X', value: 'videogameconsole_x' },
      { text: 'videogameconsole Y', value: 'videogameconsole_y' },
      { text: 'pc X', value: 'pc_x' },
      { text: 'pc Y', value: 'pc_y' },
      { text: 'smartwatch X', value: 'smartwatch_x' },
      { text: 'smartwatch Y', value: 'smartwatch_y' },
      { text: 'gps X', value: 'gps_x' },
      { text: 'gps Y', value: 'gps_y' }
    ]
  }),
  async created () {
    var distanceData = (await ChessboardArrangementService.getDistanceData()).data.entries
    var coordData = (await ChessboardArrangementService.getCoordData()).data.entries
    this.distanceEntries = distanceData
    this.coordEntries = coordData
  }
}
</script>

<style>
.download {
  cursor: pointer;
}
</style>
