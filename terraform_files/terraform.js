"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const player_1 = require("./player");
const logs_1 = require("./logs");
const objects_1 = require("./objects");
const gameEngine_1 = require("./gameEngine");
/**
 * This Game class acts as the entry point to the players and board of a given game:
 * all components and features can be accessed from its properties and methods
 * (an arrangement known as the facade pattern).
 */
class Game {
    /**
     * Constructor method when initializing a Game
     * */
    constructor(dimensions) {
        /**
         * Global parameters of game that represent Oxygen, Ocean and Temperature levels.
         * PENDING: how to restrict this against user manipulation.
         */
        this.globalParameters = {
            globalOxygen: 0,
            globalOcean: 0,
            globalTemperature: -30
        };
        this.gamePhases = new gameEngine_1.GamePhases();
        this.gameGeneration = 1;
        /**
         * Initiallizing a player list when a game is created.
         */
        this.players = [];
        /**
         * Initiallizing a LogStack when a game is created.
         * */
        this.logs = new logs_1.LogStack(1000);
        // Automatically generate UID for this instance. Increase global counter
        this.gameId = Game._nextID++;
        // Instantiates a new board tied to this game.
        this.board = new objects_1.GameBoard(this, dimensions);
        this.addLog(`Game initialized`);
    }
    // ===== METHODS ===== //
    // ==== GETTERS ====
    /**
    * Return all logs of a game.
    * */
    getAllLogs() {
        return this.logs.getLogs();
    }
    /**
    * Return the Game ID.
    * */
    getGameID() {
        return this.gameId;
    }
    /**
    * Return all players in the game.
    * */
    getAllPlayers() {
        return this.players;
    }
    /**
   * Return the last logs of a game.
   * */
    getLastLog() {
        return this.logs.peak();
    }
    /**
     * Returns the first player with the queried name, or undefined if one does not exist.
     */
    getPlayer(name) {
        return this.players.find(element => element.name === name);
    }
    /**
     * Return all or one global parameters of this game.
     * */
    getGlobalParameters(key) {
        if (key === undefined) {
            return this.globalParameters;
        }
        else {
            return this.globalParameters[key];
        }
    }
    /**
     * Get the currentgame phase.
     */
    getPhase() {
        return this.gamePhases.current.value;
    }
    /**
     * Get the current game generation.
     */
    getGeneration() {
        return this.gameGeneration;
    }
    // ==== SETTERS ====
    /**
     * PENDING: Do I keep this? Change a global parameters of a game.
     * */
    setGlobalParameters(key, changeValue) {
        /* Pending to implement a check on the maximum values. */
        this.globalParameters[key] += changeValue;
        return this.globalParameters;
    }
    // ==== MISC ====
    /**
     * Prints the current status of the board.
    */
    printBoard() {
        this.board.printBoard();
    }
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
        /** Pending to add a check to only allow this before a game is started. */
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
     * Adds a log to the current game. PENDING: how to restrict this against user manipulation.
    */
    addLog(message) {
        this.logs.addLog(message);
    }
    /**
     * Moving to next phase. Pending: restricting this.
    */
    nextPhase() {
        this.gamePhases.nextPhase();
    }
    /**
     * Goes to the next generation.
      */
    nextGeneration() {
        this.gameGeneration++;
    }
    /**
     * Start the game. No new users can be added after this point
     * */
    startGame() {
        if (this.getGeneration() === 0 && this.getPhase() === "turnOrderPhase") {
            this.addLog("Game starting.");
        }
        /* Pending to implement a new state before the game is started and a check in new player added. */
    }
}
exports.Game = Game;
// ==== PROPERTIES & CONSTRUCTOR ====
/**
 * Static counter used to automatically generate a Unique ID (UID) for each game.
 */
Game._nextID = 1n;
