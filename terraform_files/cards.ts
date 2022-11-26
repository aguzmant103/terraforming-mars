
/*  There are 371 cards according to https://ssimeonoff.github.io/cards-list. 
    From this list, only 2 cards are implemented to exemplify the game mechanics. */

/* Out of scope:
- Modifying resources of other players
- Revealing or drawing cards from the deck
- Victory Points dependant on other factors */

import { GlobalParameters } from "./globalParameters";

export type availableCards = "card001" | "card002" | "card003" | "card004" | "card005" | "card009";

export type card = 
{
    code : string,
    name : string,
    cost : number,
    requirement? : {key : "globalOxygen" | "globalOcean" | "globalTemperature" , higherOrEqual : boolean , value : number},
    changeGlobalParameter? : {key : "globalOxygen" | "globalOcean" | "globalTemperature" , addValue : number},
    changePlayerProduction? : {key : "MegaCredits" | "Steel" | "Titanium" | "Plants"| "Energy"| "Heat" , changeValue : number}[],
    changePlayerPoints? : {key : "terraformPoints" | "victoryPoints" , changeValue : number},
    changePlayerResources? : {key : "MegaCredits" | "Steel" | "Titanium" | "Plants"| "Energy"| "Heat" , changeValue : number}[]
}
export const card001 : card = 
{
    code : "card001",
    name : "Colonizer Training Camp",
    cost : 8,
    requirement : 
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
    cost : 13,
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
    cost : 13,
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
    cost : 11,
    requirement : 
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
    cost : 14,
    changeGlobalParameter : 
    {
        key : "globalTemperature",
        addValue : 1
    },
    changePlayerResources : 
    [
        {
            key : "Titanium",
            changeValue : 2
        }
    ]    
}