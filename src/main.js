// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueAgile from 'vue-agile'
import 'chart.js'
import 'hchs-vue-charts'

Vue.config.productionTip = false

Vue.use(window.VueCharts)
Vue.use(VueAgile)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
