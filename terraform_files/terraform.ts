// Check there are no refernces for Marketplace, User, Buyer, Seller, etc.

// PENDING: Imports everything from the other submodules
import {Player} from "./player";
import {GlobalParameters} from "./globalParameters";

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
    private players: Player[] = [];

    // showGlobalParameters () : GlobalParameters{
    //     return this.globalParameters();
    // }
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

     /**
     * Edit one or several global parameter efficiently. The type of input values allowed is the union of Global Oxygen, Ocean and Temperature types.
     */
/*     editGlobalParameter(newGlobalParameter: GlobalParameters, value : GlobalOxygen | GlobalOcean |GlobalTemperature): GlobalParameters {
        this.globalParameters=newGlobalParameter;
        return this.globalParameters;
    } */
    addPlayer(playerName : string) : boolean {
        return true;
    }
    // addPlayer(playerName: string): Player{
    //     return this.player(playerName);
    // }
}