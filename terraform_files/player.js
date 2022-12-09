"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const cards_1 = require("./cards");
class Player {
    constructor(name, game) {
        this.name = name;
        this.game = game;
        this.playerCards = [];
        this.playerPoints = {
            terraformPoints: 0,
            victoryPoints: 0
        };
        this.playerProduction = {
            MegaCredits: 1,
            Steel: 1,
            Titanium: 1,
            Plants: 1,
            Energy: 1,
            Heat: 1
        };
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
    /**
        List all player cards.
    */
    listCards() {
        return this.playerCards;
    }
    /**
        List player production stats.
    */
    listProduction() {
        return this.playerProduction;
    }
    /**
        List player available resources.
    */
    listResources() {
        return this.playerResources;
    }
    /**
        Play a card player´s card.
    */
    playCard(cardCode) {
        // 1. Check card if card is available for the player.
        const playableCard = returnCardInPlayer(cardCode, this);
        if (playableCard === undefined) {
            throw new Error(`${this.name} does not have this card`);
        }
        // 2. Check that the preconditions for the card effects hold
        // 2.1 Check that the requiredGlobalParameter are met
        if (playableCard.requiredGlobalParameter != undefined) {
            let { key, higherOrEqual, reqValue } = playableCard.requiredGlobalParameter;
            // Check if the requirements are fulfilled. The 'higherOrEqual' boolean selects which comparison to make.
            const reqFulfilled = higherOrEqual ? this.game.globalParameters[key] >= reqValue : this.game.globalParameters[key] <= reqValue;
            if (!reqFulfilled) {
                throw new Error('The global parameter requirements are not met.');
            }
        }
        // 2.2 Check that the requiredResources are met
        for (const resource of playableCard.requiredResources) {
            if (resource.reqValue > this.playerResources[resource.key]) {
                throw new Error(`Not enough ${resource.key} available to play "${playableCard.name}".`);
            }
        }
        // 3. Perform the transitions
        // 3.1 Change Global Parameters
        if (playableCard.changeGlobalParameter != undefined) {
            const { key, changeValue } = playableCard?.changeGlobalParameter;
            this.game.globalParameters[key] += changeValue;
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
        // 3.5 Add Logs
        this.game.logs.log(`${this.name} played ${cardCode}.`);
    }
    /**
        Buy a card if the player has the resources.
    */
    buyCard(newCard) {
        this.game.logs.log(`${this.playCard.name} bought ${newCard.code}`);
        return this;
    }
    addResource(resource, value) {
        this.playerResources[resource] += value;
        this.game.logs.log(`${value + " " + resource} to ${this.name}`);
        return this;
    }
    withStartCards() {
        this.playerCards = [];
        this.playerCards.push(randomCard(), randomCard(), randomCard());
        return this;
    }
    addCard(newCard) {
        this.playerCards.push(newCard);
        return this;
    }
}
exports.Player = Player;
/**
    Helper function to find a card in a player or return undefined. This does not need to be exported.
 */
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
            Corporation // Not
            Tags // Not
            Actions // Not
            Effects // Not
Constructor:
    Name
    (corporation, …)
    …
Methods:
    Cards - Buy new
    Cards - Use them
    Do Actions or Pass or Skip Turn
 */ 
