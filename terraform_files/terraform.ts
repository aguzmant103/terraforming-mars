// Imports everything from the other submodules
import {Player} from "./player"

// PENDING: move types and interfaces into their own files.
type GlobalOxygen = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14; // Only [0-14] oxigen levels are allowed. Even if trying to add more with effects.
type GlobalOcean = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9; // Only [0-9] ocean levels are allowed. Even if there are more ocean titles.
type GlobalTemperature = -30 | -29 | -28 | -27 | -26 | -25 | -24 | -23 | -22 | -21 | // Only [-30, 8] are allowed. Ugly solution but will search for a more elegant in the future.
                         -20 | -19 | -18 | -17 | -16 | -15 | 14 | -13 | -12 | -11 |
                         -10 | -9 | -8 | -7 | -6 | -5 | -4 | -3 | -2 | -1 |
                           0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
/**
 * Interface GlobalParameters that restricts the valid values for Oxygen, Ocean and Temperature.
 */
interface GlobalParameters {
    globalOxygen: GlobalOxygen;
    globalOcean: GlobalOcean;
    globalTemperature : GlobalTemperature;
  }

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
     * Automatically generated UID for a marketplace instance.
     */
    readonly id: bigint;
    /**
     * Initial global parameters when a game is created.
     */
    readonly globalParameters : GlobalParameters = { globalOxygen : 0, globalOcean : 0, globalTemperature : -30 };
    /**
     * Initiallizing a player list when a game is created.
     */
    private players: Player[] = [];

    /**
     * Returns the player with the queried ID, or undefined if one does not exist.
     */
    player(id: number): Player|undefined {
        return this.players[id];
    }
    constructor(){
        // Automatically generate UID for this instance. Increase global counter
        this.id = Game._nextID++;
    }
}