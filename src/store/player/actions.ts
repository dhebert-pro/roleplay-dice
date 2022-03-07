import { Commit } from 'vuex';

import { PlayerGettersModel } from './getters';

import {
  DiceModel, FaceType,
} from '@/models/DiceModel';
import { PlayerModel } from '@/models/PlayerModel';
import {
  ADD_DICE_ACTION,
  REMOVE_DICE_ACTION,
  ADD_NEW_DICE_ACTION,
  CHANGE_NEW_DICE_NAME_ACTION,
  CLEAR_NEW_DICE_ACTION,
  SET_EDITING_DICE_FACE_ACTION,
  SET_EDITING_DICE_FACE_POSITION_ACTION,
  SWAP_FACE_ACTION,
  SWITCH_DICE_FACE_ACTION,
  ROLL_ACTION,
  SET_CURRENT_PLAYER_ACTION,
  SAVE_ACTION,
  LOAD_ACTION,
  ACTIVATE_DICE_ACTION,
  DISABLE_DICE_ACTION,
  SET_EDITING_DICE_ID_ACTION,
} from '@/store/player/types/actionTypes';
import {
  ADD_DICE,
  REMOVE_DICE,
  ADD_NEW_DICE,
  CHANGE_DICE_NAME,
  CLEAR_NEW_DICE,
  SET_CURRENT_PLAYER,
  SET_EDITING_DICE_FACE,
  SET_EDITING_DICE_FACE_POSITION,
  SET_EDITING_DICE_ID,
  SET_ROLLING,
  SWAP_FACE,
  SWITCH_DICE_FACE,
  SAVE,
  LOAD,
  ACTIVATE_DICE,
  DISABLE_DICE,
} from '@/store/player/types/mutationTypes';

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
const removeDice = ({ commit }: { commit: Commit }, payload: {
  playerName: string,
  diceId: string
}): void => {
  commit(REMOVE_DICE, payload);
};
const addNewDice = ({ commit }: { commit: Commit }, payload: {
  playerName: string,
}): void => {
  commit(ADD_NEW_DICE, payload);
};
const clearNewDice = ({ commit }: { commit: Commit }, payload: {
  playerName: string
}): void => {
  commit(CLEAR_NEW_DICE, payload);
};
const switchDiceFace = ({ commit }: { commit: Commit }, payload: {
  playerName: string,
  position: number,
  faceName: FaceType
}): void => {
  commit(SWITCH_DICE_FACE, payload);
};
const changeNewDiceName = ({ commit }: { commit: Commit }, payload: {
  playerName: string,
  diceName: string
}): void => {
  commit(CHANGE_DICE_NAME, payload);
};
const setEditingDiceFace = ({ commit }: { commit: Commit }, payload: {
  playerName: string,
  isEditingDiceFace: boolean
}): void => {
  commit(SET_EDITING_DICE_FACE, payload);
};
const setEditingDiceFacePosition = ({ commit }: { commit: Commit }, payload: {
  playerName: string,
  editingDiceFacePosition: number
}): void => {
  commit(SET_EDITING_DICE_FACE_POSITION, payload);
};
const setEditingDiceId = ({ commit }: { commit: Commit }, payload: {
  playerName: string,
  editingDiceId: string
}): void => {
  commit(SET_EDITING_DICE_ID, payload);
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
          playerName: player.user,
          selectedFace: Math.floor(Math.random() * 6),
        });
      }
    }
    commit(SET_ROLLING, { playerName, isRolling: false });
  }
};
const setCurrentPlayer = ({ commit }: { commit: Commit }, payload: {
  currentPlayer: string,
}): void => {
  commit(SET_CURRENT_PLAYER, payload);
};

const save = ({ commit }: { commit: Commit }): void => {
  commit(SAVE);
};

const load = ({ commit }: { commit: Commit }): void => {
  commit(LOAD);
};

const activateDice = ({ commit }: { commit: Commit }, payload: {
  playerName: string,
  diceId: string
}): void => {
  commit(ACTIVATE_DICE, payload);
};

const disableDice = ({ commit }: { commit: Commit }, payload: {
  playerName: string,
  diceId: string
}): void => {
  commit(DISABLE_DICE, payload);
};

export default {
  [SWAP_FACE_ACTION]: swapFace,
  [ADD_DICE_ACTION]: addDice,
  [REMOVE_DICE_ACTION]: removeDice,
  [ADD_NEW_DICE_ACTION]: addNewDice,
  [CLEAR_NEW_DICE_ACTION]: clearNewDice,
  [SWITCH_DICE_FACE_ACTION]: switchDiceFace,
  [CHANGE_NEW_DICE_NAME_ACTION]: changeNewDiceName,
  [SET_EDITING_DICE_FACE_ACTION]: setEditingDiceFace,
  [SET_EDITING_DICE_FACE_POSITION_ACTION]: setEditingDiceFacePosition,
  [SET_EDITING_DICE_ID_ACTION]: setEditingDiceId,
  [ROLL_ACTION]: roll,
  [SET_CURRENT_PLAYER_ACTION]: setCurrentPlayer,
  [SAVE_ACTION]: save,
  [LOAD_ACTION]: load,
  [ACTIVATE_DICE_ACTION]: activateDice,
  [DISABLE_DICE_ACTION]: disableDice,
};
