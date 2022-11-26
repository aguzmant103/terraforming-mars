"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const cards_1 = require("./cards");
// Pending to implement
class Player {
    /* Pending: Can this be initialized simpler? */
    constructor(name, game) {
        this.name = name;
        this.game = game;
        /* Can this be initialized simpler? */
        this.playerPoints = {
            terraformPoints: 0,
            victoryPoints: 0
        };
        this.currentcards = []; //Example // Pending: to clean this. // Pending to reduce scope
        this.playerProduction = {
            MegaCredits: 1,
            Steel: 1,
            Titanum: 1,
            Plants: 1,
            Energy: 1,
            Heat: 1
        };
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
    listCards() {
        return this.currentcards;
    }
    playCard(cardCode) {
        const playableCard = returnCardInPlayer(cardCode, this);
        // Pending: need to review these errors are well handled.
        if (playableCard === undefined) {
            throw new Error(`${this.name} does not have this card`);
        }
        // Change Global Parameters // Pending: implement the rest of cases like changing production and requirements checking
        if (playableCard.changeGlobalParameter != undefined) {
            const key = playableCard?.changeGlobalParameter?.key;
            const value = playableCard?.changeGlobalParameter?.addValue;
            this.game.globalParameters[key] += value;
        }
        // Pending: create and refactor this log action
        /*   logAction(this, "played",playableCard.name) */
        // Need to add POP from here
        // Add log of changes
    }
    withStartCards() {
        this.currentcards = [cards_1.card003];
        return this;
    }
    addCard(addCard) {
        this.currentcards.push(addCard);
        return this;
    }
}
exports.Player = Player;
/* This is a helper function to find a card in a player or return undefined. This does not need to be exported. */
function returnCardInPlayer(codeToSearch, playerToSearch) {
    const returningCard = playerToSearch.listCards().find(element => element.code === codeToSearch);
    return returningCard;
}
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
