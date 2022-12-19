"use strict";
/*  There are 371 cards according to https://ssimeonoff.github.io/cards-list.  */
Object.defineProperty(exports, "__esModule", { value: true });
exports.cardList = void 0;
const card001 = {
    code: "card001",
    name: "Colonizer Training Camp",
    requiredResources: [
        {
            key: "MegaCredits",
            reqValue: 8
        }
    ],
    changePlayerResources: [
        {
            key: "MegaCredits",
            changeValue: -8
        }
    ],
    requiredGlobalParameter: {
        key: "globalOxygen",
        higherOrEqual: false,
        reqValue: 5,
    },
    changePlayerPoints: {
        key: "terraformPoints",
        changeValue: 2
    }
};
const card002 = {
    code: "card002",
    name: "Asteroid Mining Consortium",
    requiredResources: [
        {
            key: "MegaCredits",
            reqValue: 13
        }
    ],
    changePlayerResources: [
        {
            key: "MegaCredits",
            changeValue: -13
        }
    ],
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
const card003 = {
    code: "card003",
    name: "Deep Well Heating",
    requiredResources: [
        {
            key: "MegaCredits",
            reqValue: 13
        }
    ],
    changePlayerResources: [
        {
            key: "MegaCredits",
            changeValue: -13
        }
    ],
    changeGlobalParameter: {
        key: "globalTemperature",
        changeValue: 1
    },
    changePlayerProduction: [
        {
            key: "Energy",
            changeValue: 1
        }
    ]
};
const card004 = {
    code: "card004",
    name: "Cloud Seeding",
    requiredResources: [
        {
            key: "MegaCredits",
            reqValue: 11
        }
    ],
    requiredGlobalParameter: {
        key: "globalOxygen",
        higherOrEqual: true,
        reqValue: 3,
    },
    changePlayerResources: [
        {
            key: "MegaCredits",
            changeValue: -11
        }
    ],
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
const card009 = {
    code: "card009",
    name: "Asteroid",
    requiredResources: [
        {
            key: "MegaCredits",
            reqValue: 14
        }
    ],
    changePlayerResources: [
        {
            key: "MegaCredits",
            changeValue: -14
        },
        {
            key: "Titanium",
            changeValue: 2
        }
    ],
    changeGlobalParameter: {
        key: "globalTemperature",
        changeValue: 1
    }
};
const card011 = {
    code: "card011",
    name: "Big Asteroid",
    requiredResources: [
        {
            key: "MegaCredits",
            reqValue: 27
        }
    ],
    changePlayerResources: [
        {
            key: "Titanium",
            changeValue: 4
        }
    ],
    changeGlobalParameter: {
        key: "globalTemperature",
        changeValue: 5,
    }
};
const card013 = {
    code: "card013",
    name: "Space Elevator",
    requiredResources: [
        {
            key: "MegaCredits",
            reqValue: 27
        }
    ],
    changePlayerResources: [
        {
            key: "Titanium",
            changeValue: 1
        }
    ]
};
const cardList = {
    card001, card002, card003, card004, card009, card011, card013
};
exports.cardList = cardList;
