// 1
let number1 = 3;
let number2 = 4;
if (number1 === number2) {
alert('numbers are equal');
}
else {
    alert('numbers are not equal');
}

// // 2
let inputNumber = prompt ('Enter a number');
if(inputNumber %2 === 0){
console.log(`odd number`);
}
else {
    console.log(`even number`);
}

// 3
let inputAge = prompt ('Enter your age');
if(inputAge < 18){
    console.log('user is under age');
}
else {
    console.log('user is adult');
}

// 4
let price = prompt ('Enter price');
let amount = prompt ('Enter amount');
let result = price * amount;
console.log(result);

// 5
let price = prompt ('What is the price?');
let discount = price / 2;
alert(discount);

// 6
let firstNumber = prompt ('Enter first number');
let secondNumber = prompt ('Enter second number');
let thirdNumber = prompt ('Enter third number');
if(firstNumber > secondNumber){
    if(firstNumber>thirdNumber){
    console.log(firstNumber);
    } else{
        console.log(thirdNumber);
    }
} 
else
    if (secondNumber > thirdNumber){
    console.log (secondNumber);
    } else{
    console.log(thirdNumber);
    }


// 7
let monthNumber = prompt ('Enter month number (1-12)');
if(monthNumber<=0 || monthNumber >= 13){
    console.log('Month doesnt exist');
}else
if(monthNumber >=3 && monthNumber <=5){
    console.log('Spring');
}
else if(monthNumber >=6 && monthNumber <=8){
    console.log('Summer');
}
else if(monthNumber >= 9 && monthNumber <=11){
    console.log('Autumn');
}
else {
    console.log('Winter');
}

// 8
let number = prompt('Enter a number');
if(number == 0) {
    console.log('number is zero')
}
else if(number > 0){
    console.log('number is positive')
}
else{
    console.log('number is negative')
}