// 1
let btn = document.querySelector('button');
btn.onclick = function () {
    this.style.color = 'red';
}

// 2
let task2 = document.querySelector('.task2');
task2.ondblclick = function () {
    let currentSize = parseInt(window.getComputedStyle(this).fontSize);
    this.style.fontSize = `${currentSize*2}px`;
}

// 3
let button = document.querySelector('.task3');
let counterEl = document.querySelector('.counter');
let count = 0;
function increaseCounter() {
    count++;
    counterEl.innerHTML = count;
    if(count>=10){
        button.removeEventListener('click', increaseCounter);
    }
}
button.addEventListener('click', increaseCounter);

// 4
let task4 = document.querySelector('.task4');
for (let i = 0; i < 10; i++) {
divEl = document.createElement('div');  
divEl.innerHTML = i+1;
divEl.onclick = function(){
            this.remove();
}
task4.appendChild(divEl);
}

// 5
let task5 = document.querySelector('.blockContainer');
task5.addEventListener('click', function(event){
    if(event.target.tagName === 'BUTTON'){
    let buttonClassName = event.target.className;
    alert(`click on ${buttonClassName}`);
    }
})

// 6
let menuButton = document.querySelector('.task6');
let navEl = document.querySelector('nav');
menuButton.onclick = function(){
    this.classList.toggle('active');
    navEl.classList.toggle('active');
}