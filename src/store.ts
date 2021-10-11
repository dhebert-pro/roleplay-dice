import { createStore, Store } from 'vuex';
import { FaceType } from '@/models/DiceModel';
import { PlayerModel } from '@/models/PlayerModel';

export interface ApplicationStoreModel {
  players: Array<PlayerModel>;
}

const getDiceFromPlayer = (state: ApplicationStoreModel, playerName: string) => state.players.find(
  (player) => player.name === playerName,
);

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
    playerByName: (state) => (playerName: string) => getDiceFromPlayer(state, playerName),
    diceFromPlayer: (_, getters) => (playerName: string) => getters.playerByName(playerName)?.dices,
  },
  mutations: {
    swapFace(state, { position, playerName, selectedFace }) {
      const player = getDiceFromPlayer(state, playerName);
      if (player) {
        player.dices[position].selectedFace = selectedFace;
      }
    },
    addDice(state, { playerName, dice }) {
      const player = getDiceFromPlayer(state, playerName);
      if (player) {
        player.dices.push(dice);
      }
    },
  },
  actions: {
    swapFace({ commit }, payload) {
      commit('swapFace', payload);
    },
    addDice({ commit }, payload) {
      commit('addDice', payload);
    },
    roll({ commit }, { playerName, diceCount }) {
      for (let position = 0; position < diceCount; position += 1) {
        commit('swapFace', {
          position,
          playerName,
          selectedFace: Math.floor(Math.random() * 6),
        });
      }
    },
  },
});
export default store;
