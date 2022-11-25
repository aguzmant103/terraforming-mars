import { resources } from "./resources"
import { card, card003, card004 } from "./cards"
import { Game } from "./terraform";
// Pending to implement
export class Player {
    readonly terraformPoints : number = 0;
    readonly victoryPoints : number = 0;
    readonly currentcards : card[] = [card003]; //Examlpe // Pending: to clean this.
    /* Can this be initialized simpler? */
    // Pending: player belongs to a specific Game
    readonly currentResources : resources = {
        MegaCredits : 0,
        Steel : 0,
        Titanum : 0,
        Plants : 0,
        Energy : 0,
        Heat : 0
}
    constructor (readonly name : string, readonly game : Game){
        this.name = name;    
        this.game = game;           
    }
    // ==== METHODS ====

    //Pending to implement
    playCard (thisGame : Game, playableCard : card) {
        // Add log of changes
        // Change Global Parameters // Pending: implement the rest of cases like changing production and requirements checking
        const key = playableCard.changeGlobalParameter?.key;
        const value = playableCard.changeGlobalParameter?.addValue;
        thisGame.globalParameters[key] += value;
        //thisGame.globalParameters["globalOcean"] = 5;
    }

}

/* class Player
Properties:
    type Player Information (de
        Properties
            Corporation
            Terraforming Points
            Tags
            Actions
            Effects
            Victory Points
            Current Cards
            Resources Current 
                Mega Credits
                Steel
                Titanium
                Plants
                Energy
                Heat
            Resource Production stats
                Mega Credits
                Steel
                Titanium
                Plants
                Energy
                Heat
                
Constructor:
    Name
    (corporation, …)
    …
Methods:
    Cards - Buy new 
    Cards - Use them
    Do Actions or Pass or Skip Turn
 */