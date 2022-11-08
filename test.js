"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { Marketplace } from "./marketplace";
const listing_1 = require("./marketplace/listing");
const seller = 0;
const listing = listing_1.Listing.newDraft(seller)
    .titled("Super Mushrooms x3")
    .describedAs("These make you grow tall.")
    .withStartPrice(10)
    .withMinBidTime(100);
const activeListing = listing.activate();
// const listing = Listing.newDraft(seller)
//                        .titled("Super Mushrooms x3")
