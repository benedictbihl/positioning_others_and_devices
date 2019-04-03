<template>
<v-container  pt-0>
  <selected-items>
    <div id="chessboard">
      <v-layout class="boardrow" row wrap justify-space-around  v-for="(i, index) in 9" :key="index">
          <div :data-x="j" :data-y="10-i" class="flex field colored" grow v-for="(j, index) in 9" :key="index"></div>
      </v-layout>
    </div>
  </selected-items>
  <v-layout justify-end>
    <v-flex xs12 offset-xs12 mr-3>
      <v-btn @click="nextHandler()" color="primary">
        {{$t('common_AdviceDialogBtnFinish')}}
    </v-btn>
    </v-flex>
  </v-layout>
  <v-dialog v-model="notEmptyDialog" max-width="500px" transition="dialog-transition" persistent>
    <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          {{$t('common_DialogHeadline')}}
        </v-card-title>
        <v-card-text>
          {{$t('common_NotEmptyDialog')}}
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="notEmptyDialog = false">
            {{$t('common_understoodButton')}}
          </v-btn>
        </v-card-actions>
      </v-card>
  </v-dialog>
  <v-dialog v-model="AdviceDialog" max-width="500px" transition="dialog-transition" persistent>
  <v-card>
      <v-card-title class="headline grey lighten-2" primary-title>
        {{$t('common_DialogHeadline')}}
      </v-card-title>
      <v-card-text>
        {{$t('common_AdviceDialog')}}
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" flat @click="rearrangeHandler()">
          {{$t('common_AdviceDialogBtnRearrange')}}
        </v-btn>
        <v-btn color="primary" flat @click="finishHandler()">
          {{$t('common_AdviceDialogBtnFinish')}}
        </v-btn>
      </v-card-actions>
    </v-card>
</v-dialog>
</v-container>
</template>

<script>
import ChessboardArrangementService from '@/services/ChessboardArrangementService'
import SelectedItems from '@/components/SelectedItems.vue'
import _ from 'lodash'

export default {
  data: () => ({
    notEmptyDialog: false,
    AdviceDialog: false,
    adviceDisplayed: false
  }),
  components: {
    SelectedItems
  },
  methods: {
    nextHandler: function () {
      var items = document.getElementById('item-container').children[0]
      if (items.children[0]) { // check if every item is placed
        this.notEmptyDialog = true
      } else {
        if (!this.adviceDisplayed) { // check if user was hinted at diagonality
          this.sendArrangementToDatabase(1)
          this.AdviceDialog = true
          this.adviceDisplayed = true
        } else { // send him to the end page
          this.sendArrangementToDatabase(2)
          this.$router.push({ path: 'finish' })
        }
      }
    },
    rearrangeHandler: function () {
      this.AdviceDialog = false
      document.getElementById('diagonal-hint').style.display = 'block'
    },
    finishHandler: function () {
      this.sendArrangementToDatabase(2)
      this.$router.push({ path: 'finish' })
    },
    /**
     * @param datapoint first or second, depending on if the user was hinted at diagonality.
     * @description send distances and coords to db.
     */
    async sendArrangementToDatabase (datapoint) {
      var distanceData = this.prepareDistanceData(datapoint)
      var coordData = this.prepareCoordData(datapoint)
      try {
        const response1 = await ChessboardArrangementService.saveArrangement(distanceData)
        const response2 = await ChessboardArrangementService.saveCoordinates(coordData)
        console.log(response1.data)
        console.log(response2.data)
      } catch (error) {
        console.log(error)
        this.error = error.response.data.error
      }
    },
    /**
     * @param datapoint first or second, depending on if the user was hinted at diagonality.
     * @description calculate the distance between the other icons and the me-piece, put in array and stringify it
     */
    prepareDistanceData: function (datapoint) {
      var distanceArray = {}
      distanceArray['participantID'] = this.$store.state.subjectid.subjectID
      distanceArray['datapoint'] = datapoint
      var occupiedFields = document.getElementsByClassName('occupied')
      var mePiecePosition = _.find(occupiedFields, function (el) {
        return el.children[0].getAttribute('data-item-name') === 'me'
      })
      var meXCoord = mePiecePosition.getAttribute('data-x')
      var meYCoord = mePiecePosition.getAttribute('data-y')
      _.forEach(occupiedFields, function (el, key) {
        if (el.children[0].getAttribute('data-item-name') !== 'me') {
          var x = el.getAttribute('data-x') - meXCoord
          var y = el.getAttribute('data-y') - meYCoord
          var distanceBetweenFields = Math.sqrt(x * x + y * y)
          var fieldname = el.children[0].getAttribute('data-item-name')
          distanceArray[fieldname] = distanceBetweenFields
        }
      })
      return JSON.stringify(distanceArray)
    },
    /**
     * @param datapoint first or second, depending on if the user was hinted at diagonality.
     * @description get the coords of each piece, put in array and stringify it
     */
    prepareCoordData: function (datapoint) {
      var coordArray = {}
      coordArray['participantID'] = this.$store.state.subjectid.subjectID
      coordArray['datapoint'] = datapoint
      var occupiedFields = document.getElementsByClassName('occupied')
      _.forEach(occupiedFields, function (el, key) {
        var fieldname = el.children[0].getAttribute('data-item-name')
        coordArray[fieldname + '_x'] = el.getAttribute('data-x')
        coordArray[fieldname + '_y'] = el.getAttribute('data-y')
      })
      return JSON.stringify(coordArray)
    }
  },
  mounted () {
    this.$store.dispatch('countPages', 6)// needed for stepper
  },
  created () {
    window.addEventListener('beforeunload', function (event) {
      event.returnValue = 'Your data will be lost!' // message doesnt show up in most browsers
    })
  },
  beforeRouteLeave (to, from, next) {
    window.removeEventListener('beforeunload', function (event) {
      event.returnValue = 'Your data will be lost!' // message doesnt show up in most browsers
    })
    next()
  }
}
</script>

<style lang="scss">

#chessboard {
  border-radius: 2px;
  // border: 1px solid #9b9b9b;
}

.boardrow {
  padding: 0;
  margin: 0;
  list-style: none;
  line-height:30px;
  &:nth-child(even) {
    .colored:nth-child(odd) {
      background: #efefef
    }
  }

  &:nth-child(odd) {
    .colored:nth-child(even) {
      background: #efefef
    }
  }
}
.colored{
  background: #e0e0e0;
  border: 1px solid #fff;
}
.field {
  color: white;
  height: auto;
  flex: 1 0 auto;
  &:before {
    content:'';
    float:left;
    padding-top:100%;
  }
}

.occupied { // same styles as .field bc they get swapped to prevent double items
  color: white;
  height: auto;
  flex: 1 0 auto;
}

</style>
