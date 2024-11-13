// push
// 1
let array = [];
console.log(array);
array.push('Maria');
console.log(array);
array.push(28);
console.log(array);
array.push(true);

// 2
function myArray(array, element) {
    array.push(element);
    return array;
}
console.log(myArray([28, true], "Mariia"));

// pop
// 1
let info = ['Maria', 28, true];
info.pop();
console.log(info);

// 2
function info(array) {
    array.pop();
    return array;
}
console.log(info (['Maria', 28, true]));

// unshift
// 1
let info = ['Maria', 28, true];
info.unshift('cat');
console.log(info);

// 2
function myArray(array, element) {
    array.unshift(element);
    return element;
}
console.log(myArray(['Maria', 28], true));

// shift
// 1
let info = ['Maria', 28, true];
info.shift();
console.log(info);

// 2
function info(array) {
    array.shift();
    return array;
}
console.log(info (['Maria', 28, true]));


// fill
// 1
let info = ['Maria', 28, true];
info.fill(true);
console.log(info);

// 2
function myArray(array, value, index) {
    array.fill(value, index, index+1);
    return array;
}
console.log(myArray(["Mariia", true, 28], false, 1));

// sort
function arrayNumbers(params) {
    params.sort((a, b) => b - a);
    params.fill(10, 0, 3);
    return params;
}
console.log(arrayNumbers([12, 12, 33, 10, 30, 0, 3, 8, 9]));