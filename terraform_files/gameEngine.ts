/* Time is measured in generations, and each
generation starts with a Turn Order phase, followed by a
Research phase, in which players access new cards. In the
Action phase, players take turns doing 1 or 2 actions, going
around the table until everyone has passed. Then, in the
Production phase, all players produce resources according to */

import { Game } from "./terraform";
import { R } from "./resources";

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
    const firstNode = new PhaseNode("Turn Order Phase");
    const secondNode = new PhaseNode("Research Phase");
    const thirdNode = new PhaseNode("Action Phase");
    const fourthNode = new PhaseNode("Production Phase");
    
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

function executeTurnOrderPhase(game: Game)
{
  if (game.getPhase() === "Turn Order Phase")
  {
    game.addLog(`Ending phase ${game.getPhase()}. Current generation ${game.getGeneration()}`);
    game.nextPhase();
  }
  else
  {
    throw new Error ("Not currently in Turn Order phase.")
  }    
}
function executeResearchPhase(game: Game)
{
  if (game.getPhase() === "Research Phase")
  {
    game.addLog(`Ending phase ${game.getPhase()}. Current generation ${game.getGeneration()}`);
    game.nextPhase();
  }
  else
  {
    throw new Error ("Not currently in research phase.")
  }    
}
function executeActionPhase(game: Game)
{
  if (game.getPhase() === "Action Phase")
  {
    for (let player of game.getAllPlayers())
    {
        for (let element in player.listProduction)
        {
            player.addResource(element as R,player.playerProduction[element as R] )
            console.log(element);
        }
    }
    game.addLog(`Ending phase ${game.getPhase()}. Current generation ${game.getGeneration()}`);
    game.nextPhase();
  }
  else
  {
      throw new Error ("Not currently in action phase.")
  }    
}
function executeProductionPhase(game: Game)
{
  if (game.getPhase() === "Production Phase")
  {
    for (const player of game.getAllPlayers())
    {
        for (const element in player.listProduction)
        {
            player.addResource(element as R,player.playerProduction[element as R] )
            console.log(element);
        }
    }
    game.addLog(`Ending phase ${game.getPhase()}. Current generation ${game.getGeneration()}`);
    game.nextPhase();
    game.nextGeneration();
  }
  else
  {
      throw new Error ("Currently not in production phase.")
  }    
}