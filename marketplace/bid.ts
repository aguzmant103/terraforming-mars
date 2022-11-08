import { Buyer } from "./user"
import { Stack } from "./stack";

export interface Bid {
    readonly buyer: Buyer
    readonly price: number
}

interface WithdrawableBid extends Bid {
    withdrawn?: true
};

export class Bids {
    private bidStack = new Stack<WithdrawableBid>();
    private buyerBids: {
        [username: string]: WithdrawableBid|undefined
    } = {};

    constructor(public readonly minBidPrice: number){}

    place(buyer: Buyer, price: number): boolean{
        const {bidStack, buyerBids, minBidPrice} = this;
        const {username} = buyer;
        const top = this.top;
        if (top == undefined){
            if (price < minBidPrice){ return false; }
            const bid = {buyer: buyer, price: price};
            bidStack.push(bid);
            buyerBids[username] = bid;
            return true;
        }
        if (price <= top.price){ return false; }
        const bid = {buyer: buyer, price: price};
        bidStack.push(bid);
        const prevBid = buyerBids[username];
        if (prevBid != undefined){ prevBid.withdrawn = true; }
        buyerBids[username] = bid;
        return true;
    }

    withdraw({username}: Buyer): boolean {
        const bid = this.buyerBids[username];
        if (bid == undefined || bid.withdrawn){ return false; }
        bid.withdrawn = true;
        return true;
    }

    bidOf({username}: Buyer): Bid|undefined {
        const bid = this.buyerBids[username];
        return (bid != undefined) && !bid.withdrawn ? bid : undefined;
    }

    get top(): Bid|undefined {
        const { bidStack } = this;
        let top = bidStack.top;
        while (top?.withdrawn){
            bidStack.pop()
            top = bidStack.top;
        }
        return top;
    }
}
