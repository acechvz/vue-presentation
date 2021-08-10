import { createStore } from 'vuex';
import api from '../api/rickMortyAPI';

export const store = {
  state() {
    return {
      characters: [],
    };
  },
  mutations: {
    SET_CHARACTERS: (state, payload) => (state.characters = payload),
  },
  actions: {
    async getCharacters({ commit }) {
      const response = await api.get('character');
      commit('SET_CHARACTERS', response.data.results);
    },
  },
};

export const VuexStore = createStore(store);
