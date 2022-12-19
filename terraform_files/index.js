"use strict";
/**
 * This 'index.ts' file is used to turn the surrounding
 * 'terraform_files' folder into a module, imported by 'test.ts' outside.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = exports.Player = exports.LogStack = exports.cardList = void 0;
// Select re-exports form sub-modules:
// See https://www.typescriptlang.org/docs/handbook/modules.html#re-exports
var cards_1 = require("./cards");
Object.defineProperty(exports, "cardList", { enumerable: true, get: function () { return cards_1.cardList; } });
var logs_1 = require("./logs");
Object.defineProperty(exports, "LogStack", { enumerable: true, get: function () { return logs_1.LogStack; } });
var player_1 = require("./player");
Object.defineProperty(exports, "Player", { enumerable: true, get: function () { return player_1.Player; } });
var terraform_1 = require("./terraform");
Object.defineProperty(exports, "Game", { enumerable: true, get: function () { return terraform_1.Game; } });
