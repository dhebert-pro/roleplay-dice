import { createStore, Store } from 'vuex';
import { FaceType } from '@/models/DiceModel';
import { PlayerModel } from '@/models/PlayerModel';

export interface ApplicationStoreModel {
  players: Array<PlayerModel>;
}

const getPlayerByName = (
  state: ApplicationStoreModel,
  playerName: string,
): PlayerModel | undefined => state.players.find(
  (player) => player.name === playerName,
);

const sleep = (delay: number) => new Promise((resolve) => setTimeout(resolve, delay));

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
    playerByName: (state) => (playerName: string) => getPlayerByName(state, playerName),
    dicesFromPlayer: (_, getters) => (
      playerName: string,
    ) => getters.playerByName(playerName)?.dices,
    newDiceFromPlayer: (_, getters) => (
      playerName: string,
    ) => getters.playerByName(playerName)?.newDice,
    isRollingFromPlayer: (_, getters) => (
      playerName: string,
    ) => getters.playerByName(playerName)?.isRolling,
  },
  mutations: {
    swapFace(state, { position, playerName, selectedFace }) {
      const player: PlayerModel | undefined = getPlayerByName(state, playerName);
      if (player) {
        player.dices[position].selectedFace = selectedFace;
      }
    },
    addDice(state, { playerName, dice }) {
      const player: PlayerModel | undefined = getPlayerByName(state, playerName);
      if (player) {
        player.dices.push(dice);
      }
    },
    addNewDice(state, { playerName, diceCount }) {
      const player: PlayerModel | undefined = getPlayerByName(state, playerName);
      if (player) {
        player.newDice = {
          id: diceCount,
          label: '',
          faces: [
            FaceType.BLANK,
            FaceType.BLANK,
            FaceType.BLANK,
            FaceType.BLANK,
            FaceType.BLANK,
            FaceType.BLANK,
          ],
        };
      }
    },
    clearNewDice(state, { playerName }) {
      const player: PlayerModel | undefined = getPlayerByName(state, playerName);
      if (player) {
        player.newDice = undefined;
      }
    },
    switchNewDiceFace(state, { playerName, position, faceName }) {
      const player: PlayerModel | undefined = getPlayerByName(state, playerName);
      if (player && player.newDice) {
        player.newDice.faces[position] = faceName;
      }
    },
    changeNewDiceName(state, { playerName, diceName }) {
      const player: PlayerModel | undefined = getPlayerByName(state, playerName);
      if (player && player.newDice) {
        player.newDice.label = diceName;
      }
    },
    setRolling(state, { playerName, isRolling }) {
      const player: PlayerModel | undefined = getPlayerByName(state, playerName);
      if (player) {
        player.isRolling = isRolling;
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
    addNewDice({ commit }, payload) {
      commit('addNewDice', payload);
    },
    clearNewDice({ commit }, payload) {
      commit('clearNewDice', payload);
    },
    switchNewDiceFace({ commit }, payload) {
      commit('switchNewDiceFace', payload);
    },
    changeNewDiceName({ commit }, payload) {
      commit('changeNewDiceName', payload);
    },
    async roll({ commit, getters }, { playerName, nbIterations, delay }) {
      const player: PlayerModel | undefined = getters.playerByName(playerName);
      if (player) {
        const diceCount = player.dices.length;
        commit('setRolling', { playerName, isRolling: true });
        for (let i = 0; i < nbIterations; i += 1) {
          // eslint-disable-next-line no-await-in-loop
          await sleep(delay);
          for (let position = 0; position < diceCount; position += 1) {
            commit('swapFace', {
              position,
              playerName: player.name,
              selectedFace: Math.floor(Math.random() * 6),
            });
          }
        }
        commit('setRolling', { playerName, isRolling: false });
      }
    },
  },
});
export default store;
