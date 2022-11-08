import { Seller } from "./user"


type IncompleteListing = {
    readonly id: number
    readonly seller: Seller
    readonly title?: string
    readonly description?: string
    readonly startPrice?: number
    readonly minBidTime?: number
};

interface CompleteListing extends IncompleteListing {
    readonly title: string
    readonly description: string
    readonly startPrice: number
    readonly minBidTime: number
}

export interface DraftListing extends IncompleteListing {
    state: "draft"
    // Staging methods:
    activate(this: DraftListing & CompleteListing): ActiveListing
    cancel(): CancelledListing
    // Builder pattern methods (and also the Fluent Interface pattern):
    titled(title: string): this & {title: string}
    describedAs(description: string): this & {description: string}
    withStartPrice(startPrice: number): this & {startPrice: number}
    withMinBidTime(minBidTime: number): this & {minBidTime: number}
}

export interface ActiveListing extends CompleteListing {
    state: "active"
    // Staging methods:
    sell(): SoldListing
    cancel(): CancelledListing
}

export interface SoldListing extends CompleteListing {
    state: "sold"
}

export interface CancelledListing extends CompleteListing {
    state: "cancelled"
}

// A tagged union:
export type Listing = DraftListing|ActiveListing|SoldListing|CancelledListing;
export type ListingState = Listing["state"];

/**
 * Companion Object Pattern: An object that carries runtime properties/methods for type.
 * 
 * (Note: this is what classes do automatically for you!)
 */
export const Listing = {
    newDraft(seller: Seller): DraftListing {
        return ConcreteListing.newDraft(seller);
    }
}

/**
 * State pattern: the Listing type is implemented by a class that is exposed through different
 *                interfaces depending on the specific listing state.
 */
export class ConcreteListing implements IncompleteListing {
    private static _nextId: number = 0;

    state: ListingState = "draft";
    
    title?: string
    description?: string
    startPrice?: number
    minBidTime?: number

    private constructor(public readonly id: number, public readonly seller: Seller){}

    static newDraft(seller: Seller): DraftListing {
        return new ConcreteListing(this._nextId++, seller) as DraftListing;
    }

    titled(title: string): this & {title: string} {
        this.title = title;
        return this as this & {title: string};
    }
    describedAs(description: string): this & {description: string} {
        this.description = description;
        return this as this & {description: string};
    }
    withStartPrice(startPrice: number): this & {startPrice: number} {
        this.startPrice = startPrice;
        return this as this & {startPrice: number};
    }
    withMinBidTime(minBidTime: number): this & {minBidTime: number} {
        this.minBidTime = minBidTime;
        return this as this & {minBidTime: string};
    }

    activate(this: this & CompleteListing): ActiveListing {
        const currentState = this.state;
        // 1. Check current state is one valid for the transition:
        if (currentState != "draft"){
            throw new Error("Cannot activate listing: state is not 'draft'.");
        }
        // 2. Check that the preconditions for the state transition hold:
        const requiredProps = ["title", "description", "startPrice", "minBidTime"] as const;
        for (const prop of requiredProps){
            if (!(prop in this)){
                throw new Error(`Cannot activate listing: property '${prop}' is missing.`)
            }
        }
        // 3. Perform the transition:
        this.state = "active";
        return this as ActiveListing;  
    }

    sell(): SoldListing {
        const currentState = this.state;
        if (currentState != "active"){
            throw new Error("Cannot activate listing: state is not 'active'.");
        }
        // Do more checks!
        this.state = "sold";
        return this as SoldListing;
    }

    cancel(): CancelledListing {
        const currentState = this.state;
        if (currentState != "draft" && currentState != "active"){
            throw new Error("Cannot activate listing: state is neither 'draft' nor 'active'.");
        }
        // Do more checks!
        this.state = "cancelled";
        return this as CancelledListing;
    }
}