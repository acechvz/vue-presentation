import Vue from 'vue';
import Vuex from 'vuex';
import { render, screen, waitFor } from '@testing-library/vue';
import '@testing-library/jest-dom';

import App from './App.vue';

import characterJson from './mocks/data/character.json';

import { getDefaultStore } from './store';

function renderWithStore(customStore = {}) {
  return render(App, { store: { ...getDefaultStore(), ...customStore } });
}

describe('App', () => {
  it('should display properly with default state', () => {
    renderWithStore();

    expect(screen.getByTestId('characters-list')).toBeInTheDocument();
  });

  it('should render properly characters from state', async () => {
    renderWithStore();

    await waitFor(() =>
      expect(screen.getAllByTestId('character').length).toEqual(
        characterJson.results.length
      )
    );
  });

  it('should properly fetch characters from API', async () => {
    const getCharactersMock = jest.fn();
    renderWithStore({
      actions: {
        getCharacters: getCharactersMock,
      },
    });

    expect(getCharactersMock).toHaveBeenCalled();
  });
});
