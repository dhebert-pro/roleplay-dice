import { createStore, Store } from 'vuex';
import playerState from '@/store/player/state';
import playerGetters from '@/store/player/getters';
import playerMutations from '@/store/player/mutations';
import playerActions from '@/store/player/actions';
import { ApplicationStoreModel } from '@/models/ApplicationStoreModel';

// Create a new store instance.
const store: Store<ApplicationStoreModel> = createStore({
  modules: {
    player: {
      namespaced: true,
      state: () => playerState,
      getters: playerGetters,
      mutations: playerMutations,
      actions: playerActions,
    },
  },
});
export default store;
