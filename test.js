"use strict";
/*
    This test file covers the main functionality in a game as it can be used as a library.
    This file with the README feature list provides a comprehensive understanding.

    Instructions:
    - Enable the commented lines to see the actions.
*/
Object.defineProperty(exports, "__esModule", { value: true });
const terraform_files_1 = require("./terraform_files");
console.log("  \n    WELCOME TO THE TESTING GROUNDS OF TERRAFORMING MARS!    \n ");
console.log("1. INITIALIZING TWO GAMES");
let game1 = new terraform_files_1.Game(10); // Initializing a game with a 10x10 board.
let game2 = new terraform_files_1.Game(25); // Initializing a game with a 25x25 board.
/* console.log(game1.getGameID()); */ // <- Check the different Game IDs
/* console.log(game2.getGameID()); */ // <- Check the different Game IDs
console.log("1.1 PRINTING AN EMPTY BOARD");
/* game2.printBoard(); */ // <- Print an empty board
console.log("1.2. ADDING NEW PLAYERS TO EACH GAME");
game1.newPlayer("Susan");
game2.newPlayer("Steve");
/* console.log(game2.getPlayer("Steve")); */ // <- Check the information of the player.
console.log("1.3. ADDING ANOTHER PLAYER WITH START CARDS");
game2.newPlayer("Mark").withStartCards(); // <- withStardCards initializes a player's deck with 3 random cards.
/* console.log(game2.getPlayer("Mark")?.listCards()); */ // <- Check the cards available on this player.
console.log("1.4 CHECKING CURRENT GAME PHASE AND GENERATION");
game2.startGame();
/* console.log(game2.getPhase());
console.log(game2.getGeneration());
console.log(game2.getAllLogs()); */
console.log("1.5. ADDING CARDS TO A PLAYER");
game2.getPlayer("Mark")?.buyCard("card004").buyCard("card009");
/* console.log(game2.getPlayer("Mark")?.listCards()); */
console.log(" \n 2. PLAYING A CARD");
console.log("2.1a SHOWING PARAMETERS BEFORE THE CARD");
/* console.log(game2.getGlobalParameters());
console.log(game2.getPlayer("Mark")?.listResources());
console.log(game2.getPlayer("Mark")?.listProduction());
console.log(game2.getPlayer("Mark")?.listCards()); */
console.log("2.1b SHOWING PARAMETERS AFTER THE CARD");
game2.getPlayer("Mark")?.buyCard("card003");
game2.playCard("Mark", "card003");
/* console.log(game2.getGlobalParameters());
console.log(game2.getPlayer("Mark")?.listResources());
console.log(game2.getPlayer("Mark")?.listProduction());
console.log(game2.getPlayer("Mark")?.listCards()); */
console.log(" \n 3. SHOWING GAME LOGS");
console.log(game2.getAllLogs());
