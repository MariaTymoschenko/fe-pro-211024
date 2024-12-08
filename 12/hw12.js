let randomColor = document.querySelector('.randomColor');
let colors = [
    'var(--color1)',
    'var(--color2)',
    'var(--color3)',
    'var(--color4)',
    'var(--color5)'
];
randomColor.addEventListener('click', function(){
let random = Math.floor(Math.random()*colors.length);
document.body.style.background = colors[random];
})

//  Знаходження всіх великих літер в тексті і збереження їх в масив
let textStr = "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque vero laborum fugit harum! Quia, cumque necessitatibus nemo veniam odit dolor impedit aspernatur, ipsa vitae minima quasi doloribus repellendus cupiditate!";
let pattern = /[A-Z]/g;
let result = textStr.match(pattern);
console.log(result);

// Вибір числових значень з строки
let operation = "5 плюс 7 = 3";
let number = /\d/g;
console.log(operation.match(number));

//  Знаходження слів із певною кількістю символів:
let words = /\b[a-zA-Z]{5}\b/g;
console.log(textStr.match(words));