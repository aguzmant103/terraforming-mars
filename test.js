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
console.log("");
console.log("      WELCOME TO THE TESTING GROUNDS OF TERRAFORMING MARS!     ");
console.log(`
MMMMMMMMMMMMMMMMMMMMMMMMMMMWWWWWMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMWXOxollcccccccclloxOXWMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMN0dl::clodkOO0000OOkdolc::cd0NMMMMMMMMMMMMMMM
MMMMMMMMMMMMNOo:;cd0XWMMMMMMMMMMMMMMMMWX0dc;:oONMMMMMMMMMMMM
MMMMMMMMMMXx:;lkXWMMMWNNXXXNWMMMMMMMMMMMMMWXkl;:xXMMMMMMMMMM
MMMMMMMMXd,..:xOOOkdlc:cccc:ccloxkkOOO0KKXXXKOc..;xNMMMMMMMM
MMMMMMWO;,d0kolccccldkOOOO0K0xdolccccccccccccclxOd,:OWMMMMMM
MMMMMNd'cKMMMMMMWWMXxc::c:;lKMMMMMMMMMWWWNNNNWMMMW0:'dNMMMMM
MMMMXl'oNMMMMMMMMMNl.l0XNXl.oWMMMMMMMMMMMMMMMMMMMMMNo'lNMMMM
MMMNl.:OKNWMMMMMMMNd':ddo:;lKWWNXXXNWMMMMMMMMMMWNXXXKl.oNMMM
MMWx..:cc:clxO00KXWNOollokKXkc:::cc::lxKNNNNKklc:ccc:,..xWMM
MMK;,OWWNKkolcccc::lx0XNX0d;;ok0XNNXOoc::ccc:coOKNNNKOl.;KMM
MMx.lWMMMMMMMWWWNXOoc:cc::cxXMMMWK0KNMWNXKKXNWMMMMMMMMWl.xMM
MWl.kMMMMMMMMMMMMMMMWNNXXNWMMN0x:;c::xNMMMMMMMMMMMMMMMMx.lWM
MNc'OMMMMMMMMMMMMMMMMMMMMMMMNl..lXW0,'OMMMMMMMMMMMMMMMMO'cNM
MNc'OMMMMMMMMMMMMMMMMMMMMMMMWd,':xd:,oXMMMMMMMMMMMMMMMMk.cNM
MWo.xWWNWMMMMMMMMMMMMMMMMMMMMWX0olld0WMMMMMMMMWNXNWMMMMd.oWM
MMO..:ccccloxXWMWKkxOKWWWNXKXNWWMWX0OOOkkkxddoc:c::dKXK:'OMM
MMNc.l0K0kdo:;cl:;clc::cc:cc::cccc::ccccclllolloO0xc::,.cNMM
MMM0,;KMMMMMN0xddlclkK000XNNNK0OO0KNWMMMMMMNk:::,lXWNk',0MMM
MMMWk':KMMMMMMMO;,c''0MMMMMMMMMMMMMMMMMMMMWx.cKK;'0MK:'kWMMM
MMMMWk,;0WMMMMMO,,:;oXMMMMMMMMMMMMMMMMMMMMWx.:x:'dN0;,kWMMMM
MMMMMW0:,dKNWMMWXOOKWMMMMMMMMMMMMMMMMMMWNXXKxcclk0d,:0WMMMMM
MMMMMMMXd'.';ldolcccclxO0KNWNXK0kkxdoolc:cccccc:'.'dXMMMMMMM
MMMMMMMMWKl...:odOKKOocccc:cc::ccllloodkKXXK0d;..lKWMMMMMMMM
MMMMMMMMMMWKd:;lkXWMMMMMWNXKKXNWMMMMMMMMMWXkc;:dKWMMMMMMMMMM
MMMMMMMMMMMMMNOo:;:ox0XNWMMMMMMMMMMWNX0xl:;:o0NMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMWKkoc::ccclloooollccc::cokKWMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMWXKOkxddddddxkOKXWMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
`);
console.log("");
console.log("1. INITIALIZING TWO GAMES");
let game1 = new terraform_files_1.Game();
let game2 = new terraform_files_1.Game();
// console.log(game2);
console.log("1.1. ADDING NEW PLAYER");
game2.newPlayer("Steve");
//console.log(game2.player("Steve"));
console.log("1.2. ADDING ANOTHER PLAYER WITH START CARDS");
game2.newPlayer("Mark").withStartCards();
//console.log(game2.player("Mark")?.listCards());
console.log("1.3. ADDING CARDS TO A PLAYER"); // Pending: this is a test that requires cardCodes or something
game2.player("Mark")?.addCard(cards_1.card004).addCard(cards_1.card009);
//console.log(game2.player("Mark")?.listCards());
console.log("1.4 LISTING CARDS OF A NON-EXISTING PLAYER");
//console.log(game2.player("IronMan")?.listCards());
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
console.log(game2.globalParameters);
game2.player("Mark")?.playCard("card003");
console.log(game2.globalParameters);
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
