import { Commit } from 'vuex';

import { PlayerGettersModel } from './getters';

import {
  DiceModel, FaceType,
} from '@/models/DiceModel';
import { PlayerModel } from '@/models/PlayerModel';
import {
  ADD_DICE_ACTION,
  ADD_NEW_DICE_ACTION,
  CHANGE_NEW_DICE_NAME_ACTION,
  CLEAR_NEW_DICE_ACTION,
  SET_EDITING_NEW_DICE_FACE_ACTION,
  SET_EDITING_NEW_DICE_FACE_POSITION_ACTION,
  SWAP_FACE_ACTION,
  SWITCH_NEW_DICE_FACE_ACTION,
  ROLL_ACTION,
} from '@/store/player/actionTypes';
import {
  ADD_DICE,
  ADD_NEW_DICE,
  CHANGE_DICE_NAME,
  CLEAR_NEW_DICE,
  SET_EDITING_NEW_DICE_FACE,
  SET_EDITING_NEW_DICE_FACE_POSITION,
  SET_ROLLING,
  SWAP_FACE,
  SWITCH_NEW_DICE_FACE,
} from '@/store/player/mutationTypes';

const sleep = (delay: number) => new Promise((resolve) => setTimeout(resolve, delay));

const swapFace = ({ commit }: { commit: Commit }, payload: {
  position: number,
  playerName: string,
  selectedFace: number
}): void => {
  commit(SWAP_FACE, payload);
};
const addDice = ({ commit }: { commit: Commit }, payload: {
  playerName: string,
  dice: DiceModel
}): void => {
  commit(ADD_DICE, payload);
};
const addNewDice = ({ commit }: { commit: Commit }, payload: {
  playerName: string,
  diceCount: number
}): void => {
  commit(ADD_NEW_DICE, payload);
};
const clearNewDice = ({ commit }: { commit: Commit }, payload: {
  playerName: string
}): void => {
  commit(CLEAR_NEW_DICE, payload);
};
const switchNewDiceFace = ({ commit }: { commit: Commit }, payload: {
  playerName: string,
  position: number,
  faceName: FaceType
}): void => {
  commit(SWITCH_NEW_DICE_FACE, payload);
};
const changeNewDiceName = ({ commit }: { commit: Commit }, payload: {
  playerName: string,
  diceName: string
}): void => {
  commit(CHANGE_DICE_NAME, payload);
};
const setEditingNewDiceFace = ({ commit }: { commit: Commit }, payload: {
  playerName: string,
  isEditingNewDiceFace: boolean
}): void => {
  commit(SET_EDITING_NEW_DICE_FACE, payload);
};
const setEditingNewDiceFacePosition = ({ commit }: { commit: Commit }, payload: {
  playerName: string,
  editingNewDiceFacePosition: number
}): void => {
  commit(SET_EDITING_NEW_DICE_FACE_POSITION, payload);
};
const roll = async ({
  commit, getters,
}: { commit: Commit, getters: PlayerGettersModel }, {
  playerName,
  nbIterations,
  delay,
}: {
  playerName: string,
  nbIterations: number,
  delay: number
}): Promise<void> => {
  const player: PlayerModel | undefined = getters.player(playerName);
  if (player) {
    const diceCount = player.dices.length;
    commit(SET_ROLLING, { playerName, isRolling: true });
    for (let i = 0; i < nbIterations; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await sleep(delay);
      for (let position = 0; position < diceCount; position += 1) {
        commit(SWAP_FACE, {
          position,
          playerName: player.name,
          selectedFace: Math.floor(Math.random() * 6),
        });
      }
    }
    commit(SET_ROLLING, { playerName, isRolling: false });
  }
};

export default {
  [SWAP_FACE_ACTION]: swapFace,
  [ADD_DICE_ACTION]: addDice,
  [ADD_NEW_DICE_ACTION]: addNewDice,
  [CLEAR_NEW_DICE_ACTION]: clearNewDice,
  [SWITCH_NEW_DICE_FACE_ACTION]: switchNewDiceFace,
  [CHANGE_NEW_DICE_NAME_ACTION]: changeNewDiceName,
  [SET_EDITING_NEW_DICE_FACE_ACTION]: setEditingNewDiceFace,
  [SET_EDITING_NEW_DICE_FACE_POSITION_ACTION]: setEditingNewDiceFacePosition,
  [ROLL_ACTION]: roll,
};