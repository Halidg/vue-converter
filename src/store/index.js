import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(Vuex, VueAxios, axios)

export default new Vuex.Store({
  state: {
    valutes: {},
    countriesValuteName: ['RUB'],
    valute: ''
  },
  mutations: {
    getValutes(state, data) {
      state.valutes = data
    },
    getcountriesValuteName(state, data) {
      state.countriesValuteName.push(data)
    },
    getValute(state,data) {
      state.valute = data
    }
  },
  actions: {
   async fetchValutes({commit} ) {
      const res = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
      commit('getValutes', res.data.Valute)
      for (let code in res.data.Valute) {
        commit('getcountriesValuteName', code)
      }
    },
    async userSelectedValute({commit}, val) {
      const res = await axios.get(`https://open.er-api.com/v6/latest/${val}`)
      commit('getValute', res.data.rates)
    }
  },
  getters: {
    valutes(state) {
      return state.valutes
    },
    countries(state) {
      return state.countriesValuteName
    },
    valute(state) {
      return state.valute
    }
  }
})
