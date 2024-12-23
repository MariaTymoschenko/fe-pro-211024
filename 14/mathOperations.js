// 4 Розділення коду на модулі
function summ(a, b) {
    let res = a + b;
    console.log(res);
}
function minus(a, b) {
    let res = a - b;
    console.log(res);
}
function multiply(a, b) {
    let res = a * b;
    console.log(res);
}
function divide(a, b) {
    if (b === 0) {
        console.log('You cannot divide by 0');
    } else {
        let res = a / b;
        console.log(res);
    }
}
export { summ, minus, multiply, divide }