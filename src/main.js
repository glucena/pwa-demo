// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-core/register'
import 'babel-polyfill'

import Vue from 'vue'
import App from './App'
import router from './router'

import { MdCard } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'

import 'vue-qrcode-reader/dist/vue-qrcode-reader.css'
import VueQrcodeReader from 'vue-qrcode-reader/dist/vue-qrcode-reader.common'

Vue.config.productionTip = false

Vue.use(MdCard)

Vue.use(VueQrcodeReader)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
