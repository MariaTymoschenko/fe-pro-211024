// 1
let input = document.querySelector('#userInput');
let saveButton = document.querySelector('.saveData');
let showButton = document.querySelector('.showData');
saveButton.addEventListener('click', function () {
    let userData = input.value;
    window.sessionStorage.setItem('userInput', userData);
})
showButton.addEventListener('click', function () {
    let savedData = sessionStorage.getItem('userInput');
    if (savedData) {
        console.log(savedData);
    } else {
        console.log('no data saved');
    }
})

// 2
let form = document.querySelector('form');
let button = document.querySelector('.save');
let savedColor = localStorage.getItem('bgColor');
if (savedColor) {
    document.body.style.background = savedColor; 
    document.querySelector(`input[name="bgColor"][value="${savedColor}"]`).checked = true;
    textColor(savedColor);
}
button.addEventListener('click', function () {
    let selectedColor = document.querySelector('input[name="bgColor"]:checked').value;
    localStorage.setItem('bgColor', selectedColor);
    document.body.style.backgroundColor = selectedColor;
    textColor(selectedColor);
});
function textColor (bgColor){
    if(bgColor === 'black'){
        document.body.style.color = 'white';
    }
    else {
        document.body.style.color = 'black';
    }       
}






