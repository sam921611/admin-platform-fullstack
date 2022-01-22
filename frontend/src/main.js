import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

Vue.config.productionTip = false

import axios from "axios"
//創建axios實例在vue上
Vue.prototype.$http = axios.create({
  baseURL:"http://localhost:3001/api"
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
