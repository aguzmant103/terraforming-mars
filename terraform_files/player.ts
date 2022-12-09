import { resources, R } from "./resources";
import { card, cardList} from "./cards";
import { Game } from "./terraform";

export class Player {
    private playerCards : card[] = [];
    readonly playerPoints = {
        terraformPoints : 0,
        victoryPoints : 0
    }
    private playerProduction = 
    {
        MegaCredits : 1,
        Steel : 1,
        Titanium : 1,
        Plants : 1,
        Energy : 1,
        Heat : 1
    };
    readonly playerResources : resources = {
        MegaCredits : 0,
        Steel : 0,
        Titanium : 0,
        Plants : 0,
        Energy : 0,
        Heat : 0
}   
    constructor (readonly name : string, readonly game : Game){
        this.name = name;    
        this.game = game;           
    }
    // ==== METHODS ====

    /**
        List all player cards.
    */
    public listCards ()
    {
        return this.playerCards
    }
    /**
        List player production stats.
    */
    public listProduction() 
    {
        return this.playerProduction;
    }
    /**
        List player available resources.
    */
    public listResources ()
    {
        return this.playerResources;
    }
    /**
        Play a card player´s card.
    */
    public playCard (cardCode : string) 
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
            let {key, higherOrEqual, reqValue } = playableCard.requiredGlobalParameter;
            // Check if the requirements are fulfilled. The 'higherOrEqual' boolean selects which comparison to make.
            const reqFulfilled = higherOrEqual ? this.game.globalParameters[key]>=reqValue : this.game.globalParameters[key]<=reqValue;
            if (!reqFulfilled){
                throw new Error ('The global parameter requirements are not met.');
            }
        }

        // 2.2 Check that the requiredResources are met
        for (const resource of playableCard.requiredResources){
            if (resource.reqValue > this.playerResources[resource.key])
            {
                throw new Error (`Not enough ${resource.key} available to play "${playableCard.name}".`)
            }
        }

        // 3. Perform the transitions
        // 3.1 Change Global Parameters
        if (playableCard.changeGlobalParameter != undefined)
        {
            const { key, changeValue } = playableCard?.changeGlobalParameter;
            this.game.globalParameters[key] += changeValue;
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

        // 3.5 Add Logs
        this.game.logs.log(`${this.name} played ${cardCode}.`);
    }

    /** 
        Buy a card if the player has the resources.    
    */
    buyCard(newCard: card): this
    {
        this.game.logs.log(`${this.playCard.name} bought ${newCard.code}`);
        return this;
    }

    private addResource(resource : R, value : number): this 
    {
        this.playerResources[resource] += value;
        this.game.logs.log(`${value + " " + resource} to ${this.name}`);
        return this;
    }
    withStartCards(): this 
    {
        this.playerCards = [];
        this.playerCards.push(randomCard(), randomCard(), randomCard());
        return this;
    }
    private addCard(newCard: card): this
    {
        this.playerCards.push(newCard);
        return this;
    }


}
/** 
    Helper function to find a card in a player or return undefined. This does not need to be exported. 
 */
function returnCardInPlayer (codeToSearch : string, playerToSearch : Player ) : card | undefined {
    const returningCard = playerToSearch.listCards().find(element => element.code === codeToSearch);
    return returningCard;
}

/**
 * Helper function that returns a random card from the available cards in the game.
 */
function randomCard(){
    return cardList[Math.floor(Math.random() * cardList.length)] as card; //Explicitely ignoring the undefined case as the cardList array will always be initialized with cards (this IS the available cards list)
}

/* class Player
Properties:
    type Player Information (de
        Properties
            Corporation // Not
            Tags // Not
            Actions // Not
            Effects // Not       
Constructor:
    Name
    (corporation, …)
    …
Methods:
    Cards - Buy new 
    Cards - Use them
    Do Actions or Pass or Skip Turn
 */