/* Time is measured in generations, and each
generation starts with a Turn Order phase, followed by a
Research phase, in which players access new cards. In the
Action phase, players take turns doing 1 or 2 actions, going
around the table until everyone has passed. Then, in the
Production phase, all players produce resources according to */

import { Game } from "./terraform";
import { R } from "./resources";

// Pending type Phases;
// Pending type Generation;

function executeTurnOrderPhase(game: Game)
{
  if (this.game.gamePhase === "turnOrderPhase")
  {
    game.gamePhases.nextPhase();
  }
  else
  {
    throw new Error ("Not currently in Turn Order phase.")
  }    
}
function executeResearchPhase(game: Game)
{
  if (game.gamePhases.current.value === "researchPhase")
  {
    game.gamePhases.nextPhase();
  }
  else
  {
    throw new Error ("Not currently in research phase.")
  }    
}
function executeActionPhase(game: Game)
{
  if (game.gamePhases.current.value === "actionPhase")
  {
    for (let player of game.showPlayers())
    {
        for (let element in player.listProduction)
        {
            this.addResource(element as R,this.playerProduction[element as R] )
            console.log(element);
        }
    }
    game.gamePhases.nextPhase();
  }
  else
  {
      throw new Error ("Not currently in action phase.")
  }    
}
function executeProductionPhase(game: Game)
{
  if (game.gamePhases.current.value === "productionPhase")
  {
    for (let player of game.showPlayers())
    {
        for (let element in player.listProduction)
        {
            this.addResource(element as R,this.playerProduction[element as R] )
            console.log(element);
        }
    }
    game.gamePhase== "turnOrderPhase"
  }
  else
  {
      throw new Error ("Currently not in production phase.")
  }    
}

/**
 * Generic class template of a PhaseNode.
  */
class PhaseNode 
{
  value: string;
  next: PhaseNode | null;
  constructor(value: string) 
  {
    this.value = value;
    this.next = null;
  }
} 
/**
 * GamePhases contains the four phases of a game for each generation.
 * */
export class GamePhases 
{
  current: PhaseNode;
  constructor() 
  {
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
  nextPhase() 
  {
    this.current = this.current.next as PhaseNode;
  }
}