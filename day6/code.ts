import * as fs from 'fs';
import path from 'path';

let input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf-8').toString();

// Part 1
let chars = [...input];
let lastChars: string[] = [];
for (let x = 1; x < chars.length + 1; x++) {
    lastChars.push(chars[x - 1]);
    if (lastChars.length > 4) {
        lastChars.shift();
    }

    if (lastCharsAreDifferent(3)) {
        console.log(x);
        break;
    }
}

function lastCharsAreDifferent(threshold: number) {
    if (lastChars.length > threshold) {
        return lastChars.every((char, index) => lastChars.lastIndexOf(char) == index);
    }
    return false;
}

// Part 2
chars = [...input];
lastChars = [];
for (let x = 1; x < chars.length + 1; x++) {
    lastChars.push(chars[x - 1]);
    if (lastChars.length > 14) {
        lastChars.shift();
    }

    if (lastCharsAreDifferent(13)) {
        console.log(x);
        break;
    }
}