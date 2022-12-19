"use strict";
/*
    This test file covers the main functionality in a game as it can be used as a library.
    This file with the README feature list provides a comprehensive understanding.

    Instructions:
    - Enable the commented lines to see the actions.
*/
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const terraform_files_1 = require("./terraform_files");
const cards = __importStar(require("./terraform_files/cards"));
console.log("  \n    WELCOME TO THE TESTING GROUNDS OF TERRAFORMING MARS!    \n ");
console.log("1. INITIALIZING TWO GAMES");
let game1 = new terraform_files_1.Game(10); // Initializing a game with a 10x10 board.
let game2 = new terraform_files_1.Game(25); // Initializing a game with a 25x25 board.
//console.log(game2); // <- Check the different Game IDs
console.log("1.1 PRINTING THE EMPTY BOARD");
// game1.board.printBoard();
console.log("1.2. ADDING NEW PLAYERS TO EACH GAME");
game1.newPlayer("Susan");
game2.newPlayer("Steve");
game2.getPlayer("Steve")?.listAll();
console.log(game2.getPlayer("Steve")); // <- Check the information of the player
console.log("1.3. ADDING ANOTHER PLAYER WITH START CARDS");
game2.newPlayer("Mark").withStartCards(); // <- withStardCards initializes a player's deck with 3 random cards.. 
// console.log(game2.getPlayer("Mark")?.listCards()); // <- Check the cards available on this player
console.log("1.3. ADDING CARDS TO A PLAYER");
game2.getPlayer("Mark")?.buyCard(cards.card004).buyCard(cards.card009);
//console.log(game2.getPlayer("Mark")?.listCards());
console.log("1.4 LISTING CARDS OF A NON-EXISTING PLAYER");
//console.log(game2.getPlayer("IronMan")?.listCards());
//console.log("2. PLAY A CARD THAT DOES NOT EXIST");
console.log("2. PLAY A CARD THE PLAYER DOES NOT HAVE");
/* try
{
    game2.player("Mark")?.playCard("card001");
}
catch (error)
{
    console.error(error);
} */
console.log("2. PLAYING A CARD");
console.log("2.1b SHOWING PARAMETERS BEFORE THE CARD");
/* console.log(game2.globalParameters);
console.log(game2.getPlayer("Mark")?.listResources());
console.log(game2.getPlayer("Mark")?.listProduction());
console.log(game2.getPlayer("Mark")?.listCards()); */
console.log("2.1c SHOWING PARAMETERS AFTER THE CARD");
game2.getPlayer("Steve")?.buyCard(cards.card002);
game2.getPlayer("Mark")?.buyCard(cards.card003);
game2.playCard("Steve", "card002");
game2.playCard("Mark", "card003");
/* console.log(game2.globalParameters);
console.log(game2.getPlayer("Mark")?.listResources());
console.log(game2.getPlayer("Mark")?.listProduction());
console.log(game2.getPlayer("Mark")?.listCards()); */
console.log("3. SHOWING GAME LOGS");
game1.showAllLogs();
//console.log(game1.showAllLogs()); // <- Prints the available logs
/*
    NEXT
1. Need to refactor the test and functions to work more as a facade
2. Add the list of facade commands to the readme
3. Check how the errors are being managed.
4. Decide to go to:
- Continue with the Game implementation
- Try to pursue refactoring to get the description of the assignment
*/ 
