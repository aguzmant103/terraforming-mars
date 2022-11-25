export {};

/*  There are 371 cards according to https://ssimeonoff.github.io/cards-list. 
    From this list, only 2 cards are implemented to exemplify the game mechanics. */

 const card003 = {
    name : "Deep Well Heating",
    cost : 13,
    changePlayerProduction : 
        {
            energy : 1
        },
    changeGlobalParameter : 
        {
            globalTemperature : 1
        }
 }

 const card004 = {
    name : "Cloud Seeding",
    cost : 13,
    requirement : 
        {
            globalOceans : 3
        },
    changePlayerProduction : 
        {
            energy : -1,
            heat : -1,
            plant : 2
        }
 }