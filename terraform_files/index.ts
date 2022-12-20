/**
 * This 'index.ts' file is used to turn the surrounding
 * 'terraform_files' folder into a module, imported by 'test.ts' outside.
 */

// Select re-exports form sub-modules:
// See https://www.typescriptlang.org/docs/handbook/modules.html#re-exports

export { card, cardList, cardListType} from "./cards";
export { GlobalParameters } from "./globalParameters";
export { GamePhases } from "./gameEngine";
export { LogStack } from "./logs";
export { OceanClass, GreeneryClass, CityClass } from "./objects";
export { Player } from "./player";
export { R, resources } from "./resources";
export { Game } from "./terraform";
