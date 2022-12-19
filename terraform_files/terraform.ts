import {Player} from "./player";
import {GlobalParameters} from "./globalParameters";
import {LogStack} from "./logs";
import {GameBoard} from "./objects";
import { GP } from "./globalParameters";
import { GamePhases} from "./gameEngine";
/**
 * This Game class acts as the entry point to the players and board of a given game:
 * all components and features can be accessed from its properties and methods
 * (an arrangement known as the facade pattern).
 */
export class Game {
    // ==== PROPERTIES & CONSTRUCTOR ====
    /**
     * Static counter used to automatically generate a Unique ID (UID) for each game. 
     */
    private static _nextID: bigint = 1n;
    /**
     * Automatically generated UID for a game instance.
     */
    private gameId: bigint;
    /**
     * Global parameters of game that represent Oxygen, Ocean and Temperature levels.
     */
    readonly globalParameters : GlobalParameters = { globalOxygen : 0, globalOcean : 0, globalTemperature : -30 }; //PENDING: how to restrict this against user manipulation.
    readonly gamePhases = new GamePhases();
    readonly gameRound = 0;
    /**
     * Initiallizing a player list when a game is created.
     */
    private readonly players: Player[] = [];
    /* Initiallizing a LogStack when a game is created. */
    private logs : LogStack = new LogStack(1000);
    /* Initializing the board that will serve as a map. */
    private board : GameBoard;

    constructor(dimensions : number)
    {
        // Automatically generate UID for this instance. Increase global counter
        this.gameId = Game._nextID++;
        // Instantiates a new board tied to this game.
        this.board = new GameBoard(this, dimensions);
        this.addLog(`Game initialized`);  
    }

    // ==== METHODS ====
    /** 
    * The player specified plays a card. Returns undefined if the player is not found. 
    * Throws an error if the player does not have the card. 
    */
    public playCard(playerName : string, card : string)
    {
        this.getPlayer(playerName)?.playCard(card);
    }
    /**
    * Factory pattern: Terraform Game is responsible for Player creation,
    *                  because it has to handle additional internal logic.
    */
    /** 
    * Creates a new player and adds it to this game. No duplicated names are possible.
    */
    public newPlayer(playerName : string) : Player 
    {
        if (this.getPlayer(playerName) === undefined)
        {
            const player = new Player (playerName, this);
            this.players.push(player);
            return player;
        }
        else 
        {
            this.addLog("Can't have duplicated player names.");
            return this.getPlayer(playerName) as Player; // This will always return a Player (and not undefined) due to the check above.
        }
    }
    /**
     * Returns the first player with the queried name, or undefined if one does not exist.
     */
    public getPlayer(name: string): Player|undefined 
    {
        return this.players.find(element => element.name === name);
    }
    /** 
     * Return the current global parameters of a game.
     * */ 
    public showGlobalParameters() 
    {
        return this.globalParameters;
    }
    /** 
     * PENDING: Do I keep this? Change a global parameters of a game.
     * */ 
    public changeGlobalParameters(key : GP, changeValue : number) 
    {
        this.globalParameters[key] += changeValue;
        return this.globalParameters;
    }
    /** 
    * Return all logs of a game.
    * */ 
    public showAllLogs() 
   {
       return this.logs.getLogs();
    } 
    /** 
    * Return all players in the game.
    * */ 
    public showPlayers() 
    {
       return this.players;
    } 
     /** 
    * Return the last logs of a game.
    * */ 
    public showLastLog() 
   {
       return this.logs.peak();
    } 
    /**
     * Prints the current status of the board.
    */
    public printBoard()
    {
        this.board.printBoard();
    }
    /** 
     * Adds a log to the current game. PENDING: how to restrict this against user manipulation.
    */
    addLog(message : string)
    {
        this.logs.addLog(message);
    }
}