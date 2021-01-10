import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import vuetify from '@/plugins/vuetify'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    booking: {
      startDate: null,
      endDate: null,
      adults: 1,
      children: 0,
      room: {
        name: '',
        description: '',
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
    },
    save (state) {
      console.log(state.booking)
      localStorage.setItem('booking', JSON.stringify(state.booking))
    },
    readStorage (state) {
      if (localStorage.getItem('booking')) {
        state.booking = JSON.parse(localStorage.getItem('booking'))
      }
    }
  },
  actions: {
    update (context, booking) {
      context.commit('update', booking)
    },
    save (context) {
      context.commit('save')
    }
  }
})

store.commit('readStorage')

new Vue({
  vuetify,
  render: h => h(App),
  store: store
}).$mount('#app')
