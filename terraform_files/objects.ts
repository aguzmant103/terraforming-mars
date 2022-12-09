Class Inheritance in Corporations










// The base GameObject class represents any object that exists in the game board
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
  
  // The Player class extends the GameObject class and represents a player in the game
  class Player extends GameObject {
    // The player's name
    public name: string;
  
    // The player's score
    public score: number;
  
    // A constructor for creating a new Player instance
    constructor(name: string, x: number, y: number) {
      super(x, y);
      this.name = name;
      this.score = 0;
    }
  
    // A method for increasing the player's score
    public increaseScore(points: number): void {
      this.score += points;
    }
  
    // A method for decreasing the player's score
    public decreaseScore(points: number): void {
      this.score = Math.max(0, this.score - points);
    }
  }
  
  // The Robot class extends the GameObject class and represents a terraforming robot in the game
  class Robot extends GameObject {
    // The robot's type
    public type: RobotType;
  
    // The robot's remaining battery power
    public power: number;
  
    // A constructor for creating a new Robot instance
    constructor(type: RobotType, x: number, y: number) {
      super(x, y);
      this.type = type;
      this.power = 100;
    }
  
    // A method for moving the robot and consuming its battery power
    public moveTo(x: number, y: number): void {
      super.moveTo(x, y);
      this.power = Math.max(0, this.power - 1);
    }
  }
  