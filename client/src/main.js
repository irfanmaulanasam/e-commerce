import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import toastr from 'toastr'
Vue.config.productionTip = false
Vue.config.axios = axios
Vue.config.productionTip = false

Vue.use(toastr, {
  duration: 1000
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
