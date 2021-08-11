import { getDefaultStore } from './index';
import { MUTATION_TYPES } from './mutation-types';
describe('Store', () => {
  let store;
  beforeEach(() => {
    store = { ...getDefaultStore() };
  });

  afterEach(() => {
    jest.resetAllMocks();
  });
  it('should contain valid default state', () => {
    expect(store.state.characters).toHaveLength(0);
  });

  it('should execute a mutation properly', () => {
    const charactersMock = ['Rick', 'Morty'];
    store.mutations[MUTATION_TYPES.SET_CHARACTERS](store.state, charactersMock);

    expect(store.state.characters).toEqual(charactersMock);
  });

  it('should trigger an action properly and update state', async () => {
    const ctx = {
      commit: (mutation, payload) =>
        store.mutations[mutation](store.state, payload),
    };

    await store.actions.getCharacters(ctx);

    expect(store.state.characters).toHaveLength(20);
  });
});
