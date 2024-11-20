// spread
// function funct(array1, array2) {
//     return [... array1, ... array2];
// }
// let array1 = [1, 2];
// let array2 = [7, 8];
// let arrays = funct(array1, array2);
// console.log(arrays);

// rest
// function funct(argument1, ... argument2) {
//     console.log(argument1, argument2);
// }
// funct('Hello', 1, false);

// ?????
// function name(a, b, c) {

// }

// typeOf
// function myFunc(params) {
//    return params = typeof params;
// }
// console.log(myFunc (false));

// 
// function myFunc(params) {
//     if (typeof params === 'number') {
//         console.log('Це число');
//     }
//     else if (typeof params === 'string') {
//         console.log('Це рядок');
//     }
//     else {
//         console.log('Це інший тип');
//     }
// }
// myFunc(Number);

// Робота з селекторами
let id = document.getElementById('attribute');
console.log(id);

let className = document.getElementsByClassName('attr');
console.log(className);

let tag = document.getElementsByTagName('header');
console.log(tag);

let firstEl = document.querySelector('ul li:first-child');
console.log(firstEl);
let lastEl = document.querySelector('ul li:last-child');
console.log(lastEl);
let thirdEl = document.querySelector('ul li:nth-child(3)');
console.log(thirdEl);

let [... allEl] = document.querySelectorAll('li');
console.log(allEl);
