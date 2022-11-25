"use strict";
/*  There are 371 cards according to https://ssimeonoff.github.io/cards-list.
    From this list, only 2 cards are implemented to exemplify the game mechanics. */
Object.defineProperty(exports, "__esModule", { value: true });
exports.card004 = exports.card003 = void 0;
const card003 = {
    name: "Deep Well Heating",
    cost: 13,
    requirement: undefined,
    /*     changePlayerProduction :
            {
                energy : 1
            }, */
    changeGlobalParameter: { key: "globalTemperature",
        addValue: 1 }
};
exports.card003 = card003;
const card004 = {
    name: "Cloud Seeding",
    cost: 7,
    requirement: {
        globalOxygen: 0,
        globalOcean: 3,
        globalTemperature: -30
    },
    /*     changePlayerProduction :
            {
                energy : -1,
                heat : -1,
                plant : 2
            }, */
    changeGlobalParameter: // Dummy agregation. //Pending: can this be better implemented? 
    { key: "globalTemperature",
        addValue: 0 }
};
exports.card004 = card004;
