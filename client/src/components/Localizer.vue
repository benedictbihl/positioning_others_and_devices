<template>
    <div v-if="uiTranslationsLoaded">
        <slot />
    </div>
</template>

<script>
import Vue from 'vue'
import _ from 'lodash'

import { locales } from '../config/i18n'
import { switchDocumentLocale } from '../services/i18n/util'
import { setUiLocale, t, currentLocale } from '../services/i18n'

export default {
  name: 'Localizer',
  data () {
    return {
      uiTranslationsLoaded: false
    }
  },
  methods: {
  /**
   * @param locale the locale to be applied to the app
   * @see setUiLocale
   */
    set (locale) {
      this.uiTranslationsLoaded = false

      setUiLocale(locale)
        .then(() => {
          Vue.prototype.$t = t

          this.uiTranslationsLoaded = true

          const dir = _.find(locales, l => l.code === locale).dir

          switchDocumentLocale(
            locale,
            dir
          )
        })
        .catch(err => console.error(err))
    }
  },
  mounted () {
    this.set(this.$route.params.locale)
  },
  watch: {
    '$route' (to) {
      if (to.params.locale !== currentLocale()) {
        this.set(to.params.locale)
      }
    }
  }
}
</script>
