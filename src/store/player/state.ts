import { FaceType } from '@/models/DiceModel';
import { PlayerModel } from '@/models/PlayerModel';

export interface PlayerStateModel {
  players: Array<PlayerModel>;
}

export const getPlayerByName = (
  state: PlayerStateModel,
  playerName: string,
): PlayerModel | undefined => state.players.find(
  (player) => player.name === playerName,
);

const playerState: PlayerStateModel = {
  players: [
    {
      name: 'Nathan',
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
    },
    {
      name: 'Léane',
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
    },
  ],
};

export default playerState;
