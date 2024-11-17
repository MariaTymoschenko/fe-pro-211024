// splice
// 1
let array = ['Maria', true, false, true, false, 28];
array.splice(1, 4);
console.log(array);

// 2
let array = ['Maria', true, false, true, false, 28];
function myArray(array, index, quantity) {
    array.splice(index, quantity);
    return array;
}
console.log(myArray(array, 1, 4));

// map
// 1
let array = [1,2,3,4,5,6,7,8,9,10];
let newArray = array.map(item=>item*item);
console.log(array);
console.log(newArray); 

// 2
let array = ['Maria', 28, true];
function myArray(array, funct) {
    return array.map(funct);
}
console.log(myArray(array, item=>item.toString()));



// filter
// 1
let array = [1,2,3,4,5,6,7,8,9,10];
let newArray = array.filter(number=>number%2===0);
console.log(newArray);

// 2
let array = [1,2,3,4,5,6,7,8,9,10];
function myArray(array, condition) {
    return array.filter(condition);
}
console.log(myArray(array, number=>number%2===0));

// var
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// var
let message = 'test';
function example() {
    if (true) {
    let message = 'Hello, world!';
    console.log(message);
    }
    console.log(message); // Виведе 'Hello, world!'
}
example();

// for in
const person = {
    name: 'John',
    age: 25,
    occupation: 'Developer'
};
for (const key in person) {
        console.log(person[key]);
    }

// for of & for in
const students = [
    { name: 'Alice', age: 20, grade: 'A' },
    { name: 'Bob', age: 22, grade: 'B' },
    { name: 'Charlie', age: 21, grade: 'C' }
];
for (const element of students) {
    for (const key in element)
        console.log(element[key]);
}
