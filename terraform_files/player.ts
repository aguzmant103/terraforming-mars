import { resources } from "./resources"
// Pending to implement
export class Player {
    readonly terraformPoints : number = 0;
    readonly victoryPoints : number = 0;
    // readonly currentcards : card = [];
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