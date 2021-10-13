import {
  FaceType, DiceModel,
} from '@/models/DiceModel';
import { PlayerModel } from '@/models/PlayerModel';
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
import {
  PlayerStateModel, getPlayerByName,
} from '@/store/player/state';

const swapFace = (state: PlayerStateModel, {
  position,
  playerName,
  selectedFace,
}: { position: number, playerName: string, selectedFace: number }): void => {
  const player: PlayerModel | undefined = getPlayerByName(state, playerName);
  if (player) {
    player.dices[position].selectedFace = selectedFace;
  }
};

const addDice = (state: PlayerStateModel, {
  playerName,
  dice,
}: { playerName: string, dice: DiceModel }): void => {
  const player: PlayerModel | undefined = getPlayerByName(state, playerName);
  if (player) {
    player.dices.push(dice);
  }
};

const addNewDice = (state: PlayerStateModel, {
  playerName,
  diceCount,
}: { playerName: string, diceCount: number }): void => {
  const player: PlayerModel | undefined = getPlayerByName(state, playerName);
  if (player) {
    player.newDice = {
      id: diceCount.toString(),
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
};

const clearNewDice = (state: PlayerStateModel, {
  playerName,
}: { playerName: string }): void => {
  const player: PlayerModel | undefined = getPlayerByName(state, playerName);
  if (player) {
    player.newDice = undefined;
  }
};

const switchNewDiceFace = (state: PlayerStateModel, {
  playerName,
  position,
  faceName,
}: { playerName: string, position: number, faceName: FaceType }): void => {
  const player: PlayerModel | undefined = getPlayerByName(state, playerName);
  if (player && player.newDice) {
    player.newDice.faces[position] = faceName;
  }
};

const changeNewDiceName = (state: PlayerStateModel, {
  playerName,
  diceName,
}: { playerName: string, diceName: string }): void => {
  const player: PlayerModel | undefined = getPlayerByName(state, playerName);
  if (player && player.newDice) {
    player.newDice.label = diceName;
  }
};

const setRolling = (state: PlayerStateModel, {
  playerName,
  isRolling,
}: { playerName: string, isRolling: boolean }): void => {
  const player: PlayerModel | undefined = getPlayerByName(state, playerName);
  if (player) {
    player.isRolling = isRolling;
  }
};

const setEditingNewDiceFace = (state: PlayerStateModel, {
  playerName,
  isEditingNewDiceFace,
}: { playerName: string, isEditingNewDiceFace: boolean }): void => {
  const player: PlayerModel | undefined = getPlayerByName(state, playerName);
  if (player) {
    player.isEditingNewDiceFace = isEditingNewDiceFace;
  }
};

const setEditingNewDiceFacePosition = (state: PlayerStateModel, {
  playerName,
  editingNewDiceFacePosition,
}: { playerName: string, editingNewDiceFacePosition: number }): void => {
  const player: PlayerModel | undefined = getPlayerByName(state, playerName);
  if (player) {
    player.editingNewDiceFacePosition = editingNewDiceFacePosition;
  }
};

export default {
  [SWAP_FACE]: swapFace,
  [ADD_DICE]: addDice,
  [ADD_NEW_DICE]: addNewDice,
  [CLEAR_NEW_DICE]: clearNewDice,
  [SWITCH_NEW_DICE_FACE]: switchNewDiceFace,
  [CHANGE_DICE_NAME]: changeNewDiceName,
  [SET_ROLLING]: setRolling,
  [SET_EDITING_NEW_DICE_FACE]: setEditingNewDiceFace,
  [SET_EDITING_NEW_DICE_FACE_POSITION]: setEditingNewDiceFacePosition,
};
