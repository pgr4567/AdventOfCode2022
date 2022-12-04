import * as fs from 'fs';
import path from 'path';

let input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf-8').toString();

// Part 1
let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

let pSum = input.split('\n').map(bp => {
    let comp1 = [...bp.substring(0, bp.length / 2)];
    let comp2 = bp.substring(bp.length / 2);

    let prio = 0;
    comp1.forEach(item => {
        if (comp2.includes(item)) {
            prio = chars.indexOf(item) + 1;
        }
    });
    return prio;
}).reduce((prev, curr) => prev += curr);

console.log(pSum);

//Part 2
let bps = input.split('\n');
let count = 0;
for (let i = 0; i < bps.length; i += 3) {
    let bp1 = [...bps[i]];
    let bp2 = bps[i + 1];
    let bp3 = bps[i + 2];

    let prio = 0;
    bp1.forEach(item => {
        if (bp2.includes(item) && bp3.includes(item)) {
            prio = chars.indexOf(item) + 1;
        }
    });
    count += prio;
}

console.log(count);