"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
// Pending: Check there are no refernces for Marketplace, User, Buyer, Seller, etc.
// PENDING: Imports everything from the other submodules
const player_1 = require("./player");
const logs_1 = require("./logs");
/**
 * This Game class acts as the entry point to the players and board of a given game:
 * all components and features can be accessed from its properties and methods
 * (an arrangement known as the facade pattern).
 */
class Game {
    constructor() {
        /**
         * Global parameters of game that represent Oxygen, Ocean and Temperature levels.
         */
        this.globalParameters = { globalOxygen: 0, globalOcean: 0, globalTemperature: -30 };
        /**
         * Initiallizing a player list when a game is created.
         */
        this.players = [];
        /* Initiallizing a LogStack when a game is created. */
        this.logs = new logs_1.LogStack(1000);
        // Automatically generate UID for this instance. Increase global counter
        this.gameId = Game._nextID++;
    }
    // ==== METHODS ====
    /**
     * Edit one or several global parameter efficiently.
     * If no key value pair is specified, return the current global parameters.
     */
    // Pending: need to make this private and only playable with cards.
    editGlobalParameter(...values) {
        /*      // Pending: need stronger type checkers here and guardrails
                // Pending: how to prevent it overflows
                // Pending: how to prevent garbish values are entered during runtime */
        for (const element of values) {
            this.globalParameters[element.key] += element.addValue;
        }
        return this.globalParameters;
    }
    /**
    * The player specified plays a card. Returns undefined if the player is not found.
    * Throws an error if the player does not have the card.
    */
    playCard(playerName, card) {
        this.getPlayer(playerName)?.playCard(card);
    }
    /**
    * Creates a new player and adds it to this game.
    */
    newPlayer(playerName) {
        const player = new player_1.Player(playerName, this);
        this.players.push(player);
        return player;
    }
    /**
     * Returns the first player with the queried name, or undefined if one does not exist.
     * Pending: No duplication of player names is possible
     */
    getPlayer(name) {
        return this.players.find(element => element.name === name);
    }
}
exports.Game = Game;
// ==== PROPERTIES & CONSTRUCTOR ====
/**
 * Static counter used to automatically generate a Unique ID (UID) for each game.
 */
Game._nextID = 1n; // Pending: Do we use bigint? Can it have a nicer number?
