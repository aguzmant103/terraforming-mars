"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
/**
 * This Game class acts as the entry point to the players and board of a given game:
 * all components and features can be accessed from its properties and methods
 * (an arrangement known as the facade pattern).
 */
class Game {
    /**
     * Initiallizing a player list when a game is created.
     */
    // private players: Player[] = [];
    /**
     * Returns the player with the queried ID, or undefined if one does not exist.
     */
    /*     player(id: number): Player|undefined {
            return this.players[id];
        } */
    constructor() {
        /**
         * Global parameters of game that represent Oxygen, Ocean and Temperature levels.
         */
        this.globalParameters = { globalOxygen: 0, globalOcean: 0, globalTemperature: -30 };
        // Automatically generate UID for this instance. Increase global counter
        this.id = Game._nextID++;
    }
    // ==== METHODS ====
    /**
     * Edit one or several global parameter efficiently.
     * If no key value pair is specified, return the current global parameters.
     */
    // Pending: need to make this private and only playable with cards.
    editGlobalParameter(...values) {
        // Pending: need stronger type checkers here and guardrails
        // Pending: how to prevent it overflows
        // Pending: how to prevent garbish values are entered during runtime
        for (const element of values) {
            this.globalParameters[element.key] += element.addValue;
        }
        return this.globalParameters;
    }
    addPlayer(playerName) {
        return true;
    }
}
exports.Game = Game;
// ==== PROPERTIES & CONSTRUCTOR ====
/**
 * Static counter used to automatically generate a Unique ID (UID) for each game.
 */
Game._nextID = 0n;
