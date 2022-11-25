"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
// Check there are no refernces for Marketplace, User, Buyer, Seller, etc.
// PENDING: Imports everything from the other submodules
const player_1 = require("./player");
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
        // Automatically generate UID for this instance. Increase global counter
        this.gameId = Game._nextID++;
    }
    /**
     * Returns the player with the queried ID, or undefined if one does not exist.
     */
    player(name) {
        return this.players[0];
    }
    // ==== METHODS ====
    /**
     * Edit one or several global parameter efficiently.
     * If no key value pair is specified, return the current global parameters.
     */
    // Pending: need to make this private and only playable with cards.
    editGlobalParameter(...values) {
        /*         // Pending: need stronger type checkers here and guardrails
                // Pending: how to prevent it overflows
                // Pending: how to prevent garbish values are entered during runtime */
        for (const element of values) {
            this.globalParameters[element.key] += element.addValue;
        }
        return this.globalParameters;
    }
    addPlayer(playerName) {
        this.players.push(new player_1.Player(playerName, this));
        return true;
    }
}
exports.Game = Game;
// ==== PROPERTIES & CONSTRUCTOR ====
/**
 * Static counter used to automatically generate a Unique ID (UID) for each game.
 */
Game._nextID = 0n;
