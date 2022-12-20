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
    private globalParameters = 
    { 
        globalOxygen : 0, 
        globalOcean : 0, 
        globalTemperature : -30 
    }; 
    private gamePhases = new GamePhases();
    private gameGeneration = 1;
    /**
     * Initiallizing a player list when a game is created.
     */
    private readonly players: Player[] = [];
    /**
     * Initiallizing a LogStack when a game is created. 
     * */
    private logs : LogStack = new LogStack(1000);
    /**
     * Initializing the board that will serve as a map. 
     * */
    private board : GameBoard;
    /** 
     * Constructor method when initializing a Game 
     * */
    constructor(dimensions : number)
    {
        // Automatically generate UID for this instance. Increase global counter
        this.gameId = Game._nextID++;
        // Instantiates a new board tied to this game.
        this.board = new GameBoard(this, dimensions);
        this.addLog(`Game # ${ this.gameId } created.`);  
    }
    private gameStarted : boolean = false;

    // ===== METHODS ===== //
    // ==== GETTERS ====
    /** 
    * Return all logs of a game.
    * */ 
    public getAllLogs() 
   {
       return this.logs.getLogs();
    } 
    /** 
    * Return the Game ID.
    * */ 
    public getGameID() 
   {
       return this.gameId;
    } 
    /** 
    * Return all players in the game.
    * */ 
    public getAllPlayers() 
    {
       return this.players;
    } 
     /** 
    * Return the last logs of a game.
    * */ 
    public getLastLog() 
   {
       return this.logs.peak();
    } 
    /**
     * Returns the first player with the queried name, or undefined if one does not exist.
     */
    public getPlayer(name: string): Player|undefined 
    {
        return this.players.find(element => element.name === name);
    }
    /** 
     * Return all or one global parameters of this game.
     * */ 
    public getGlobalParameters(key? : GP) 
    {
        if (key === undefined)
        {
            return this.globalParameters;
        }
        else
        {
            return this.globalParameters[key];
        }
    }
    /**
     * Get the currentgame phase.
     */
    public getPhase()
    {
        return this.gamePhases.current.value;
    }
    /**
     * Get the current game generation.
     */
    public getGeneration()
    {
        return this.gameGeneration;
    }

    // ==== SETTERS ====
    /** 
     * Change a global parameters of a game.
     * */ 
    public setGlobalParameters(key : GP, changeValue : number) 
    {
        this.globalParameters[key] += changeValue;
        return this.globalParameters;
    }

    // ==== MISC ====
    /**
     * Prints the current status of the board.
    */
    public printBoard()
    {
        this.board.printBoard();
    }
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
        /* Check if the game has started already */
        if (this.gameStarted === true)
        {
            throw new Error ("Can not add a new player as the game has already started.")
        }
        /* Check if the name is unique. */
        if (this.getPlayer(playerName) === undefined)
        {
            const player = new Player (playerName, this);
            this.players.push(player);
            return player;
        }
        else /* If not unique return the current player. */
        {
            this.addLog("Can not have duplicated player names.");
            return this.getPlayer(playerName) as Player; // This will always return a Player (and not undefined) due to the check above.
        }
    }
    /** 
     * Adds a log to the current game.
    */
    public addLog(message : string)
    {
        this.logs.addLog(message);
    }
    /**
     * Moving to next phase.
    */
    public nextPhase()
    {
        this.gamePhases.nextPhase();
    }
    /**
     * Goes to the next generation.
     * */
    public nextGeneration()
    {
        this.gameGeneration++;
    }
    /** 
     * Start the game. No new users can be added after this point 
     * */
    public startGame()
    {
        if (this.getGeneration()=== 1 && this.getPhase() === "Turn Order Phase")
        {
            this.addLog("Game starting.")
            this.gameStarted == true;
        }
    }
}