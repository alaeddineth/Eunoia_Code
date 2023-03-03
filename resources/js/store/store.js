import Vue from 'vue';
import Vuex from 'vuex';
import subject from './subject';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    subject,
  },
  state: {
    user: null,
  },
  getters: {
    user(state) {
      return state.user;
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    clearUser(state) {
      state.user = null;
    },
  },
  actions: {
    async login({ commit }, user) {
      commit('setUser', user);
    },
    logout({ commit }) {
      commit('clearUser');
    },
  },
});

export default store;
