export function switchDocumentLocale (locale, dir, opt = {}) {
  const html = window.document.documentElement

  html.lang = locale
  html.dir = dir
}
