"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const cards_1 = require("./cards");
// Pending to implement
class Player {
    constructor(name, game) {
        this.name = name;
        this.game = game;
        this.terraformPoints = 0;
        this.victoryPoints = 0;
        this.currentcards = [cards_1.card003]; //Examlpe // Pending: to clean this.
        /* Can this be initialized simpler? */
        // Pending: player belongs to a specific Game
        this.currentResources = {
            MegaCredits: 0,
            Steel: 0,
            Titanum: 0,
            Plants: 0,
            Energy: 0,
            Heat: 0
        };
        this.name = name;
        this.game = game;
    }
    // ==== METHODS ====
    //Pending to implement
    playCard(thisGame, playableCard) {
        // Add log of changes
        // Change Global Parameters // Pending: implement the rest of cases like changing production and requirements checking
        const key = playableCard.changeGlobalParameter?.key;
        const value = playableCard.changeGlobalParameter?.addValue;
        thisGame.globalParameters[key] += value;
        //thisGame.globalParameters["globalOcean"] = 5;
    }
}
exports.Player = Player;
/* class Player
Properties:
    type Player Information (de
        Properties
            Corporation
            Terraforming Points
            Tags
            Actions
            Effects
            Victory Points
            Current Cards
            Resources Current
                Mega Credits
                Steel
                Titanium
                Plants
                Energy
                Heat
            Resource Production stats
                Mega Credits
                Steel
                Titanium
                Plants
                Energy
                Heat
                
Constructor:
    Name
    (corporation, …)
    …
Methods:
    Cards - Buy new
    Cards - Use them
    Do Actions or Pass or Skip Turn
 */ 
