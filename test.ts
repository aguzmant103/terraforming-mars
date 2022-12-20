/* 
    This test file covers the main functionality in a game as it can be used as a library.
    This file with the README feature list provides a comprehensive understanding.

    Instructions:
    - Enable the commented lines to see the actions.
*/

import { Game } from "./terraform_files";
import { cardList as cards} from "./terraform_files";

console.log("  \n    WELCOME TO THE TESTING GROUNDS OF TERRAFORMING MARS!    \n ");
console.log("1. INITIALIZING TWO GAMES");
let game1 = new Game (10); // Initializing a game with a 10x10 board.
let game2 = new Game (25); // Initializing a game with a 25x25 board.
//console.log(game2.getGameID()); // <- Check the different Game IDs
//console.log(game2.getGameID()); // <- Check the different Game IDs

console.log("1.1 PRINTING AN EMPTY BOARD");
//game2.printBoard(); // <- Print an empty board

console.log("1.2 CHECKING CURRENT GAME PHASE AND GENERATION");
console.log(game2.getPhase());
console.log(game2.getGeneration());
console.log(game2.getAllLogs());

console.log("1.3a. ADDING NEW PLAYERS TO EACH GAME");
game1.newPlayer("Susan");
game2.newPlayer("Steve");
//console.log(game2.getPlayer("Steve")); // <- Check the information of the player

// Pending: temporary tests
// game2.getPlayer("Steve")?.productionPhaseAction();

console.log("1.3b. ADDING ANOTHER PLAYER WITH START CARDS");
game2.newPlayer("Mark").withStartCards(); // <- withStardCards initializes a player's deck with 3 random cards.. 
//console.log(game2.getPlayer("Mark")?.listCards()); // <- Check the cards available on this player

console.log("1.4. ADDING CARDS TO A PLAYER");
game2.getPlayer("Mark")?.buyCard(cards.card004).buyCard(cards.card009); 
//console.log(game2.getPlayer("Mark")?.listCards());

console.log(" \n 2. PLAYING A CARD");
console.log("2.1b SHOWING PARAMETERS BEFORE THE CARD");
/* console.log(game2.globalParameters);
console.log(game2.getPlayer("Mark")?.listResources());
console.log(game2.getPlayer("Mark")?.listProduction());
console.log(game2.getPlayer("Mark")?.listCards()); */

console.log("2.1c SHOWING PARAMETERS AFTER THE CARD");
game2.getPlayer("Steve")?.buyCard(cards.card002);
game2.getPlayer("Mark")?.buyCard(cards.card003);
game2.playCard("Steve","card002");
game2.playCard("Mark","card003");
/* console.log(game2.globalParameters);
console.log(game2.getPlayer("Mark")?.listResources());
console.log(game2.getPlayer("Mark")?.listProduction());
console.log(game2.getPlayer("Mark")?.listCards()); */

console.log(" \n 3. SHOWING GAME LOGS");
game1.getAllLogs();
//console.log(game2.getAllLogs()); // <- Prints the available logs

/* 
    1. Make this safe
    2. Test it again
    3. Clean stuff
    4. Test it again
    5. Update Readme */

/* Pending for Monday
1. Contineu with gameEngine and Objects
2. Continue with Pending stuff
3. Continue with missing elements from the list
4. Update the references */



/* 
    NEXT
2. Add the list of facade commands to the readme
3. Check how the errors are being managed.
4. Decide to go to:
- Continue with the Game implementation
- Try to pursue refactoring to get the description of the assignment
*/

/* PENDING:
1. Game Engine
2. All the Phases in linked List
3. Start game action 
4. Game board*/