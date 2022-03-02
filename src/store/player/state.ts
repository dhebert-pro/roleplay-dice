import users from '@/config/users';
import { FaceType } from '@/models/DiceModel';
import { PlayerModel } from '@/models/PlayerModel';
import { UserModel } from '@/models/UserModel';

export interface PlayerStateModel {
  players: Array<PlayerModel>;
}

export const getPlayerByName = (
  state: PlayerStateModel,
  playerName: string,
): PlayerModel | undefined => state.players.find(
  (player) => player.user === playerName,
);

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
        },
      ],
    });
  });
  return players;
};

const playerState: PlayerStateModel = {
  players: getPlayers(),
};

export default playerState;
