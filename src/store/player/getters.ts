import { DiceModel } from '@/models/DiceModel';
import { PlayerModel } from '@/models/PlayerModel';
import { PlayerStateModel, getPlayerByName } from '@/store/player/state';
import {
  PLAYER,
  DICES,
  NEW_DICE,
  IS_ROLLING,
  IS_EDITING_DICE_FACE,
  EDITING_DICE_FACE_POSITION,
  CURRENT_PLAYER,
  ACTIVE_DICES,
  EDITING_DICE_ID,
} from '@/store/player/types/getterTypes';

export interface PlayerGettersModel {
  [PLAYER]: (_: string) => PlayerModel | undefined,
  [DICES]: (_: string) => Array<DiceModel>,
  [ACTIVE_DICES]: (_: string) => Array<DiceModel>,
  [NEW_DICE]: (_: string) => DiceModel | undefined,
  [IS_ROLLING]: (_: string) => boolean,
  [IS_EDITING_DICE_FACE]: (_: string) => boolean,
  [EDITING_DICE_FACE_POSITION]: (_: string) => number | undefined,
  [EDITING_DICE_ID]: (_: string) => string | undefined,
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

const getActiveDices = (_state: PlayerStateModel, getters: PlayerGettersModel) => (
  playerName: string,
): Array<DiceModel> => getters.player(playerName)?.dices?.filter(
  (dice: DiceModel) => dice.active,
) ?? [];

const getNewDice = (_state: PlayerStateModel, getters: PlayerGettersModel) => (
  playerName: string,
): DiceModel | undefined => getters.player(playerName)?.newDice;

const isRolling = (_state: PlayerStateModel, getters: PlayerGettersModel) => (
  playerName: string,
): boolean => !!getters.player(playerName)?.isRolling;

const isEditingDiceFace = (_state: PlayerStateModel, getters: PlayerGettersModel) => (
  playerName: string,
): boolean => !!getters.player(playerName)?.isEditingDiceFace;

const getEditingDiceFacePosition = (
  _state: PlayerStateModel,
  getters: PlayerGettersModel,
) => (
  playerName: string,
  ): number | undefined => getters.player(playerName)?.editingDiceFacePosition;

const getEditingDiceId = (
  _state: PlayerStateModel,
  getters: PlayerGettersModel,
) => (
  playerName: string,
  ): string | undefined => getters.player(playerName)?.editingDiceId;

export default {
  [PLAYER]: getPlayer,
  [DICES]: getDices,
  [ACTIVE_DICES]: getActiveDices,
  [NEW_DICE]: getNewDice,
  [IS_ROLLING]: isRolling,
  [IS_EDITING_DICE_FACE]: isEditingDiceFace,
  [EDITING_DICE_FACE_POSITION]: getEditingDiceFacePosition,
  [EDITING_DICE_ID]: getEditingDiceId,
  [CURRENT_PLAYER]: getCurrentPlayer,
};
