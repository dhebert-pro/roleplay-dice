import {
  Store, createStore,
} from 'vuex';

import { ApplicationStoreModel } from '@/models/ApplicationStoreModel';
import playerModule, { PLAYER_MODULE_NAME } from '@/store/player/store';

const store: Store<ApplicationStoreModel> = createStore({
  modules: {
    [PLAYER_MODULE_NAME]: playerModule,
  },
});
export default store;
