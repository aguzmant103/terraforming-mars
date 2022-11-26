
/*  There are 371 cards according to https://ssimeonoff.github.io/cards-list. 
    From this list, only 2 cards are implemented to exemplify the game mechanics. */

/* Out of scope:
- Modifying resources of other players
- Revealing or drawing cards from the deck
- Victory Points dependant on other factors */

import { GlobalParameters } from "./globalParameters";
import { resources, R } from "./resources";

// Pending: is this needed? Check export imports too
export type availableCards = "card001" | "card002" | "card003" | "card004" | "card005" | "card009";

type GP = "globalOxygen" | "globalOcean" | "globalTemperature";
type PP = "terraformPoints" | "victoryPoints";

// Pending: need to  restrict more the number type and also align the naming
export type card = 
{
    code : string,
    name : string,
    requiredResources : {key : R, value : number}[],
    requiredGlobalParameter? : {key : GP , higherOrEqual : boolean , value : number},
    // PENDING: requiredPlayerProduction
    changeGlobalParameter? : {key : GP , addValue : number},
    changePlayerProduction? : {key : R , changeValue : number}[],
    changePlayerPoints? : {key : PP , changeValue : number},
    changePlayerResources : {key : R , changeValue : number}[]
}
export const card001 : card = 
{
    code : "card001",
    name : "Colonizer Training Camp",
    requiredResources : 
    [
        {
            key : "MegaCredits",
            value : 8
        }
    ],
    changePlayerResources :
    [
        {
            key : "MegaCredits",
            changeValue : -8
        }
    ],
    requiredGlobalParameter : 
    {
        key : "globalOxygen",
        higherOrEqual : false,
        value : 5,
    },
    changePlayerPoints : 
    {
        key : "terraformPoints",
        changeValue : 2
    }     
}
export const card002 : card = 
{
    code : "card002",
    name : "Asteroid Mining Consortium",
    requiredResources : 
    [
        {
            key : "MegaCredits",
            value : 13
        }
    ],
    changePlayerResources :
    [
        {
            key : "MegaCredits",
            changeValue : -13
        }
    ],
    changePlayerProduction : 
    [
        {
            key : "Titanium",
            changeValue : 1
        }
    ],
    changePlayerPoints : 
    {
        key : "terraformPoints",
        changeValue : 1
    }   
}
export const card003 : card = 
{
    code : "card003",
    name : "Deep Well Heating",
    requiredResources : 
    [
        {
            key : "MegaCredits",
            value : 13
        }
    ],
    changePlayerResources :
    [
        {
            key : "MegaCredits",
            changeValue : -13
        }
    ],
    changeGlobalParameter : 
    {
        key : "globalTemperature",
        addValue : 1
    },
    changePlayerProduction : 
    [
        {
            key : "Energy",
            changeValue : 1
        }
    ]   
}
export const card004 : card = 
{
    code : "card004",
    name : "Cloud Seeding",
    requiredResources : 
    [
        {
            key : "MegaCredits",
            value : 11
        }
    ],
    changePlayerResources :
    [
        {
            key : "MegaCredits",
            changeValue : -11
        }
    ],
    requiredGlobalParameter : 
    {
        key : "globalOxygen",
        higherOrEqual : true,
        value : 3,
    },
    changePlayerProduction : 
    [
        {
            key : "MegaCredits",
            changeValue : -1
        },
        {
            key : "Plants",
            changeValue : 2
        }
    ]   
}
export const card009 : card = 
{
    code : "card009",
    name : "Asteroid",
    requiredResources : 
    [
        {
            key : "MegaCredits",
            value : 14
        }
    ],
    changePlayerResources :
    [
        {
            key : "MegaCredits",
            changeValue : -14
        },
        {
            key : "Titanium",
            changeValue : 2
        }
    ],
    changeGlobalParameter : 
    {
        key : "globalTemperature",
        addValue : 1
    }   
}