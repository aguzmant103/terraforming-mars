"use strict";
// Check there are no refernces for Marketplace, User, Buyer, Seller, etc.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
/**
 * This Game class acts as the entry point to the players and board of a given game:
 * all components and features can be accessed from its properties and methods
 * (an arrangement known as the facade pattern).
 */
class Game {
    // showGlobalParameters () : GlobalParameters{
    //     return this.globalParameters();
    // }
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
        /**
         * Initiallizing a player list when a game is created.
         */
        this.players = [];
        // Automatically generate UID for this instance. Increase global counter
        this.id = Game._nextID++;
    }
    /**
    * Edit one or several global parameter efficiently. The type of input values allowed is the union of Global Oxygen, Ocean and Temperature types.
    */
    /*     editGlobalParameter(newGlobalParameter: GlobalParameters, value : GlobalOxygen | GlobalOcean |GlobalTemperature): GlobalParameters {
            this.globalParameters=newGlobalParameter;
            return this.globalParameters;
        } */
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
