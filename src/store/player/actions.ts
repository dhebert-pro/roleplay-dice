import { Commit } from 'vuex';
import { PlayerModel } from '@/models/PlayerModel';
import { PlayerGettersModel } from './getters';
import { DiceModel, FaceType } from '@/models/DiceModel';

const sleep = (delay: number) => new Promise((resolve) => setTimeout(resolve, delay));

const swapFace = ({ commit }: { commit: Commit }, payload: {
  position: number,
  playerName: string,
  selectedFace: number
}): void => {
  commit('swapFace', payload);
};
const addDice = ({ commit }: { commit: Commit }, payload: {
  playerName: string,
  dice: DiceModel
}): void => {
  commit('addDice', payload);
};
const addNewDice = ({ commit }: { commit: Commit }, payload: {
  playerName: string,
  diceCount: number
}): void => {
  commit('addNewDice', payload);
};
const clearNewDice = ({ commit }: { commit: Commit }, payload: {
  playerName: string
}): void => {
  commit('clearNewDice', payload);
};
const switchNewDiceFace = ({ commit }: { commit: Commit }, payload: {
  playerName: string,
  position: number,
  faceName: FaceType
}): void => {
  commit('switchNewDiceFace', payload);
};
const changeNewDiceName = ({ commit }: { commit: Commit }, payload: {
  playerName: string,
  diceName: string
}): void => {
  commit('changeNewDiceName', payload);
};
const setEditingNewDiceFace = ({ commit }: { commit: Commit }, payload: {
  playerName: string,
  isEditingNewDiceFace: boolean
}): void => {
  commit('setEditingNewDiceFace', payload);
};
const setEditingNewDiceFacePosition = ({ commit }: { commit: Commit }, payload: {
  playerName: string,
  editingNewDiceFacePosition: number
}): void => {
  commit('setEditingNewDiceFacePosition', payload);
};
const roll = async ({ commit, getters }: { commit: Commit, getters: PlayerGettersModel }, {
  playerName,
  nbIterations,
  delay,
}: {
  playerName: string,
  nbIterations: number,
  delay: number
}): Promise<void> => {
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
};

export default {
  swapFace,
  addDice,
  addNewDice,
  clearNewDice,
  switchNewDiceFace,
  changeNewDiceName,
  setEditingNewDiceFace,
  setEditingNewDiceFacePosition,
  roll,
};
