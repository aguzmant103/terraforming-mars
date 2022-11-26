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

    private playerProduction = 
    {
        MegaCredits : 1,
        Steel : 1,
        Titanum : 1,
        Plants : 1,
        Energy : 1,
        Heat : 1
    };
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
    
    listCards () : card[] 
    {
        return this.currentcards
    }
    playCard (cardCode : availableCards) 
    {   
        // 1. Check card is valid for the player.
        const playableCard = returnCardInPlayer(cardCode, this)
        if (playableCard === undefined)
        {
            throw new Error (`${this.name} does not have this card`)
        }
        // 2. Check that the preconditions for the card effects hold
        if (playableCard.requirement != undefined)
        {
            let {key, higherOrEqual, value } = playableCard.requirement;
            // Check if the requirements are fulfilled. The 'higherOrEqual' boolean selects which comparison to make.
            const reqFulfilled = higherOrEqual ? this.game.globalParameters[key]>=value : this.game.globalParameters[key]<=value;
            if (!reqFulfilled){
                throw new Error ('The global parameter requirements are not met.');
            }
            //const key = playableCard?.changeGlobalParameter?.key;
            //const value = playableCard?.changeGlobalParameter?.addValue;
            this.game.globalParameters[key] += value;
        }
        // 2.1. Check the resources are available
        // 2.1. Check the globalParameters are available

        // Pending: implement the rest of cases like changing production and requirements checking
        if (playableCard.changeGlobalParameter != undefined)
        {
            const key = playableCard?.changeGlobalParameter?.key;
            const value = playableCard?.changeGlobalParameter?.addValue;
            this.game.globalParameters[key] += value;
        }

        // 3. Perform the transitions
        // 3.1 Change Global Parameters
        // 3.2 Change Player Resources
        // 3.3 Change Player Production
        // 3.4 Remove card from list
        // 3.4 Add Logs
        /*   logAction(this, "played",playableCard.name) */
    }
    withStartCards(): this 
    {
        this.currentcards = [card003];
        return this;
    }
    addCard(addCard: card): this 
    {
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