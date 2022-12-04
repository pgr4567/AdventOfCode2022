import * as fs from 'fs';
import path from 'path';

let input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf-8').toString();

// Part 1
let idealCounters: { [key: string]: string } = {
    'A': 'Y',
    'B': 'Z',
    'C': 'X'
};
let chosenScore: { [key: string]: number } = {
    'X': 1,
    'Y': 2,
    'Z': 3
};
let convertMap: { [key: string]: string } = {
    'A': 'X',
    'B': 'Y',
    'C': 'Z'
};

let score = input.split('\n').map(game => {
    let suggestion = game.split(' ');
    let score = chosenScore[suggestion[1]];
    if (convertMap[suggestion[0]] == suggestion[1]) {
        score += 3;
    } else if (idealCounters[suggestion[0]] == suggestion[1]) {
        score += 6;
    }

    return score;
}).reduce((prev, curr) => prev += curr);

console.log(score);

//Part 2
let gameOutcomes: { [key: string]: number } = {
    'X': 1,
    'Y': 2,
    'Z': 0
};
let gameSolutions: { [key: string]: string } = {
    'A': 'BCA',
    'B': 'CAB',
    'C': 'ABC'
};
let chosenScoreAlt: { [key: string]: number } = {
    'A': 1,
    'B': 2,
    'C': 3
};

let scoreNewGuide = input.split('\n').map(game => {
    let suggestion = game.split(' ');
    let chosenSymbol = gameSolutions[suggestion[0]].charAt(gameOutcomes[suggestion[1]]);
    let score = chosenScoreAlt[chosenSymbol];
    if (suggestion[1] == 'Y') {
        score += 3;
    } else if (suggestion[1] == 'Z') {
        score += 6;
    }

    return score;
}).reduce((prev, curr) => prev += curr);

console.log(scoreNewGuide);