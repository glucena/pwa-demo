// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-core/register'
import 'babel-polyfill'

import Vue from 'vue'
import App from './App'
import router from './router'

import { MdCard, MdAvatar, MdRipple } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'

import 'vue-qrcode-reader/dist/vue-qrcode-reader.css'
import VueQrcodeReader from 'vue-qrcode-reader/dist/vue-qrcode-reader.common'
import vbclass from 'vue-body-class'

Vue.config.productionTip = false

Vue.use(MdAvatar)
Vue.use(MdCard)
Vue.use(MdRipple)
Vue.use(VueQrcodeReader)
Vue.use(vbclass, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
