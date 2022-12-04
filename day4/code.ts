import * as fs from 'fs';
import path from 'path';

let input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf-8').toString();

// Part 1
let completeOverlapCount = input.split('\n').map(game => {
    let assignments = game.split(',');
    let elf1 = assignments[0].split('-').map(n => parseInt(n));
    let elf2 = assignments[1].split('-').map(n => parseInt(n));
    if (elf1[0] >= elf2[0] && elf1[1] <= elf2[1]) {
        return 1;
    } else if (elf2[0] >= elf1[0] && elf2[1] <= elf1[1]) {
        return 1;
    } else {
        return Number(0);
    }
}).reduce((prev, curr) => prev += curr);

console.log(completeOverlapCount);

// Part 2
let overlapCount = input.split('\n').map(game => {
    let assignments = game.split(',');
    let elf1 = assignments[0].split('-').map(n => parseInt(n));
    let elf2 = assignments[1].split('-').map(n => parseInt(n));
    if (elf1[0] <= elf2[1] && elf1[1] >= elf2[0]) {
        return 1;
    } else if (elf2[0] <= elf1[1] && elf2[1] >= elf1[0]) {
        return 1;
    } else {
        return Number(0);
    }
}).reduce((prev, curr) => prev += curr);

console.log(overlapCount);