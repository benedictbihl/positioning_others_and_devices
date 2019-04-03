<template>
  <v-container grid-list-md text-xs-center>
    <v-layout justify-center>
    </v-layout>
    <v-layout wrap justify-center class="text-xs-left">
      <v-flex xs12>
        <div class="mb-3">
        {{$t('subjectID_Text1')}}
        </div>
      </v-flex>
      <v-flex xs12>
        <h2 class="mb-3 headline">{{$t('subjectID_Headline')}}</h2>
        <div>
        {{$t('subjectID_Text2')}}
        </div>
        <h3 class="mt-3 mb-2 subheadline">{{$t('subjectID_Headline2')}}</h3>
      </v-flex>
      <v-flex xs12 >
        <table>
          <tr>
            <td>{{$t('subjectID_Example1')}}</td>
            <td v-html="$t('subjectID_Example2')"></td>
          </tr>
          <tr>
            <td>{{$t('subjectID_Example3')}}</td>
            <td v-html="$t('subjectID_Example4')"></td>
          </tr>
          <tr>
            <td>{{$t('subjectID_Example5')}}</td>
            <td v-html="$t('subjectID_Example6')"></td>
          </tr>
          <tr>
            <td>{{$t('subjectID_Example7')}}</td>
            <td v-html="$t('subjectID_Example8')"></td>
          </tr>
        </table>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs6 md3>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="subjectId"
            :label="$t('subjectID_inputLabel')"
            :rules="subjectIdRules"
            :counter="8"
            maxlength="8"
            required
          ></v-text-field>
        </v-form>
      </v-flex>
    </v-layout>
    <v-layout justify-end>
      <v-flex xs2 md1>
          <v-btn @click="submitId" color="primary" :disabled="!valid">
            {{$t('common_nextButton')}}
          </v-btn>
      </v-flex>
    </v-layout>
    <v-dialog v-model="languageDialog" max-width="500px" transition="dialog-transition" persistent>
      <v-card>
        <v-card-title class="title font-weight-regular grey lighten-2" primary-title>
          Bitte wählen sie ihre Sprache/<br>Please select your language
        </v-card-title>
        <v-card-text>
          <v-layout row wrap justify-center>
          <router-link class="flex xs5 ma-2 link" v-for="locale in locales" :key="locale.code" :to="`/${locale.code}`">
            <img height="117px" width="195px" :data-lang="locale.code" @click="selectLanguage" :src="icons[locale.code]" class="country-icon" />
            <div class="text-xs-center title font-weight-regular locale-name">{{locale.name}}</div>
          </router-link>
          </v-layout>
        </v-card-text>
      </v-card>
  </v-dialog>
  </v-container>
</template>

<script>
// eslint-disable-next-line

import deIcon from 'svg-country-flags/svg/de.svg'
import enIcon from 'svg-country-flags/svg/gb.svg'

import { locales } from '../config/i18n'

export default {
  data: () => ({
    valid: true,
    subjectId: '',
    subjectIdRules: [
      v => !!v || ''
      // v => (v && v.length < 8) || 'Die Probandenkennung besteht aus genau 8 Ziffern'
    ],
    icons: {
      de: deIcon,
      en: enIcon
    },
    locales,
    languageDialog: false
  }),
  computed: {
    currentLocale () {
      return this.$route.params.locale
    }
  },
  mounted () {
    this.$store.dispatch('countPages', 1)// needed for stepper
    if (!this.$store.state.language.languageSelected) {
      this.languageDialog = true
    }
  },
  methods: {
    submitId () {
      if (this.$refs.form.validate()) {
        var id = this.subjectId
        if (this.subjectId.length < 8) { // add a '0' to the number in case the user forgot
          id = this.subjectId.substring(0, 2) + '0' + this.subjectId[2] + this.subjectId.substring(2 + 1)
        }
        this.$store.dispatch('storeSubjectID', id)
        this.$router.push({ path: 'selectiontutorial' })
      }
    },
    selectLanguage (e) {
      if (!e) e = window.event
      this.$store.dispatch('selectLanguage', e.target.dataset.lang)
      this.languageDialog = false
    }
  }
}
</script>

<style lang="scss">
td {
  padding-right: 20px;
}

.country-icon {
  object-fit: cover;
}

.link {
  text-decoration: none;
  color: #000;
}

.bold-example {
  color: #00418b;
}
</style>
