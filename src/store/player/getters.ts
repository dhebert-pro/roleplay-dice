import { DiceModel } from '@/models/DiceModel';
import { PlayerModel } from '@/models/PlayerModel';
import { PlayerStateModel, getPlayerByName } from '@/store/player/state';
import {
  PLAYER,
  DICES,
  NEW_DICE,
  IS_ROLLING,
  IS_EDITING_NEW_DICE_FACE,
  EDITING_NEW_DICE_FACE_POSITION,
  CURRENT_PLAYER,
} from '@/store/player/types/getterTypes';

export interface PlayerGettersModel {
  [PLAYER]: (_: string) => PlayerModel | undefined,
  [DICES]: (_: string) => Array<DiceModel>,
  [NEW_DICE]: (_: string) => DiceModel | undefined,
  [IS_ROLLING]: (_: string) => boolean,
  [IS_EDITING_NEW_DICE_FACE]: (_: string) => boolean,
  [EDITING_NEW_DICE_FACE_POSITION]: (_: string) => number | undefined,
  [CURRENT_PLAYER]: (_: string) => string | undefined
}

const getCurrentPlayer = (state: PlayerStateModel) => (
): string | undefined => state.currentPlayer;

const getPlayer = (state: PlayerStateModel) => (
  playerName: string,
): PlayerModel | undefined => getPlayerByName(state, playerName);

const getDices = (_state: PlayerStateModel, getters: PlayerGettersModel) => (
  playerName: string,
): Array<DiceModel> => getters.player(playerName)?.dices ?? [];

const getNewDice = (_state: PlayerStateModel, getters: PlayerGettersModel) => (
  playerName: string,
): DiceModel | undefined => getters.player(playerName)?.newDice;

const isRolling = (_state: PlayerStateModel, getters: PlayerGettersModel) => (
  playerName: string,
): boolean => !!getters.player(playerName)?.isRolling;

const isEditingNewDiceFace = (_state: PlayerStateModel, getters: PlayerGettersModel) => (
  playerName: string,
): boolean => !!getters.player(playerName)?.isEditingNewDiceFace;

const getEditingNewDiceFacePosition = (
  _state: PlayerStateModel,
  getters: PlayerGettersModel,
) => (
  playerName: string,
  ): number | undefined => getters.player(playerName)?.editingNewDiceFacePosition;

export default {
  [PLAYER]: getPlayer,
  [DICES]: getDices,
  [NEW_DICE]: getNewDice,
  [IS_ROLLING]: isRolling,
  [IS_EDITING_NEW_DICE_FACE]: isEditingNewDiceFace,
  [EDITING_NEW_DICE_FACE_POSITION]: getEditingNewDiceFacePosition,
  [CURRENT_PLAYER]: getCurrentPlayer,
};
