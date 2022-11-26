import { resources, R } from "./resources"
import { card, card003, card004, availableCards } from "./cards"
import { Game } from "./terraform";
// Pending to implement
export class Player {
    /* Can this be initialized simpler? */
    readonly playerPoints = {
        terraformPoints : 0,
        victoryPoints : 0
    }
    private playerCards : card[] = []; //Example // Pending: to clean this. // Pending to reduce scope

    private playerProduction = 
    {
        MegaCredits : 1,
        Steel : 1,
        Titanium : 1,
        Plants : 1,
        Energy : 1,
        Heat : 1
    };
    // Pending: player belongs to a specific Game
    readonly playerResources : resources = {
        MegaCredits : 0,
        Steel : 0,
        Titanium : 0,
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
    
    listCards ()
    {
        return this.playerCards
    }
    listProduction() 
    {
        return this.playerProduction;
    }
    listResources ()
    {
        return this.playerResources;
    }
    playCard (cardCode : availableCards) 
    {   
        // 1. Check card if card is available for the player.
        const playableCard = returnCardInPlayer(cardCode, this)
        if (playableCard === undefined)
        {
            throw new Error (`${this.name} does not have this card`)
        }

        // 2. Check that the preconditions for the card effects hold
        // 2.1 Check that the requiredGlobalParameter are met
        if (playableCard.requiredGlobalParameter != undefined)
        {
            let {key, higherOrEqual, value } = playableCard.requiredGlobalParameter;
            // Check if the requirements are fulfilled. The 'higherOrEqual' boolean selects which comparison to make.
            const reqFulfilled = higherOrEqual ? this.game.globalParameters[key]>=value : this.game.globalParameters[key]<=value;
            if (!reqFulfilled){
                throw new Error ('The global parameter requirements are not met.');
            }
        }
        // 2.2 Check that the requiredResources are met
        for (const resource of playableCard.requiredResources){
            if (resource.value > this.playerResources[resource.key])
            {
                throw new Error (`Not enough ${resource.key} available to play "${playableCard.name}".`)
            }
        }

        // 3. Perform the transitions
        // 3.1 Change Global Parameters
        if (playableCard.changeGlobalParameter != undefined)
        {
            const { key, addValue } = playableCard?.changeGlobalParameter;
            this.game.globalParameters[key] += addValue;
        }

        // 3.2 Change Player Resources
        if (playableCard.changePlayerResources != undefined)
        {
            for (const resource of playableCard.changePlayerResources)
            {
                const { key, changeValue } = resource;
                this.playerResources[key] += changeValue;
            }
        }

        // 3.3 Change Player Production
        if (playableCard.changePlayerProduction != undefined)
        {
            for (const production of playableCard.changePlayerProduction)
            {
                const { key, changeValue } = production;
                this.playerProduction[key] += changeValue;
            }
        }
        // 3.4 Remove card from list
        const index = this.playerCards.indexOf(playableCard);
        this.playerCards.splice(index, 1);

        // 3.4 Add Logs
        /*   logAction(this, "played",playableCard.name) */
    }
    addResource(resource : R, value : number): this 
    {
        this.playerResources[resource] += value;
        return this;
    }
    withStartCards(): this 
    {
        this.playerCards = [card003];
        return this;
    }
    addCard(addCard: card): this 
    {
        this.playerCards.push(addCard);
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