"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const terraform_files_1 = require("./terraform_files");
const cards_1 = require("./terraform_files/cards");
// const seller = 0 as unknown as Seller;
// const listing = Listing.newDraft(seller)
//                        .titled("Super Mushrooms x3")
//                        .describedAs("These make you grow tall.")
//                        .withStartPrice(10)
//                        .withMinBidTime(100);
// const activeListing = listing.activate();
// // const listing = Listing.newDraft(seller)
// //                        .titled("Super Mushrooms x3")
console.log("  \n    WELCOME TO THE TESTING GROUNDS OF TERRAFORMING MARS!    \n ");
console.log("1. INITIALIZING TWO GAMES");
let game1 = new terraform_files_1.Game();
let game2 = new terraform_files_1.Game();
// console.log(game2); // <- Check the different Game IDs
console.log("1.1. ADDING NEW PLAYER");
game2.newPlayer("Steve");
// console.log(game2.getPlayer("Steve")); // <- Check the information of the player
console.log("1.2. ADDING ANOTHER PLAYER WITH START CARDS");
game2.newPlayer("Mark").withStartCards(); // <- withStardCards initializes a player's deck with 3 random cards.. 
// console.log(game2.getPlayer("Mark")?.listCards()); // <- Check the cards available on this player
console.log("1.3. ADDING CARDS TO A PLAYER"); // Pending: this is a test that requires cardCodes or something
game2.getPlayer("Mark")?.buyCard(cards_1.card004).buyCard(cards_1.card009);
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
console.log("2.1a ADDING MEGACREDITS TO PLAYER");
// game2.getPlayer("Mark")?.addResource("MegaCredits",40);
// game2.getPlayer("Steve")?.addResource("MegaCredits",40); // Pending: how to do this test.
console.log("2.1b SHOWING PARAMETERS BEFORE THE CARD");
/* console.log(game2.globalParameters);
console.log(game2.getPlayer("Mark")?.listResources());
console.log(game2.getPlayer("Mark")?.listProduction());
console.log(game2.getPlayer("Mark")?.listCards()); */
console.log("2.1c SHOWING PARAMETERS AFTER THE CARD");
game2.getPlayer("Steve")?.buyCard(cards_1.card009);
game2.getPlayer("Mark")?.buyCard(cards_1.card003);
game2.playCard("Steve", "card009");
game2.playCard("Mark", "card003");
/* console.log(game2.globalParameters);
console.log(game2.getPlayer("Mark")?.listResources());
console.log(game2.getPlayer("Mark")?.listProduction());
console.log(game2.getPlayer("Mark")?.listCards()); */
console.log("3. SHOWING GAME LOGS");
game2.logs.getAll();
console.log(game2.logs.getAll()); // <- Prints the available logs
/*
    NEXT
1. Need to refactor the test and functions to work more as a facade
2. Add the list of facade commands to the readme
3. Check how the errors are being managed.
4. Decide to go to:
- Continue with the Game implementation
- Try to pursue refactoring to get the description of the assignment
*/ 
