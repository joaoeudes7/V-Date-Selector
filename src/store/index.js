import Vue from 'vue'
import Vuex from 'vuex'

// Getters
const GET_NEXT_MONTH = 'NEXT_MONTH'
const GET_NEXT_YEAR = 'NEXT_YEAR'
const GET_PREV_MONTH = 'PREV_MONTH'
const GET_PREV_YEAR = 'PREV_YEAR'
const GET_CURRENT_MONTH = 'CURRENT_MONTH'
const GET_CURRENT_YEAR = 'CURRENT_YEAR'
const GET_TOTAL_DAYS = 'GET_TOTAL_DAYS'

// Sets
const SET_DATE = 'SET_DATE'
const SET_MONTH = 'SET_MONTH'
const SET_YEAR = 'SET_YEAR'
const SET_NEW_DATE = 'SET_NEW_DATE'

// Actions
const NEXT_YAER = 'NEXT_YAER'
const NEXT_MONTH = 'NEXT_MONTH'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    date: new Date()
  },
  getters: {
    [GET_NEXT_MONTH]: (state) => {
      return state.date.getMonth()+1
    },
    [GET_NEXT_YEAR]: (state) => {
      return state.date.getFullYear()+1
    },
    [GET_PREV_MONTH]: (state) => {
      return state.date
    },
    [GET_PREV_YEAR]: (state) => {
      return state.date.getFullYear()-1
    },
    [GET_CURRENT_MONTH]: (state) => {
      return state.date.getMonth()
    },
    [GET_CURRENT_YEAR]: (state) => {
      return state.date.getFullYear()
    },
    [GET_TOTAL_DAYS]: (state) => {
      return state.date
    }
  },
  mutations: {
    [SET_DATE]: async (state, date) => {
      return state.date.setDate(date)
    },
    [SET_MONTH]: async (state, month) => {
      return state.date.setMonth(month)
    },
    [SET_YEAR]: async (state, fullYear) => {
      return state.date.setFullYear(fullYear)
    },
    [SET_NEW_DATE]: async (state, newDate = new Date()) => {
      return state.date = newDate
    }
  },
  actions: {
    [NEXT_MONTH]: async ({commit}) => {
      const newMonth = 1;
      commit(SET_MONTH, newMonth)
    },
    [NEXT_YAER]: async ({commit}) => {
      const newYear = 1;
      commit(SET_YEAR, newYear)
    }
  }
});
