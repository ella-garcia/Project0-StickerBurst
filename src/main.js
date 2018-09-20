import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import 'vuetify/dist/vuetify.min.css'
export const EventBus = new Vue();

Vue.use(Vuetify)

new Vue({
  el: '#app',
  render: h => h(App)
})