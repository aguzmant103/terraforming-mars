// Check there are no refernces for Marketplace, User, Buyer, Seller, etc.
// PENDING: Imports everything from the other submodules
import {Player} from "./player";
import {GlobalOcean, GlobalOxygen, GlobalParameters} from "./globalParameters";

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
    private static _nextID: bigint = 0n;
    /**
     * Automatically generated UID for a game instance.
     */
    readonly id: bigint;
    /**
     * Global parameters of game that represent Oxygen, Ocean and Temperature levels.
     */
    readonly globalParameters : GlobalParameters = { globalOxygen : 0, globalOcean : 0, globalTemperature : -30 };
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
    constructor(){
        // Automatically generate UID for this instance. Increase global counter
        this.id = Game._nextID++;
    }

    // ==== METHODS ====
    /**
     * Edit one or several global parameter efficiently. 
     * If no key value pair is specified, return the current global parameters. 
     */
    // Pending: need to make this private and only playable with cards.
    editGlobalParameter(...values: {key : "globalOxygen" | "globalOcean" | "globalTemperature" , addValue : number}[]) : GlobalParameters {
        // Pending: need stronger type checkers here and guardrails
        // Pending: how to prevent it overflows
        // Pending: how to prevent garbish values are entered during runtime
        for (const element of values){
            this.globalParameters[element.key] += element.addValue;
        }
        return this.globalParameters;
    }


    addPlayer(playerName : string) : boolean {
        return true;
    }
    // addPlayer(playerName: string): Player{
    //     return this.player(playerName);
    // }
}