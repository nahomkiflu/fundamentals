const baseURL = 'https://api.spacexdata.com/v2/rockets';

const searchForm = document.querySelector('form');
const spaceships = document.querySelector('ul');

searchForm.addEventListener('submit', fetchspace);

function fetchspace(e) {
    e.preventDefault();
    fetch(baseURL)
    .then(result => {
        return result.json();
    })
    .then(json => {
        console.log(json);
        displayRockets(json);
    })
}

function displayRockets(json) {
    let rocket = json.forEach(r => {
        let rocket = document.createElement('li');
        let firstflight = document.createElement('li');
        let engines,type = document.createElement('li');
        rocket.innerText = r.name;
        firstflight.innerText = r.first_flight;
        engines,type.innerText = r.engines.type;
        spaceships.appendChild(rocket);
        spaceships.appendChild(firstflight);
        spaceships.appendChild(engines.type)
    })
}