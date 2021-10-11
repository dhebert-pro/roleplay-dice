import { createStore, Store } from 'vuex';
import { FaceType } from '@/models/DiceModel';
import { PlayerModel } from '@/models/PlayerModel';

export interface ApplicationStoreModel {
  players: Array<PlayerModel>;
}

// Create a new store instance.
const store: Store<ApplicationStoreModel> = createStore({
  state() {
    return {
      players: [
        {
          name: 'Nathan',
          dices: [
            {
              id: '0',
              label: 'Départ',
              faces: [
                FaceType.ATTACK,
                FaceType.DEFENSE,
                FaceType.MOVE,
                FaceType.BLANK,
                FaceType.BLANK,
                FaceType.BLANK,
              ],
            },
          ],
        },
        {
          name: 'Léane',
          dices: [
            {
              id: '0',
              label: 'Départ',
              faces: [
                FaceType.ATTACK,
                FaceType.DEFENSE,
                FaceType.MOVE,
                FaceType.BLANK,
                FaceType.BLANK,
                FaceType.BLANK,
              ],
            },
          ],
        },
      ],
    };
  },
  getters: {
    diceFromPlayer: (state) => (playerName: string) => state.players.find(
      (player) => player.name === playerName,
    )?.dices,
  },
  mutations: {
    swapFace(state, { position, playerName, selectedFace }) {
      const player = state?.players?.find((player) => player.name === playerName);
      if (player) {
        player.dices[position].selectedFace = selectedFace;
      }
    },
  },
  actions: {
    swapFace({ commit }, payload) {
      commit('swapFace', payload);
    },
  },
});
export default store;
