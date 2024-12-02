let currencyFrom = document.querySelector('#currencyFrom');
let currencyTo = document.querySelector('#currencyTo');
let btn = document.querySelector('#calculate');
function checkFields() {
    if (currencyFrom.value !== '' & currencyTo.value !== '') {
        btn.removeAttribute('disabled');
    }
    else{
        btn.setAttribute('disabled', '');
    }
}
currencyFrom.addEventListener('input', checkFields);
currencyTo.addEventListener('input', checkFields);

let outputEl = document.querySelector('strong');
btn.addEventListener('click', function(event){
    event.preventDefault();
    let result = Number(currencyFrom.value)/Number(currencyTo.value);
    outputEl.innerHTML = result;
})
