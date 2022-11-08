
type StackNode<T> = {
    el: T
    below: StackNode<T>|undefined
}

export class Stack<T> {
    private _top: StackNode<T>|undefined

    constructor(...elements: readonly T[]){
        for (const el of elements){
            this.push(el);
        }
    }

    push(el: T): void {
        this._top = {
            el: el,
            below: this._top
        };
    }

    pop(): T|undefined {
        const top = this._top;
        const el = top?.el;
        this._top = top?.below;
        return el;
    }

    get isEmpty(): boolean {
        return this._top != undefined;
    }

    get top(): T|undefined {
        return this._top?.el;
    }
}