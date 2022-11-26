"use strict";
/*  There are 371 cards according to https://ssimeonoff.github.io/cards-list.
    From this list, only 2 cards are implemented to exemplify the game mechanics. */
Object.defineProperty(exports, "__esModule", { value: true });
exports.card009 = exports.card004 = exports.card003 = exports.card002 = exports.card001 = void 0;
exports.card001 = {
    code: "card001",
    name: "Colonizer Training Camp",
    cost: 8,
    requirement: {
        key: "globalOxygen",
        higherOrEqual: false,
        value: 5,
    },
    changePlayerPoints: {
        key: "terraformPoints",
        changeValue: 2
    }
};
exports.card002 = {
    code: "card002",
    name: "Asteroid Mining Consortium",
    cost: 13,
    changePlayerProduction: [
        {
            key: "Titanium",
            changeValue: 1
        }
    ],
    changePlayerPoints: {
        key: "terraformPoints",
        changeValue: 1
    }
};
exports.card003 = {
    code: "card003",
    name: "Deep Well Heating",
    cost: 13,
    changeGlobalParameter: {
        key: "globalTemperature",
        addValue: 1
    },
    changePlayerProduction: [
        {
            key: "Energy",
            changeValue: 1
        }
    ]
};
exports.card004 = {
    code: "card004",
    name: "Cloud Seeding",
    cost: 11,
    requirement: {
        key: "globalOxygen",
        higherOrEqual: true,
        value: 3,
    },
    changePlayerProduction: [
        {
            key: "MegaCredits",
            changeValue: -1
        },
        {
            key: "Plants",
            changeValue: 2
        }
    ]
};
exports.card009 = {
    code: "card009",
    name: "Asteroid",
    cost: 14,
    changeGlobalParameter: {
        key: "globalTemperature",
        addValue: 1
    },
    changePlayerResources: [
        {
            key: "Titanium",
            changeValue: 2
        }
    ]
};
