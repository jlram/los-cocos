import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import vuetify from '@/plugins/vuetify'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    booking: {
      startDate: new Date().toISOString().substr(0, 10),
      endDate: new Date().toISOString().substr(0, 10),
      adults: 1,
      children: 0,
      room: {
        name: '',
        description: '',
        size: '',
        beds: '',
        adults: '',
        price: 0
      }
    }
  },
  mutations: {
    update (state, booking) {
      for (var item in booking) {
        state.booking[item] = booking[item]
      }
    }
  },
  actions: {
    update (context, booking) {
      context.commit('update', booking)
    }
  }
})

new Vue({
  vuetify,
  render: h => h(App),
  store: store
}).$mount('#app')
