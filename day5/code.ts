import * as fs from 'fs';
import path from 'path';

class Stack<T> {
    private storage: T[] = [];

    constructor(private capacity: number = Infinity) { }

    push(item: T): void {
        if (this.size() === this.capacity) {
            throw Error("Stack has reached max capacity, you cannot add more items");
        }
        this.storage.push(item);
    }

    pop(): T | undefined {
        return this.storage.pop();
    }

    peek(): T | undefined {
        return this.storage[this.size() - 1];
    }

    size(): number {
        return this.storage.length;
    }
}

let input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf-8').toString();

// Part 1
let startSetup = input.split('\n').slice(0, 8);
let moves = input.split('\n').slice(10);

let blocks: Stack<string>[] = [new Stack(), new Stack(), new Stack(), new Stack(), new Stack(), new Stack(), new Stack(), new Stack(), new Stack()];
startSetup.reverse().forEach(line => {
    for (let x = 0; x < line.length; x += 4) {
        let item = line.substring(x + 1, x + 2);
        if (item != ' ') {
            blocks[x / 4].push(item);
        }
    }
});

moves.forEach(move => {
    let words = move.split(' ');
    let count = parseInt(words[1]);
    for (let i = 0; i < count; i++) {
        let item = blocks[parseInt(words[3]) - 1].pop();
        blocks[parseInt(words[5]) - 1].push(item!);
    }
});

let top = blocks.map(stack => stack.peek()!).reduce((prev, curr) => prev += curr);
console.log(top);

//Part 2
startSetup = input.split('\n').slice(0, 8);
moves = input.split('\n').slice(10);
blocks = [new Stack(), new Stack(), new Stack(), new Stack(), new Stack(), new Stack(), new Stack(), new Stack(), new Stack()];
startSetup.reverse().forEach(line => {
    for (let x = 0; x < line.length; x += 4) {
        let item = line.substring(x + 1, x + 2);
        if (item != ' ') {
            blocks[x / 4].push(item);
        }
    }
});

moves.forEach(move => {
    let words = move.split(' ');
    let count = parseInt(words[1]);
    let tempStack = new Stack<string>();

    for (let i = 0; i < count; i++) {
        let item = blocks[parseInt(words[3]) - 1].pop();
        tempStack.push(item!);
    }
    for (let i = 0; i < count; i++) {
        blocks[parseInt(words[5]) - 1].push(tempStack.pop()!);
    }
});

let top2 = blocks.map(stack => stack.peek()!).reduce((prev, curr) => prev += curr);
console.log(top2);