/**
 * This 'index.ts' file is used to turn the surrounding
 * 'terraform_files' folder into a module, imported by 'test.ts' outside.
 */

// Select re-exports form sub-modules:
// See https://www.typescriptlang.org/docs/handbook/modules.html#re-exports
export { Game } from "./terraform";
export { Player } from "./player";
export { cardList } from "./cards";

