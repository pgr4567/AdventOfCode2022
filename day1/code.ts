import * as fs from 'fs';
import path from 'path';

let input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf-8').toString();

// Part 1
let highest = 0;

input.split('\n\n').forEach(elf => {
    let val = elf.split('\n').map(line => parseInt(line)).reduce((prev, curr) => {
        return prev + curr;
    });

    if (val > highest) {
        highest = val;
    }
});

console.log(highest);

// Part 2
let highestFew: number[] = [];

input.split('\n\n').forEach(elf => {
    let val = elf.split('\n').map(line => parseInt(line)).reduce((prev, curr) => {
        return prev + curr;
    });

    highestFew.push(val);
});

console.log(highestFew.sort((a, b) => b - a).slice(0, 3).reduce((prev, curr) => prev += curr));