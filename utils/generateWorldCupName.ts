import { WorldCup } from "../types/WorldCup.type";

export const generateWorldCupName = (worldCup: WorldCup): string => {
  return `${worldCup.year} - ${worldCup.country}`;
};
