// 1
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
let object = new Person('John', 30);
console.log(object);

// 2
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sayHello(){
        console.log(`Hello ${this.name}`);
    }
}
let object = new Person('John', 30);
object.sayHello();

// 3
class Person {
        constructor(name, age){
            this.name = name;
            this.age = age;
        }
    }
class Student extends Person{
    constructor(name, age, studentId){
        super(name, age);
        this.studentId = studentId;
    }
    study(){
        console.log(`${this.name} is studying well`);
    }
}
let student = new Student('John', 30, 52);
student.study();

// Math.min
function numbers(number1, number2) {
    return Math.min(number1, number2);
}
console.log(numbers(57, 6));

// Math.max
function numbers(number1, number2) {
    return Math.max(number1, number2);
}
console.log(numbers(7, 17));

// Math.pow
function pow(number) {
    return Math.pow(number, 3);
}
console.log(pow(6));

// Math.floor
function floor(number) {
    return Math.floor(number);
}
console.log(floor(2.9));

// Math.ceil
function ceil(number) {
    return Math.ceil(number);
}
console.log(ceil(3.1));

// Date.getYear
function year(age) {
    let currentYear = new Date().getFullYear();
    return currentYear - age;
}
let userAge = prompt('Enter your age');
console.log(year(userAge));

// Date.toLocaleString
let nowDate = new Date();
console.log(nowDate.toLocaleString());

// String.split & toUpperCase
let row = 'M a r i a';
rowArray = row.toUpperCase();
rowArray = row.split(' ');
console.log(rowArray);
