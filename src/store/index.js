import Vue from 'vue';
import Vuex from 'vuex';
import api from '../api';

Vue.use(Vuex);

export const getDefaultStore = () => ({
  state: {
    characters: [],
  },
  mutations: {
    SET_CHARACTERS: (state, payload) => {
      state.characters = payload;
    },
  },
  actions: {
    async getCharacters({ commit }) {
      const response = await api.get('character');
      commit('SET_CHARACTERS', response.data.results);
    },
  },
});

export const store = new Vuex.Store(getDefaultStore());
