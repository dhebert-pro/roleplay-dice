import { DiceModel } from '@/models/DiceModel';

export interface PlayerModel {
  name: string,
  dices: Array<DiceModel>,
  newDice?: DiceModel
}
