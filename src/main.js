import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import FullCalendar from '../node_modules/vue-full-calendar'
Vue.use(FullCalendar)


Vue.config.productionTip = false



new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
