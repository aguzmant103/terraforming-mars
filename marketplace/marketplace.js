"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Marketplace = void 0;
const user_1 = require("./user");
/**
 * Facade pattern: Marketplace is the only entry point for the library.
 */
class Marketplace {
    constructor() {
        this._users = {};
    }
    /**
     * Factory pattern: Marketplace is responsible for User creation,
     *                  because it has to handle additional internal logic.
     * Flyweight pattern: There is a single user instance for each username.
    */
    user(username) {
        let user = this._users[username];
        if (user == undefined) {
            user = new user_1.User(username, this);
            this._users[username] = user;
        }
        return user;
    }
    buyer(username) {
        return this.user(username);
    }
    seller(username) {
        return this.user(username);
    }
}
exports.Marketplace = Marketplace;
