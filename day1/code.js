"use strict";
exports.__esModule = true;
var fs = require("fs");
var input = fs.readFileSync('./input.txt', 'utf-8').toString();
console.log(input);
// Part 1
input.split('\n').forEach(function (elf) {
    console.log(elf);
});
