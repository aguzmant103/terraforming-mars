import { Marketplace } from "./marketplace";

export class User {
    constructor(public readonly username: string,
                protected readonly marketplace: Marketplace){}
}

export interface Buyer {
    readonly username: string
}
export interface Seller {
    readonly username: string
}