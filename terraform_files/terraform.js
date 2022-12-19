"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const player_1 = require("./player");
const logs_1 = require("./logs");
const objects_1 = require("./objects");
/**
 * This Game class acts as the entry point to the players and board of a given game:
 * all components and features can be accessed from its properties and methods
 * (an arrangement known as the facade pattern).
 */
class Game {
    constructor(dimensions) {
        /**
         * Global parameters of game that represent Oxygen, Ocean and Temperature levels.
         */
        this.globalParameters = { globalOxygen: 0, globalOcean: 0, globalTemperature: -30 }; //PENDING: how to restrict this against user manipulation.
        /**
         * Initiallizing a player list when a game is created.
         */
        this.players = [];
        /* Initiallizing a LogStack when a game is created. */
        this.logs = new logs_1.LogStack(1000);
        // Automatically generate UID for this instance. Increase global counter
        this.gameId = Game._nextID++;
        // Instantiates a new board tied to this game.
        this.board = new objects_1.GameBoard(this, dimensions);
        this.addLog(`Game initialized`);
    }
    // ==== METHODS ====
    /**
    * The player specified plays a card. Returns undefined if the player is not found.
    * Throws an error if the player does not have the card.
    */
    playCard(playerName, card) {
        this.getPlayer(playerName)?.playCard(card);
    }
    /**
    * Factory pattern: Terraform Game is responsible for Player creation,
    *                  because it has to handle additional internal logic.
    */
    /**
    * Creates a new player and adds it to this game. No duplicated names are possible.
    */
    newPlayer(playerName) {
        if (this.getPlayer(playerName) === undefined) {
            const player = new player_1.Player(playerName, this);
            this.players.push(player);
            return player;
        }
        else {
            this.addLog("Can't have duplicated player names.");
            return this.getPlayer(playerName); // This will always return a Player (and not undefined) due to the check above.
        }
    }
    /**
     * Returns the first player with the queried name, or undefined if one does not exist.
     */
    getPlayer(name) {
        return this.players.find(element => element.name === name);
    }
    /**
     * Return the current global parameters of a game.
     * */
    showGlobalParameters() {
        return this.globalParameters;
    }
    /**
     * PENDING: Do I keep this? Change a global parameters of a game.
     * */
    changeGlobalParameters(key, changeValue) {
        this.globalParameters[key] += changeValue;
        return this.globalParameters;
    }
    /**
    * Return all logs of a game.
    * */
    showAllLogs() {
        return this.logs.getLogs();
    }
    /**
    * Return all logs of a game.
    * */
    showPlayers() {
        return this.players;
    }
    /**
   * Return the last logs of a game.
   * */
    showLastLog() {
        return this.logs.peak();
    }
    /**
     * Prints the current status of the board.
    */
    printBoard() {
        this.board.printBoard();
    }
    /**
     * Adds a log to the current game. PENDING: how to restrict this against user manipulation.
    */
    addLog(message) {
        this.logs.addLog(message);
    }
}
exports.Game = Game;
// ==== PROPERTIES & CONSTRUCTOR ====
/**
 * Static counter used to automatically generate a Unique ID (UID) for each game.
 */
Game._nextID = 1n;
