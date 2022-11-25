// // import { Marketplace } from "./marketplace";
// import { Listing } from "./marketplace/listing";
// import { Seller } from "./marketplace/user";

import { Game } from "./terraform_files";

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
let game1 = new Game ();
// console.log(game1.player(0));
console.log(game1);
let game2 = new Game ();
// console.log(game2);
game2.addPlayer("Steve");
console.log(game2)
// console.log(game2.player(0));