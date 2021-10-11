import { DiceModel } from '@/models/DiceModel';

export interface PlayerModel {
  name: string,
  dices: Array<DiceModel>,
  isRolling?: boolean,
  isEditingNewDiceFace?: boolean,
  editingNewDiceFacePosition?: number,
  newDice?: DiceModel
}
