<template>
  <v-container grid-list-md text-xs-center pt-0>
    <v-layout justify-center>
      <v-flex xs12 lg10 class="text-xs-left subheading">
        <div class="mb-3" v-html="$t('selectionTutorial_text')"></div>
      </v-flex>
    </v-layout>
    <v-layout justify-center wrap>
      <v-flex xs12 lg10>
        <video v-if="this.$store.state.language.languageSelected === 'de'" src="../assets/video/Selection Tutorial_1080p_de.mp4" controls type="video/mp4">
        Your browser does not support the video tag.
      </video>
        <video v-else-if="this.$store.state.language.languageSelected === 'en'" src="../assets/video/Selection Tutorial_1080p_en.mp4" controls type="video/mp4">
        Your browser does not support the video tag.
      </video>
      </v-flex>
      <v-flex xs12 lg10>
      <next-button :newPath="this.$store.state.randomizedlinks.links[0].route" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import NextButton from '@/components/NextButton.vue'

export default {
  components: {
    NextButton
  },
  mounted () {
    this.$store.dispatch('countPages', 2)// needed for stepper
  }
}
</script>

<style scoped>
video {
  max-width: 100%;
}

button{
  float: right;
  margin-right: 0;
  margin-top: 16px;
}
</style>
