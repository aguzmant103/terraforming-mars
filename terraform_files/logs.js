"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogStack = void 0;
/**
    Implementation of a generic stack using an array with no fixed length that with generic types.
*/
class Stack {
    constructor() {
        // An array for storing the items in the stack
        this.array = [];
    }
    // A method for popping the top item off of the stack
    pop() {
        if (this.isEmpty())
            throw new Error("EmptyStack");
        return this.array.pop();
    }
    // A method for pushing an item onto the stack
    push(data) {
        this.array.push(data);
    }
    // A method for retrieving the top item on the stack without removing it from the stack
    peek() {
        if (this.isEmpty())
            throw new Error("EmptyStack");
        return this.array[this.array.length - 1];
    }
    // A method for checking whether the stack is empty
    isEmpty() {
        return this.array.length === 0;
    }
    // A method for getting the number of items in the stack
    size() {
        return this.array.length;
    }
    // A method to return the stack in the native array form
    toArray() {
        return this.array;
    }
}
/**
  Class of generic logs.
*/
class Log {
    // A constructor for creating a new Log instance
    constructor(message) {
        this.timestamp = new Date();
        this.message = message;
    }
}
/**
  Implementation of a Stack of Logs.
*/
class LogStack {
    // A constructor for creating a new LogStack instance.
    constructor(maxSize) {
        this.logs = new Stack();
        this.maxSize = maxSize;
    }
    // A method for adding a log to the stack, limitted to the maxSize.
    push(log) {
        this.logs.push(log);
        if (this.logs.size() > this.maxSize) {
            this.logs.pop();
        }
    }
    // A method for retrieving the most recent log from the stack.
    pop() {
        return this.logs.pop();
    }
    // A public method to add a log to the stack.
    log(message) {
        this.logs.push(new Log(message));
    }
    // A method for retrieving all of the logs in the stack.
    getAll() {
        return this.logs.toArray();
    }
}
exports.LogStack = LogStack;
