import _ from 'lodash'
import i18next from 'i18next'
import 'whatwg-fetch'
import { locales } from '../../config/i18n'

/**
 * @param {*} locale the language to be loaded.
 * @description checks if given locale is supported, then fetches JSON file with translations
 * and initializes i18next with that data.
 * @see {@link https://phraseapp.com/blog/posts/how-to-build-spa-vue-js-i18n/}
 */
export const setUiLocale = (locale) => {
  if (!_.find(locales, supported => supported.code === locale)) {
    return Promise.reject(new TypeError(`Locale ${locale} is not supported.`))
  }

  return window.fetch(`../translations/${locale}.json`)
    .then(response => response.json())
    // .then(response => response.text())
    // .then(text => console.log(text))
    .then(loadedResources => (
      new Promise((resolve, reject) => {
        i18next.init({
          lng: locale,
          debug: false,
          resources: { [locale]: loadedResources }
        }, (err) => {
          if (err) {
            reject(err)
            return
          }

          resolve()
        })
      })
    ))
    .catch(err => Promise.reject(err))
}

export const t = (key, opt) => i18next.t(key, opt)
export const currentLocale = () => i18next.language
