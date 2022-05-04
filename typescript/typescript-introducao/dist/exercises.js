"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rectangle = exports.square = exports.triangle = exports.sumArray = exports.add = exports.showNameAndAge = exports.showName = void 0;
function showName(name) {
    return `Olá ${name}!`;
}
exports.showName = showName;
function showNameAndAge(name, age) {
    return `${name} tem ${age} anos.`;
}
exports.showNameAndAge = showNameAndAge;
function add(x, y) {
    return x + y;
}
exports.add = add;
function sumArray(numbers) {
    return numbers.reduce(add, 0);
}
exports.sumArray = sumArray;
function triangle(base, height) {
    return (base * height) / 2;
}
exports.triangle = triangle;
function square(side) {
    return side ** 2;
}
exports.square = square;
function rectangle(base, height) {
    return base * height;
}
exports.rectangle = rectangle;
