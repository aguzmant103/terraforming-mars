"use strict";
/* Time is measured in generations, and each
generation starts with a Turn Order phase, followed by a
Research phase, in which players access new cards. In the
Action phase, players take turns doing 1 or 2 actions, going
around the table until everyone has passed. Then, in the
Production phase, all players produce resources according to */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GamePhases = void 0;
/**
 * Generic class template of a PhaseNode.
  */
class PhaseNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
/**
 * GamePhases contains the four phases of a game for each generation.
 * */
class GamePhases {
    constructor() {
        const firstNode = new PhaseNode("turn order");
        const secondNode = new PhaseNode("research");
        const thirdNode = new PhaseNode("action");
        const fourthNode = new PhaseNode("production");
        firstNode.next = secondNode;
        secondNode.next = thirdNode;
        thirdNode.next = fourthNode;
        fourthNode.next = firstNode;
        this.current = firstNode;
    }
    nextPhase() {
        this.current = this.current.next;
    }
}
exports.GamePhases = GamePhases;
function executeTurnOrderPhase(game) {
    if (game.getPhase() === "turnOrderPhase") {
        game.addLog(`Ending phase ${game.getPhase()}. Current generation ${game.getGeneration()}`);
        game.nextPhase();
    }
    else {
        throw new Error("Not currently in Turn Order phase.");
    }
}
function executeResearchPhase(game) {
    if (game.getPhase() === "researchPhase") {
        game.addLog(`Ending phase ${game.getPhase()}. Current generation ${game.getGeneration()}`);
        game.nextPhase();
    }
    else {
        throw new Error("Not currently in research phase.");
    }
}
function executeActionPhase(game) {
    if (game.getPhase() === "actionPhase") {
        for (let player of game.getAllPlayers()) {
            for (let element in player.listProduction) {
                player.addResource(element, player.playerProduction[element]);
                console.log(element);
            }
        }
        game.addLog(`Ending phase ${game.getPhase()}. Current generation ${game.getGeneration()}`);
        game.nextPhase();
    }
    else {
        throw new Error("Not currently in action phase.");
    }
}
function executeProductionPhase(game) {
    if (game.getPhase() === "productionPhase") {
        for (const player of game.getAllPlayers()) {
            for (const element in player.listProduction) {
                player.addResource(element, player.playerProduction[element]);
                console.log(element);
            }
        }
        game.addLog(`Ending phase ${game.getPhase()}. Current generation ${game.getGeneration()}`);
        game.nextPhase();
        game.nextGeneration();
    }
    else {
        throw new Error("Currently not in production phase.");
    }
}
