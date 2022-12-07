import * as fs from 'fs';
import path from 'path';

let input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf-8').toString();

// Part 1
type Tree = (number | Tree)[];
const tree: Tree = [];

input.split('\n').forEach(line => {

});