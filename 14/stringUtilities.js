// 5 Імпорт утиліти для роботи з текстом
function upperCase(params) {
    let change = params.toUpperCase();
    console.log(change);
}
function reverse(params) {
    let reverse = params.split('').reverse().join('');
    console.log(reverse);
}
export {upperCase, reverse}