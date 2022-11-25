"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
// Pending to implement
class Player {
    constructor() {
        this.terraformPoints = 0;
        this.victoryPoints = 0;
        // readonly currentcards : card = [];
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
