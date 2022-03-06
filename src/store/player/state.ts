import users from '@/config/users';
import { DiceModel, FaceType } from '@/models/DiceModel';
import { PlayerModel } from '@/models/PlayerModel';
import { UserModel } from '@/models/UserModel';

export interface PlayerStateModel {
  currentPlayer: string,
  players: Array<PlayerModel>;
}

export const getPlayerByName = (
  state: PlayerStateModel,
  playerName: string,
): PlayerModel | undefined => state.players.find(
  (player: PlayerModel) => player.user === playerName,
);

export const getDiceByPlayerAndDiceId = (
  state: PlayerStateModel,
  playerName: string,
  diceId: string,
): DiceModel | undefined => {
  const player: PlayerModel | undefined = getPlayerByName(state, playerName);
  let dice: DiceModel | undefined;
  if (player) {
    dice = player.dices.find(
      (dice: DiceModel) => dice.id === diceId,
    );
  }
  return dice;
};

const getPlayers = (): Array<PlayerModel> => {
  const players: Array<PlayerModel> = [];
  users.forEach((user: UserModel) => {
    players.push({
      user: user.id,
      dices: [
        {
          id: '0',
          label: 'Départ',
          faces: [
            FaceType.ATTACK,
            FaceType.DEFENSE,
            FaceType.MOVE,
            FaceType.BLANK,
            FaceType.BLANK,
            FaceType.BLANK,
          ],
          active: true,
        },
      ],
    });
  });
  return players;
};

const playerState: PlayerStateModel = {
  currentPlayer: '',
  players: getPlayers(),
};

export default playerState;
