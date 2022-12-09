/** 
    Implementation of a generic stack using an array with no fixed length that with generic types.
*/ 
class Stack<T> {
    // An array for storing the items in the stack
    private array: T[] = [];
    
    // A method for popping the top item off of the stack
    pop(): T | undefined {
      if (this.isEmpty()) throw new Error("EmptyStack");
      return this.array.pop();
    }
    
    // A method for pushing an item onto the stack
    push(data: T): void {
      this.array.push(data);
    }

    // A method for retrieving the top item on the stack without removing it from the stack
    peek(): T {
      if (this.isEmpty()) throw new Error("EmptyStack");
      return this.array[this.array.length - 1];
    }
    
    // A method for checking whether the stack is empty
    isEmpty(): boolean {
      return this.array.length === 0;
    }

    // A method for getting the number of items in the stack
    public size(): number {
        return this.array.length;
    }

    // A method to return the stack in the native array form
    public toArray(): T[] {
        return this.array;
      }
  }

  /** 
    Class of generic logs.
  */
class Log {
    // The timestamp at which the log was generated
    public timestamp: Date;
  
    // The message or description of the log
    public message: string;
  
    // A constructor for creating a new Log instance
    constructor(message: string) {
      this.timestamp = new Date();
      this.message = message;
    }
  }
  

export class LogStack {
    // A stack for storing the logs
    public logs: Stack<Log>;
  
    // The maximum number of logs that can be stored in the stack
    public maxSize: number;
  
    // A constructor for creating a new LogStack instance
    constructor(maxSize: number) {
      this.logs = new Stack<Log>();
      this.maxSize = maxSize;
    }
  
    // A method for adding a log to the stack, limitted to the maxSize
    public push(log: Log): void {
      this.logs.push(log);
      if (this.logs.size() > this.maxSize) {
        this.logs.pop();
      }
    }
  
    // A method for retrieving the most recent log from the stack
    public pop(): Log | undefined {
      return this.logs.pop();
    }
  
    // A method for retrieving all of the logs in the stack
    public getAll(): Log[] {
      return this.logs.toArray();
    }
  }
  