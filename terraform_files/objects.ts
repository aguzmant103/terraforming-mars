import { Player } from "./player";
import { Game } from "./terraform";


export class GameBoard
{
  private board : number[][]= [];
  readonly dimensions : number;
  readonly game : Game;
  constructor(game : Game, dimensions : number){
    this.game = game;
    this.dimensions = dimensions;
    for (let i = 0; i < this.dimensions; i++) {
      // Create an empty row
      let row: number[] = [];

      // Iterate over the columns
      for (let j = 0; j < this.dimensions; j++) {
        // Push a 0 onto the row to represent an empty cell
        row.push(0);
      }

      // Push the row onto the board
      this.board.push(row);
    }
  }

  printBoard () 
  {
    // Print the board to the console
    for (let i = 0; i < this.dimensions; i++) 
    {
      let row = "";

      for (let j = 0; j < this.dimensions; j++) 
      {
        row += this.board[i]![j] + " ";
      }

      console.log(row);
    }
  }
}

type OceanTile = 
{
  representation : "O",
}
type CityTile = 
{
  owner : Player,
  representation : "C",
}
type GreeneryTile = 
{
  owner : Player,
  representation : "G",
}

/** 
 * The base GameObject class represents any object that exists in the game board 
 * */
class GameObject {

    // The x and y coordinates of the object on the map
    readonly x: number;
    readonly y: number;
  
    // A constructor for creating a new GameObject instance
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }
  
  }
/** 
 * The OceanClass extends the GameObject class and represents a terraforming Ocean in the game 
 * */
export class OceanClass extends GameObject {
  readonly titleType = "Ocean";
  readonly representation = "O";
  readonly owner : Player;

  // A constructor for creating a new Ocean instance
  constructor(x: number, y: number, owner : Player) {
    super(x, y);
    this.owner = owner;
    this.addCredits;
  }

  private addCredits()
  {
    this.owner.playerResources.MegaCredits +=2;
  }

}
/** 
 * The GreeneryClass extends the GameObject class and represents a terraforming Greenery in the game 
 * */
export class GreeneryClass extends GameObject {
  readonly titleType = "Greenery";
  readonly representation = "G";
  readonly owner : Player;
  // A constructor for creating a new Greenery instance
  constructor(x: number, y: number, owner : Player) {
    super(x, y);
    this.owner = owner;
    this.addPoints;
  }
  /** Increase the Victory Point by 1 and Terraforming Points by 1 to the owner of the title.  */
  private addPoints()
  {
    this.owner.addTerraformPoints(1);
    this.owner.addVictoryPoints(1);
  }
  }
/** 
 * The GreeneryClass extends the GameObject class and represents a terraforming City in the game 
 * */
export class CityClass extends GameObject {
  readonly titleType = "City";
  readonly representation = "C";
  readonly owner : Player;
  // A constructor for creating a new City instance
  constructor(x: number, y: number, owner : Player) {
    super(x, y);
    this.owner = owner;
    this.addPoints;
  }
  /** Increase the Victory Point by 2 to the owner of the title.  */
  private addPoints()
  {
    this.owner.addTerraformPoints(2);
  }
  }
