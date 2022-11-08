import { User, Buyer, Seller } from "./user";

/**
 * Facade pattern: Marketplace is the only entry point for the library.
 */
export class Marketplace {
    private _users: {
        [username: string]: User
    } = {};

    /**
     * Factory pattern: Marketplace is responsible for User creation,
     *                  because it has to handle additional internal logic.
     * Flyweight pattern: There is a single user instance for each username.
    */
    private user(username: string): User {
        let user = this._users[username];
        if (user == undefined){
            user = new User(username, this);
            this._users[username] = user;
        }
        return user;
    }

    buyer(username: string): Buyer {
        return this.user(username);
    }

    seller(username: string): Seller {
        return this.user(username);
    }

}
