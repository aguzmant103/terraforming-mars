"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
/**
 * This Game class acts as the entry point to the players and board of a given game:
 * all components and features can be accessed from its properties and methods
 * (an arrangement known as the facade pattern).
 */
class Game {
    constructor() {
        /**
         * Initial global parameters when a game is created.
         */
        this.globalParameters = { globalOxygen: 0, globalOcean: 0, globalTemperature: -30 };
        /**
         * Initiallizing a player list when a game is created.
         */
        this.players = [];
        // Automatically generate UID for this instance. Increase global counter
        this.id = Game._nextID++;
    }
    /**
     * Returns the player with the queried ID, or undefined if one does not exist.
     */
    player(id) {
        return this.players[id];
    }
}
exports.Game = Game;
// ==== PROPERTIES & CONSTRUCTOR ====
/**
 * Static counter used to automatically generate a Unique ID (UID) for each game.
 */
Game._nextID = 0n;
