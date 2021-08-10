import { render, fireEvent } from '@testing-library/vue';
import '@testing-library/jest-dom';
import Vue from 'vue';
import Vuex from 'vuex';

import { store } from './components/Store/store';

// A common testing pattern is to create a custom renderer for a specific test
// file. This way, common operations such as registering a Vuex store can be
// abstracted out while avoiding sharing mutable state.
//
// Tests should be completely isolated from one another.
// Read this for additional context: https://kentcdodds.com/blog/test-isolation-with-react
function renderVuexTestComponent(customStore) {
  // Render the component and merge the original store and the custom one
  // provided as a parameter. This way, we can alter some behaviors of the
  // initial implementation.
  return render(VuexTest, { store: { ...store, ...customStore } });
}

describe('App', () => {
  it('should display properly a list of characters', () => {});
});
