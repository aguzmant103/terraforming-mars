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
console.log("1. INITIALIZING TWO GAMES!");
let game1 = new terraform_files_1.Game();
let game2 = new terraform_files_1.Game();
// console.log(game2);
console.log("1.1. ADDING NEW PLAYER");
game2.newPlayer("Steve");
//console.log(game2.players[0]);
console.log("1.2. ADDING ANOTHER PLAYER WITH START CARDS");
game2.newPlayer("Mark").withStartCards();
//console.log(game2.players[1]?.currentcards);
console.log("1.3. ADDING CARDS TO A PLAYER"); // Pending: this is a test that requires cardCodes or something
game2.players[1]?.addCard(cards_1.card004).addCard(cards_1.card004);
//console.log(game2.players[1]?.currentcards);
console.log("1.4 LISTING CARDS OF A PLAYER");
console.log(game2.players[1]?.listCards());
//console.log("2. PLAY A CARD THAT DOES NOT EXIST");
//console.log("2. PLAY A CARD THE PLAYER DOES NOT HAVE");
//console.log("2. PLAYING A CARD");
//console.log(game2.globalParameters);
//game2.players[0]?.playCard("card003");
//console.log(game2.globalParameters);
/* static newDraft(seller: Seller): DraftListing {
    return new ConcreteListing(this._nextId++, seller) as DraftListing;
}

titled(title: string): this & {title: string} {
    this.title = title;
    return this as this & {title: string};
} */
//console.log(game2.globalParameters);
/* (Rest parameters) Changing  global parameters with an arbitrary number of argumens */
//game2.editGlobalParameter({key : "globalOxygen", addValue : 9},{key : "globalTemperature", addValue : 9});
//game2.editGlobalParameter();
//console.log(game2.globalParameters);
//game2.editGlobalParameter({key : "globalOxygen", addValue : 9});
//game2.editGlobalParameter({key : "globalTemperature", addValue : 4});
//console.log(game2.globalParameters);
// console.log(game2.player(0));
