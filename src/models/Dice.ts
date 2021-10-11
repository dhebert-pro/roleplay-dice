export enum FaceType {
  ATTACK,
  DEFENSE,
  MAGIC,
  RANGE,
  DISTANCE,
  MECHANIC,
  HEAL,
  STEAL,
  POTION,
  MOVE,
  TRAP,
  BLANK,
}

export type DiceModel = {
  id: string,
  label: string,
  faces: Array<FaceType>,
  selectedFace?: number
}

type colors = {
  [key in FaceType]: Array<number>;
};

export const getColorFromDice = (dice: DiceModel): Array<number> => {
  const arrayColors: colors = {
    [FaceType.ATTACK]: [255, 0, 0],
    [FaceType.DEFENSE]: [0, 0, 255],
    [FaceType.TRAP]: [170, 85, 0],
    [FaceType.BLANK]: [255, 255, 255],
    [FaceType.MAGIC]: [0, 255, 0],
    [FaceType.RANGE]: [0, 170, 85],
    [FaceType.DISTANCE]: [85, 0, 170],
    [FaceType.MECHANIC]: [85, 85, 85],
    [FaceType.HEAL]: [170, 0, 85],
    [FaceType.STEAL]: [0, 85, 170],
    [FaceType.POTION]: [85, 170, 0],
    [FaceType.MOVE]: [0, 0, 0],
  };
  let red = 0;
  let green = 0;
  let blue = 0;
  dice.faces.forEach((face: FaceType) => {
    const faceColor: Array<number> = arrayColors[face];
    red += faceColor[0] / 6;
    green += faceColor[1] / 6;
    blue += faceColor[2] / 6;
  });
  return [Math.floor(red), Math.floor(green), Math.floor(blue)];
};
