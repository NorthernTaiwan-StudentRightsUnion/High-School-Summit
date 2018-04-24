// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueLocalStorage from 'vue-localstorage'

// Set Muti-Languages Support
import VueI18n from 'vue-i18n'
import i18nConfig from '@/i18n/index'

Vue.config.productionTip = false

Vue.use(VueI18n)
Vue.use(VueLocalStorage)

const i18n = new VueI18n({
  locale: navigator.language,
  fallbackLocale: 'zh-TW',
  messages: i18nConfig
})

/* eslint-disable no-new */
new Vue({
  i18n,
  el: '#app',
  router,
  components: { App },
  template: '<App />'
})
