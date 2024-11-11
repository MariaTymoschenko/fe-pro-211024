// 1
let start = 1; 
let end = 20;
let summ = 0;
let i = start;
while (i <= 20) {
    if (i %2 ===0) {
        summ += i;
    }
    i++;
}
console.log(summ);

// 2
let b = 5;
 for(let a = 0; a<=10; a++) {
    console.log(a*b);
 }

// 3
let i = 10;
for(let i = 10; i>=1; i--) {
console.log(i);
}

// 4
let number = prompt('Enter a number');
let result = true;
for(i = 0; i < number; i++){
    result = !result
}
if(result){
   console.log('number is even');
}
else {
    console.log('number is odd');
}

// 5
let key = 'divide';
let firstValue = 10;
let secondValue = 0;
function summResult(firstValue, secondValue){
    console.log(firstValue+secondValue);
}
function subtractResult(firstValue, secondValue){
    console.log(firstValue-secondValue);
}
function multiplyResult(firstValue, secondValue){
    console.log(firstValue*secondValue);
}
function divideResult(firstValue, secondValue){
    if (secondValue === 0) {
        console.log('cannot be divided by zero');
    } else {
        console.log(firstValue/secondValue);
    }
}
switch (key) {
    case 'summ':
        summResult(firstValue, secondValue);
        break;
        case 'subtract':
            subtractResult(firstValue, secondValue);
            break;
            case 'multiply':
                multiplyResult(firstValue, secondValue);
                break;
                case 'divide':
                    divideResult(firstValue, secondValue);
            break;
}

// 6
const multiplyValues = function (a, b, c){
    return a * b * c;
}
