// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import Axios from 'axios'
import App from './App'
import router from './router'

Vue.use(VueLazyload, {
  preload: 1.3,
  attempt: 3
})

Vue.prototype.$http = Axios
Vue.prototype.$http.defaults.baseURL = 'https://www.easy-mock.com/mock/5a210d12690f7f4142bfa877/loler/'
Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.material.registerTheme('default', {
  primary: 'blue'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  mounted () {
    FastClick.attach(document.body)
  }
})
