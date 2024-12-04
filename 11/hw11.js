// Форма з вибором улюбленого кольору:
let [...radioButtons] = document.querySelectorAll('input[name="color"]');
let form = document.querySelector('form');
form.addEventListener('change', function(){
    for(radioButton of radioButtons){
        if (radioButton.checked){
            document.body.style.background = radioButton.id;
        }
    }
})

// Форма для вибору хобі з чекбоксами:
let [... checkBoxes] = document.querySelectorAll('input[name="hobby"]');
let formTwo = document.querySelector('form[action="two"]');
let hobbyInfo = document.querySelector('.hobbyInfo');
formTwo.addEventListener('change', function(){
    let selectHobby = [];
    for(checkBox of checkBoxes){
        if(checkBox.checked){
           selectHobby.push(checkBox.value); 
        }
        hobbyInfo.innerHTML = selectHobby;
    }
})

// Форма з вибором країни із випадаючого списку:
const countries = [
    {
        name: 'Ukraine',
        capital: 'Kyiv',
        population: '41 millions'
    },
    {
        name: 'USA',
        capital: 'Washington D.C.',
        population: '331 millions'
    },
    {
        name: 'Canada',
        capital: 'Ottawa',
        population: '38 millions'
    }
];
let selectEl = document.querySelector('#countries');
countries.forEach((value, index)=>{
    let option = document.createElement('option');
    option.value = index;
    option.innerHTML = value.name;
    selectEl.appendChild(option);
});
selectEl.onchange = function(){
    let selectIndex = this.value;
    let pEl = document.querySelector('.countryInfo');
    if(selectIndex!==""){
        let country = countries[selectIndex];
        pEl.innerHTML = `
        <h4>${country.name}</h4>
        <p>${country.capital}</p>
        <p>${country.population}</p>
        `;
    }   
    else{
        pEl.innerHTML = '';
    }
}

// Форма для оцінювання якості обслуговування:
let [...rateBtns] = document.querySelectorAll('input[name="rating"]');
let formFour = document.querySelector('form[action="four"]');
let ratingInfo = document.querySelector('.ratingInfo');
formFour.addEventListener('change', function(){
    for(rateBtn of rateBtns){
        if (rateBtn.checked){
            ratingInfo.textContent = `Thank you for your rating! ${rateBtn.id}`;
        }
    }
});