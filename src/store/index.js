import Vue from 'vue';
import Vuex from 'vuex';
import api from '../api';

import { MUTATION_TYPES } from './mutation-types';

Vue.use(Vuex);

export const getDefaultStore = () => ({
  state: {
    characters: [],
  },
  mutations: {
    [MUTATION_TYPES.SET_CHARACTERS]: (state, payload) => {
      state.characters = payload;
    },
  },
  actions: {
    async getCharacters({ commit }) {
      const response = await api.get('character');
      commit(MUTATION_TYPES.SET_CHARACTERS, response.data.results);
    },
  },
});

export const store = new Vuex.Store(getDefaultStore());
