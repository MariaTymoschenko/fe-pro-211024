// 1
fetch('https://jsonplaceholder.typicode.com/users')
.then(response=>response.json())
.then(user=>user.forEach(element => {
    console.log(element.name, element.email)
}))

// 2
let button = document.querySelector('#two');
let output = document.querySelector('#output');
button.addEventListener('click', function() {
    fetch('https://swapi.py4e.com/api/planets/')
        .then(response => response.json())
        .then(data => {
            data.results.forEach(planet => {
                let card = document.createElement('div');
                let planetInfo = `
                    <hr><strong>Name:</strong> ${planet.name} <br>
                    <strong>Diameter:</strong> ${planet.diameter} <br>
                    <strong>Climate:</strong> ${planet.climate}
                    <br>
                    <strong>Population:</strong> ${planet.population} <br>
                `;
                card.innerHTML = planetInfo;
                for (let key in planet) {
                    if (Array.isArray(planet[key])) {
                        planet[key].forEach(link => {
                            if (link.startsWith('http')) {
                                let linkEl = document.createElement('a');
                                linkEl.href = link;
                                linkEl.textContent = key;
                                linkEl.style.display = 'block';
                                card.appendChild(linkEl);
                            }
                    });
                    }
                }
                output.appendChild(card);
            });
        })
            });

// 3 Отримання і виведення інформації про планету з SWAPI
async function fetchPlanet() {
    let response = await fetch(`https://swapi.py4e.com/api/planets/2/`);
    let planet = await response.json();
    console.log(planet.name);
    console.log(planet.climate);
}
fetchPlanet();