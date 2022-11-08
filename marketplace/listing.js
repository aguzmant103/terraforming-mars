"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteListing = exports.Listing = void 0;
/**
 * Companion Object Pattern: An object that carries runtime properties/methods for type.
 *
 * (Note: this is what classes do automatically for you!)
 */
exports.Listing = {
    newDraft(seller) {
        return ConcreteListing.newDraft(seller);
    }
};
/**
 * State pattern: the Listing type is implemented by a class that is exposed through different
 *                interfaces depending on the specific listing state.
 */
class ConcreteListing {
    constructor(id, seller) {
        this.id = id;
        this.seller = seller;
        this.state = "draft";
    }
    static newDraft(seller) {
        return new ConcreteListing(this._nextId++, seller);
    }
    titled(title) {
        this.title = title;
        return this;
    }
    describedAs(description) {
        this.description = description;
        return this;
    }
    withStartPrice(startPrice) {
        this.startPrice = startPrice;
        return this;
    }
    withMinBidTime(minBidTime) {
        this.minBidTime = minBidTime;
        return this;
    }
    activate() {
        const currentState = this.state;
        // 1. Check current state is one valid for the transition:
        if (currentState != "draft") {
            throw new Error("Cannot activate listing: state is not 'draft'.");
        }
        // 2. Check that the preconditions for the state transition hold:
        const requiredProps = ["title", "description", "startPrice", "minBidTime"];
        for (const prop of requiredProps) {
            if (!(prop in this)) {
                throw new Error(`Cannot activate listing: property '${prop}' is missing.`);
            }
        }
        // 3. Perform the transition:
        this.state = "active";
        return this;
    }
    sell() {
        const currentState = this.state;
        if (currentState != "active") {
            throw new Error("Cannot activate listing: state is not 'active'.");
        }
        // Do more checks!
        this.state = "sold";
        return this;
    }
    cancel() {
        const currentState = this.state;
        if (currentState != "draft" && currentState != "active") {
            throw new Error("Cannot activate listing: state is neither 'draft' nor 'active'.");
        }
        // Do more checks!
        this.state = "cancelled";
        return this;
    }
}
exports.ConcreteListing = ConcreteListing;
ConcreteListing._nextId = 0;
