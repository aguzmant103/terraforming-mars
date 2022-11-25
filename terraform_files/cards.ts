
/*  There are 371 cards according to https://ssimeonoff.github.io/cards-list. 
    From this list, only 2 cards are implemented to exemplify the game mechanics. */

import { GlobalParameters } from "./globalParameters";

export type card = {
    name : string,
    cost : number,
    requirement : GlobalParameters | undefined,
    //changePlayerProduction : ProductionEffects | undefined, // Pending: to implement
    //changeGlobalParameter : {key : "globalOxygen" | "globalOcean" | "globalTemperature" , addValue : number}[] | undefined
    changeGlobalParameter : {key : "globalOxygen" | "globalOcean" | "globalTemperature" , addValue : number}
}

 const card003 : card = {
    name : "Deep Well Heating",
    cost : 13,
    requirement : undefined,
/*     changePlayerProduction : 
        {
            energy : 1
        }, */
    changeGlobalParameter : 
            {key : "globalTemperature",
            addValue : 1}     
 }

 const card004 : card = {
    name : "Cloud Seeding",
    cost : 7,
    requirement : 
        {
            globalOxygen : 0,
            globalOcean : 3,
            globalTemperature : -30
        },
/*     changePlayerProduction : 
        {
            energy : -1,
            heat : -1,
            plant : 2
        }, */
    changeGlobalParameter :  // Dummy agregation. //Pending: can this be better implemented? 
        {key : "globalTemperature",
        addValue : 0}
 }

 // Pending: need to specify more the cost numbers


 //export const cards = [card003, card004];
 export {card003, card004};