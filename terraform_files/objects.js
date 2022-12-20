"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CityClass = exports.GreeneryClass = exports.OceanClass = exports.GameBoard = void 0;
class GameBoard {
    constructor(game, dimensions) {
        this.board = [];
        this.game = game;
        this.dimensions = dimensions;
        for (let i = 0; i < this.dimensions; i++) {
            // Create an empty row
            let row = [];
            // Iterate over the columns
            for (let j = 0; j < this.dimensions; j++) {
                // Push a 0 onto the row to represent an empty cell
                row.push(0);
            }
            // Push the row onto the board
            this.board.push(row);
        }
    }
    printBoard() {
        // Print the board to the console
        for (let i = 0; i < this.dimensions; i++) {
            let row = "";
            for (let j = 0; j < this.dimensions; j++) {
                row += this.board[i][j] + " ";
            }
            console.log(row);
        }
    }
}
exports.GameBoard = GameBoard;
// The base GameObject class represents any object that exists in the game board
class GameObject {
    // A constructor for creating a new GameObject instance
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
/**   The OceanClass extends the GameObject class and represents a terraforming Ocean in the game */
class OceanClass extends GameObject {
    // A constructor for creating a new Ocean instance
    constructor(x, y, owner) {
        super(x, y);
        this.titleType = "Ocean";
        this.representation = "O";
        this.owner = owner;
        this.addCredits;
    }
    addCredits() {
        this.owner.playerResources.MegaCredits += 2;
    }
}
exports.OceanClass = OceanClass;
/**   The GreeneryClass extends the GameObject class and represents a terraforming Greenery in the game */
class GreeneryClass extends GameObject {
    // A constructor for creating a new Greenery instance
    constructor(x, y, owner) {
        super(x, y);
        this.titleType = "Greenery";
        this.representation = "G";
        this.owner = owner;
        this.addOxygen;
        this.addPoints;
    }
    /** Elevate the Oxygen level by 2.  */
    addOxygen() {
        // Pending this.owner.game.setGlobalParameters("globalOxygen",2);
    }
    /** Increase the Victory Point by 1 and Terraforming Points by 1 to the owner of the title.  */
    addPoints() {
        this.owner.addTerraformPoints(1);
        this.owner.addVictoryPoints(1);
    }
}
exports.GreeneryClass = GreeneryClass;
/**   The GreeneryClass extends the GameObject class and represents a terraforming City in the game */
class CityClass extends GameObject {
    // A constructor for creating a new City instance
    constructor(x, y, owner) {
        super(x, y);
        this.titleType = "City";
        this.representation = "C";
        this.owner = owner;
        this.addPoints;
    }
    /** Increase the Victory Point by 2 to the owner of the title.  */
    addPoints() {
        this.owner.addTerraformPoints(2);
    }
}
exports.CityClass = CityClass;
