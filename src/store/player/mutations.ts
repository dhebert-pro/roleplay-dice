import {
  FaceType, DiceModel,
} from '@/models/DiceModel';
import { PlayerModel } from '@/models/PlayerModel';
import {
  PlayerStateModel, getPlayerByName, getDiceByPlayerAndDiceId,
} from '@/store/player/state';
import {
  ADD_DICE,
  REMOVE_DICE,
  ADD_NEW_DICE,
  CHANGE_DICE_NAME,
  CLEAR_NEW_DICE,
  SET_EDITING_DICE_FACE,
  SET_EDITING_DICE_FACE_POSITION,
  SET_ROLLING,
  SWAP_FACE,
  SWITCH_DICE_FACE,
  SET_CURRENT_PLAYER,
  SAVE,
  LOAD,
  ACTIVATE_DICE,
  DISABLE_DICE,
  SET_EDITING_DICE_ID,
} from '@/store/player/types/mutationTypes';
import { getUUId } from '@/util/stringUtil';

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

const removeDice = (state: PlayerStateModel, {
  playerName,
  diceId,
}: { playerName: string, diceId: string }): void => {
  const player: PlayerModel | undefined = getPlayerByName(state, playerName);
  if (player) {
    const { dices } = player;
    const indexRemoved = dices.findIndex((dice: DiceModel) => dice.id === diceId);
    dices.splice(indexRemoved, 1);
  }
};

const addNewDice = (state: PlayerStateModel, {
  playerName,
}: { playerName: string }): void => {
  const player: PlayerModel | undefined = getPlayerByName(state, playerName);
  if (player) {
    player.newDice = {
      id: getUUId(),
      label: '',
      faces: [
        FaceType.BLANK,
        FaceType.BLANK,
        FaceType.BLANK,
        FaceType.BLANK,
        FaceType.BLANK,
        FaceType.BLANK,
      ],
      active: true,
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

const switchDiceFace = (state: PlayerStateModel, {
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

const setEditingDiceFace = (state: PlayerStateModel, {
  playerName,
  isEditingDiceFace,
}: { playerName: string, isEditingDiceFace: boolean }): void => {
  const player: PlayerModel | undefined = getPlayerByName(state, playerName);
  if (player) {
    player.isEditingDiceFace = isEditingDiceFace;
  }
};

const setEditingDiceFacePosition = (state: PlayerStateModel, {
  playerName,
  editingDiceFacePosition,
}: { playerName: string, editingDiceFacePosition: number }): void => {
  const player: PlayerModel | undefined = getPlayerByName(state, playerName);
  if (player) {
    player.editingDiceFacePosition = editingDiceFacePosition;
  }
};
const setEditingDiceId = (state: PlayerStateModel, {
  playerName,
  editingDiceId,
}: { playerName: string, editingDiceId: string }): void => {
  const player: PlayerModel | undefined = getPlayerByName(state, playerName);
  if (player) {
    player.editingDiceId = editingDiceId;
  }
};

const setCurrentPlayer = (state: PlayerStateModel, {
  currentPlayer,
}: { currentPlayer: string }): void => {
  state.currentPlayer = currentPlayer;
};

const save = (state: PlayerStateModel): void => {
  localStorage.setItem('rollDicePlayer', JSON.stringify(state));
};

const load = (state: PlayerStateModel): void => {
  const players: string | null = localStorage.getItem('rollDicePlayer');
  if (players) {
    state.players = JSON.parse(players)?.players;
  }
};

const activateDice = (state: PlayerStateModel, {
  playerName,
  diceId,
}: { playerName: string, diceId: string }): void => {
  const dice: DiceModel | undefined = getDiceByPlayerAndDiceId(state, playerName, diceId);
  if (dice) {
    dice.active = true;
  }
};

const disableDice = (state: PlayerStateModel, {
  playerName,
  diceId,
}: { playerName: string, diceId: string }): void => {
  const dice: DiceModel | undefined = getDiceByPlayerAndDiceId(state, playerName, diceId);
  if (dice) {
    dice.active = false;
  }
};

export default {
  [SWAP_FACE]: swapFace,
  [ADD_DICE]: addDice,
  [REMOVE_DICE]: removeDice,
  [ADD_NEW_DICE]: addNewDice,
  [CLEAR_NEW_DICE]: clearNewDice,
  [SWITCH_DICE_FACE]: switchDiceFace,
  [CHANGE_DICE_NAME]: changeNewDiceName,
  [SET_ROLLING]: setRolling,
  [SET_EDITING_DICE_FACE]: setEditingDiceFace,
  [SET_EDITING_DICE_FACE_POSITION]: setEditingDiceFacePosition,
  [SET_EDITING_DICE_ID]: setEditingDiceId,
  [SET_CURRENT_PLAYER]: setCurrentPlayer,
  [SAVE]: save,
  [LOAD]: load,
  [ACTIVATE_DICE]: activateDice,
  [DISABLE_DICE]: disableDice,
};
