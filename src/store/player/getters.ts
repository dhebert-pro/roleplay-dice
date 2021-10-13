import { DiceModel } from '@/models/DiceModel';
import { PlayerModel } from '@/models/PlayerModel';
import { PlayerStateModel, getPlayerByName } from '@/store/player/state';

export interface PlayerGettersModel {
  playerByName: (_: string) => PlayerModel | undefined,
  dicesFromPlayer: (_: string) => Array<DiceModel>,
  newDiceFromPlayer: (_: string) => DiceModel | undefined,
  isRollingFromPlayer: (_: string) => boolean,
  isEditingNewDiceFaceFromPlayer: (_: string) => boolean,
  editingNewDiceFacePositionFromPlayer: (_: string) => number | undefined
}

const playerByName = (state: PlayerStateModel) => (
  playerName: string,
): PlayerModel | undefined => getPlayerByName(state, playerName);

const dicesFromPlayer = (_state: PlayerStateModel, getters: PlayerGettersModel) => (
  playerName: string,
): Array<DiceModel> => getters.playerByName(playerName)?.dices ?? [];

const newDiceFromPlayer = (_state: PlayerStateModel, getters: PlayerGettersModel) => (
  playerName: string,
): DiceModel | undefined => getters.playerByName(playerName)?.newDice;

const isRollingFromPlayer = (_state: PlayerStateModel, getters: PlayerGettersModel) => (
  playerName: string,
): boolean => !!getters.playerByName(playerName)?.isRolling;

const isEditingNewDiceFaceFromPlayer = (_state: PlayerStateModel, getters: PlayerGettersModel) => (
  playerName: string,
): boolean => !!getters.playerByName(playerName)?.isEditingNewDiceFace;

const editingNewDiceFacePositionFromPlayer = (
  _state: PlayerStateModel,
  getters: PlayerGettersModel,
) => (
  playerName: string,
  ): number | undefined => getters.playerByName(playerName)?.editingNewDiceFacePosition;

export default {
  playerByName,
  dicesFromPlayer,
  newDiceFromPlayer,
  isRollingFromPlayer,
  isEditingNewDiceFaceFromPlayer,
  editingNewDiceFacePositionFromPlayer,
};
