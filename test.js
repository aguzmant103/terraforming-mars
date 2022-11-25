"use strict";
// // import { Marketplace } from "./marketplace";
// import { Listing } from "./marketplace/listing";
// import { Seller } from "./marketplace/user";
Object.defineProperty(exports, "__esModule", { value: true });
const terraform_files_1 = require("./terraform_files");
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
let game1 = new terraform_files_1.Game();
// console.log(game1.player(0));
//console.log(game1);
let game2 = new terraform_files_1.Game();
// console.log(game2);
game2.addPlayer("Steve");
//console.log(game2);
console.log(game2.globalParameters);
/* (Rest parameters) Changing  global parameters with an arbitrary number of argumens */
game2.editGlobalParameter({ key: "globalOxygen", addValue: 9 }, { key: "globalTemperature", addValue: 9 });
game2.editGlobalParameter();
console.log(game2.globalParameters);
game2.editGlobalParameter({ key: "globalOxygen", addValue: 9 });
game2.editGlobalParameter({ key: "globalTemperature", addValue: 4 });
console.log(game2.globalParameters);
// console.log(game2.player(0));
