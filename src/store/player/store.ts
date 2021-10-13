import playerActions from '@/store/player/actions';
import playerGetters from '@/store/player/getters';
import playerMutations from '@/store/player/mutations';
import playerState, { PlayerStateModel } from '@/store/player/state';

export const PLAYER_MODULE_NAME = 'player';

export default {
  namespaced: true,
  state: (): PlayerStateModel => playerState,
  getters: playerGetters,
  mutations: playerMutations,
  actions: playerActions,
};
