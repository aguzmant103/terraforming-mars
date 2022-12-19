
/*  There are 371 cards according to https://ssimeonoff.github.io/cards-list.  */

/* Out of scope:
- Modifying resources of other players
- Revealing or drawing cards from the deck
- Victory Points dependant on other factors */

import { R } from "./resources";

type GP = "globalOxygen" | "globalOcean" | "globalTemperature";
type PP = "terraformPoints" | "victoryPoints";

export type card = 
{
    code : string,
    name : string,
    requiredResources : {key : R, reqValue : number}[],
    requiredGlobalParameter? : {key : GP , higherOrEqual : boolean , reqValue : number},
    changeGlobalParameter? : {key : GP , changeValue : number},
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
            reqValue : 8
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
        reqValue : 5,
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
            reqValue : 13
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
            reqValue : 13
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
        changeValue : 1
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
            reqValue : 11
        }
    ],
    requiredGlobalParameter : 
    {
        key : "globalOxygen",
        higherOrEqual : true,
        reqValue : 3,
    },
    changePlayerResources :
    [
        {
            key : "MegaCredits",
            changeValue : -11
        }
    ],
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
            reqValue : 14
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
        changeValue : 1
    }   
}
export const card011 : card = 
{
    code : "card011",
    name : "Big Asteroid",
    requiredResources : 
    [
        {
            key : "MegaCredits",
            reqValue : 27
        }
    ],
    changePlayerResources :
    [
        {
            key : "Titanium",
            changeValue : 4
        }
    ],
    changeGlobalParameter : 
    {
        key : "globalTemperature",
        changeValue : 5,
    }  
}
export const card013 : card = 
{
    code : "card013",
    name : "Space Elevator",
    requiredResources : 
    [
        {
            key : "MegaCredits",
            reqValue : 27
        }
    ],
    changePlayerResources :
    [
        {
            key : "Titanium",
            changeValue : 1
        }
    ]
}
export const cardList = [card001, card002, card003, card004, card009, card011, card013];