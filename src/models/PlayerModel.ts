import { DiceModel } from '@/models/DiceModel';

export interface PlayerModel {
  user: string,
  dices: Array<DiceModel>,
  isRolling?: boolean,
  isEditingDiceFace?: boolean,
  editingDiceFacePosition?: number,
  newDice?: DiceModel
}
