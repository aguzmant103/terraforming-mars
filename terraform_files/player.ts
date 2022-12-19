import { resources, R } from "./resources";
import { card, cardList} from "./cards";
import { Game } from "./terraform";

export class Player {
    private playerCards : card[] = [];
    private playerPoints = 
    {
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
    readonly playerResources : resources = // Initializing with resources for demonstration purposes
    {
        MegaCredits : 30,
        Steel : 30,
        Titanium : 30,
        Plants : 30,
        Energy : 30,
        Heat : 30
    }   
    constructor (readonly name : string, private game : Game){
        this.name = name;    
        this.game = game;           
    }
    // ==== METHODS ====
    /**
        List all player cards.
    */
    public listAll ()
        {
            this.listCards();
            this.listPoints();
            this.listProduction();
            this.listResources();
        }
    /**
        List all player cards.
    */
    public listCards ()
    {
        return this.playerCards
    }
    /**
        List current player points.
    */
    public listPoints ()
    {
        return this.playerPoints
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
        // 3.1 Add Higher Log
        this.game.logs.log(`${this.name} played ${cardCode}.`);

        // 3.2 Change Global Parameters
        if (playableCard.changeGlobalParameter != undefined)
        {
            const { key, changeValue } = playableCard?.changeGlobalParameter;
            this.game.globalParameters[key] += changeValue;
            this.game.logs.log(`${this.name} changed ${key} by ${changeValue}. New ${key} is ${this.game.globalParameters[key]}.`);
        }

        // 3.3 Change Player Resources
        if (playableCard.changePlayerResources != undefined)
        {
            for (const resource of playableCard.changePlayerResources)
            {
                const { key, changeValue } = resource;
                this.playerResources[key] += changeValue;
                this.game.logs.log(`${this.name}'s ${key} changed by ${changeValue}. ${this.name} now has ${this.playerResources[key]} ${key}.`);
            }
        }

        // 3.4 Change Player Production
        if (playableCard.changePlayerProduction != undefined)
        {
            for (const production of playableCard.changePlayerProduction)
            {
                const { key, changeValue } = production;
                this.playerProduction[key] += changeValue;
                this.game.logs.log(`${this.name}'s ${key} production changed by ${changeValue}. New production value is ${this.playerProduction[key]}.`)
            }
        }

        // 3.5 Change Player Points (Victory and Terraforming)
        if (playableCard.changePlayerPoints != undefined)
        {
            const { key, changeValue } = playableCard.changePlayerPoints;
            this.playerPoints[key] += changeValue;
            this.game.logs.log(`${this.name}'s ${key} changed by ${changeValue}. New value is ${this.playerPoints[key]}.`)
        }
        // 3.6 Remove card from list
        const index = this.playerCards.indexOf(playableCard);
        this.playerCards.splice(index, 1);

    }
    /** 
        Buy a card if the player has the resources.    
    */
    public buyCard(newCard: card): this
    {
        // 2. Check that the preconditions for the card effects hold
        if (this.playerResources.MegaCredits < 3)
        {
            throw new Error (`${this.name} does not have enough MegaCredits to buy a card.`)
        }

        // 3. Perform the transitions
        this.addCard(newCard);
        this.playerResources.MegaCredits -= 3;
        this.game.logs.log(`${this.name} bought ${newCard.code}. ${this.name} now has ${this.playerResources.MegaCredits} MegaCredits. `);

        return this;
    }
    // Pending: keeping this or not?
    private addResource(resource : R, value : number): this 
    {
        this.playerResources[resource] += value;
        this.game.logs.log(`${value + " " + resource} to ${this.name}`);
        return this;
    }
    // Pending: keeping this or not?
    addTerraformPoints(value : number): this 
    {
        this.playerPoints.terraformPoints += value;
        this.game.logs.log(`${value + " terraforming points"} to ${this.name}`);
        return this;
    }
    // Pending: keeping this or not?
    addVictoryPoints(value : number): this 
    {
        this.playerPoints.victoryPoints += value;
        this.game.logs.log(`${value + " victory points"} to ${this.name}`);
        return this;
    }
    /** 
        Method to initialize a player with 3 random start cards.
    */
    public withStartCards(): this 
    {
        this.playerCards = [];
        this.playerCards.push(randomCard(), randomCard(), randomCard());
        return this;
    }
    /**
        Method to add a new card to a player.
    */
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

// Pending: do we keep this or not?
function hasRequiredResources(playableCard : card, checkPlayer : Player) : boolean {
    for (const resource of playableCard.requiredResources){
        if (resource.reqValue >  checkPlayer.playerResources[resource.key])
        {
            throw new Error (`Not enough ${resource.key} available to play "${playableCard.name}".`);
            return false; 
        }
    }
    return true;
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