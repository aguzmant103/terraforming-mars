import { resources } from "./resources"
import { card, card003, card004, availableCards } from "./cards"
import { Game } from "./terraform";
// Pending to implement
export class Player {
    /* Can this be initialized simpler? */
    readonly playerPoints = {
        terraformPoints : 0,
        victoryPoints : 0
    }
    private currentcards : card[] = []; //Example // Pending: to clean this. // Pending to reduce scope

    // Pending: player belongs to a specific Game
    readonly currentResources : resources = {
        MegaCredits : 0,
        Steel : 0,
        Titanum : 0,
        Plants : 0,
        Energy : 0,
        Heat : 0
}   
    /* Pending: Can this be initialized simpler? */
    constructor (readonly name : string, readonly game : Game){
        this.name = name;    
        this.game = game;           
    }
    // ==== METHODS ====

    //Pending to implement
    
    listCards () : card[] {
        return this.currentcards
    }
    playCard (cardCode : availableCards) 
    {
        const playableCard = returnCardInPlayer(cardCode, this)
        
        if (playableCard === undefined)
        {
            throw new Error (`${this.name} does not have this card`)
        }
        
        // Change Global Parameters // Pending: implement the rest of cases like changing production and requirements checking
        if (playableCard.changeGlobalParameter != undefined)
        {
            const key = playableCard?.changeGlobalParameter?.key;
            const value = playableCard?.changeGlobalParameter?.addValue;
            this.game.globalParameters[key] += value;
        }

        // Need to add POP from here
        // Add log of changes
        
    }
    withStartCards(): this {
        this.currentcards = [card003];
        return this;
    }
    addCard(addCard: card): this {
        this.currentcards.push(addCard);
        return this;
    }

}
/* This is a helper function to find a card in a player or return undefined. This does not need to be exported. */
function returnCardInPlayer (codeToSearch : string, playerToSearch : Player ) : card | undefined {
    const returningCard = playerToSearch.listCards().find(element => element.code === codeToSearch);
    return returningCard;
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