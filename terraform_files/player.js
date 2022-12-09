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
        /* PENDING: Can this be initialized simpler? */
        this.playerPoints = {
            terraformPoints: 0,
            victoryPoints: 0
        };
        this.playerCards = []; //Example // Pending: to clean this. // Pending to reduce scope
        this.playerProduction = {
            MegaCredits: 1,
            Steel: 1,
            Titanium: 1,
            Plants: 1,
            Energy: 1,
            Heat: 1
        };
        // Pending: player belongs to a specific Game
        this.playerResources = {
            MegaCredits: 0,
            Steel: 0,
            Titanium: 0,
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
        return this.playerCards;
    }
    listProduction() {
        return this.playerProduction;
    }
    listResources() {
        return this.playerResources;
    }
    playCard(cardCode) {
        // 1. Check card if card is available for the player.
        const playableCard = returnCardInPlayer(cardCode, this);
        if (playableCard === undefined) {
            throw new Error(`${this.name} does not have this card`);
        }
        // 2. Check that the preconditions for the card effects hold
        // 2.1 Check that the requiredGlobalParameter are met
        if (playableCard.requiredGlobalParameter != undefined) {
            let { key, higherOrEqual, value } = playableCard.requiredGlobalParameter;
            // Check if the requirements are fulfilled. The 'higherOrEqual' boolean selects which comparison to make.
            const reqFulfilled = higherOrEqual ? this.game.globalParameters[key] >= value : this.game.globalParameters[key] <= value;
            if (!reqFulfilled) {
                throw new Error('The global parameter requirements are not met.');
            }
        }
        // 2.2 Check that the requiredResources are met
        for (const resource of playableCard.requiredResources) {
            if (resource.value > this.playerResources[resource.key]) {
                throw new Error(`Not enough ${resource.key} available to play "${playableCard.name}".`);
            }
        }
        // 3. Perform the transitions
        // 3.1 Change Global Parameters
        if (playableCard.changeGlobalParameter != undefined) {
            const { key, addValue } = playableCard?.changeGlobalParameter;
            this.game.globalParameters[key] += addValue;
        }
        // 3.2 Change Player Resources
        if (playableCard.changePlayerResources != undefined) {
            for (const resource of playableCard.changePlayerResources) {
                const { key, changeValue } = resource;
                this.playerResources[key] += changeValue;
            }
        }
        // 3.3 Change Player Production
        if (playableCard.changePlayerProduction != undefined) {
            for (const production of playableCard.changePlayerProduction) {
                const { key, changeValue } = production;
                this.playerProduction[key] += changeValue;
            }
        }
        // 3.4 Remove card from list
        const index = this.playerCards.indexOf(playableCard);
        this.playerCards.splice(index, 1);
        // 3.4 Add Logs
        /*   logAction(this, "played",playableCard.name) */
    }
    addResource(resource, value) {
        this.playerResources[resource] += value;
        return this;
    }
    /*     // Pending: add 3 random cards from the list
        withStartCards(): this
        {
            this.playerCards = [card003];
            return this;
        }    // Pending: add 3 random cards from the list */
    withStartCards() {
        this.playerCards = [];
        this.playerCards.push(randomCard(), randomCard(), randomCard());
        return this;
    }
    addCard(addCard) {
        this.playerCards.push(addCard);
        return this;
    }
}
exports.Player = Player;
/* This is a helper function to find a card in a player or return undefined. This does not need to be exported. */
function returnCardInPlayer(codeToSearch, playerToSearch) {
    const returningCard = playerToSearch.listCards().find(element => element.code === codeToSearch);
    return returningCard;
}
/**
 * Helper function that returns a random card from the available cards in the game.
 */
function randomCard() {
    return cards_1.cardList[Math.floor(Math.random() * cards_1.cardList.length)]; //Explicitely ignoring the undefined case as the cardList array will always be initialized with cards (this IS the available cards list)
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
