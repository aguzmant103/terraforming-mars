import { Game } from "./terraform_files";
import { card003 } from "./terraform_files/cards";

// const seller = 0 as unknown as Seller;
// const listing = Listing.newDraft(seller)
//                        .titled("Super Mushrooms x3")
//                        .describedAs("These make you grow tall.")
//                        .withStartPrice(10)
//                        .withMinBidTime(100);
// const activeListing = listing.activate();

// // const listing = Listing.newDraft(seller)
// //                        .titled("Super Mushrooms x3")

console.log("1. INITIALLIZING A GAME!");
// let game1 = new Game ();
// console.log(game1.player(0));
// console.log(game1);
let game2 = new Game ();
// console.log(game2);
game2.addPlayer("Steve");
game2.addPlayer("Mark");
//console.log(game2.player.name);
console.log("console.log(game2.players);");
console.log(game2.globalParameters);
game2.players[0]?.playCard(game2,card003);
// console.log(game2.players[0]?.playCard);
console.log(game2.globalParameters);
//console.log(game2.globalParameters);
/* (Rest parameters) Changing  global parameters with an arbitrary number of argumens */
//game2.editGlobalParameter({key : "globalOxygen", addValue : 9},{key : "globalTemperature", addValue : 9});
//game2.editGlobalParameter();
//console.log(game2.globalParameters);
//game2.editGlobalParameter({key : "globalOxygen", addValue : 9});
//game2.editGlobalParameter({key : "globalTemperature", addValue : 4});
//console.log(game2.globalParameters);
// console.log(game2.player(0));