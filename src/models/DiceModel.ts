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
  INTELLIGENCE,
  PERCEPTION,
  NATURE,
  CHARISMA,
  BLANK,
  UNKNOWN,
}

export interface DiceModel {
  id: string,
  label: string,
  faces: Array<FaceType>,
  selectedFace?: number,
  active: boolean,
}

type colors = {
  [key in FaceType]: Array<number>;
};

export const getColorFromDice = (dice: DiceModel): Array<number> => {
  const arrayColors: colors = {
    [FaceType.ATTACK]: [255, 0, 0],
    [FaceType.DEFENSE]: [0, 0, 255],
    [FaceType.TRAP]: [101, 67, 33],
    [FaceType.BLANK]: [255, 255, 255],
    [FaceType.MAGIC]: [255, 0, 255],
    [FaceType.RANGE]: [170, 103, 57],
    [FaceType.DISTANCE]: [0, 255, 255],
    [FaceType.MECHANIC]: [85, 85, 85],
    [FaceType.HEAL]: [253, 108, 158],
    [FaceType.STEAL]: [0, 0, 0],
    [FaceType.POTION]: [128, 64, 192],
    [FaceType.INTELLIGENCE]: [255, 255, 0],
    [FaceType.PERCEPTION]: [158, 253, 56],
    [FaceType.NATURE]: [0, 255, 0],
    [FaceType.CHARISMA]: [255, 127, 0],
    [FaceType.MOVE]: [245, 75, 94],
    [FaceType.UNKNOWN]: [255, 255, 255],
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
