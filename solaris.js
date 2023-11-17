
// API
const API_KEY = "solaris-1Cqgm3S6nlMechWO";
const BASE_URL = "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/";

// Modal
const modal = document.getElementById('modalPlanet')
const modalContent = document.getElementById('modalContent')

// Variables
const planetInfo = document.getElementById('planet-info');

const sunButton = document.getElementById('sun__image')
const mercuryButton = document.getElementById('mercury')
const venusButton = document.getElementById('venus')
const earthButton = document.getElementById('earth')
const marsButton = document.getElementById('mars')
const jupiterButton = document.getElementById('jupiter')
const saturnusButton = document.getElementById('saturnus')
const uranusButton = document.getElementById('uranus')
const neptuneButton = document.getElementById('neptune')


// Function that get's the API key and returns it
async function getApi() {
        const response = await fetch("https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys", {
        method: "POST",
       
    });
    const data = await response.json();
 //   console.log(data);
    return data.key;
}


// Use the API key to fetch planet data
async function getPlanets() {
    const key = await getApi();
 //   console.log(key);
    const response = await fetch("https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies", {
        headers: { 
            "x-zocom": `${key}`, 
    },
    
});
    const data = await response.json();
    return data;

}



// Funktion that gets planet information and stores it in multiple variables
async function planetData() {
  try {  const data = await getPlanets();

    let planets = data.bodies

    //Planets saved in global variables
   sunPlanet = planets[0]
   mercuryPlanet = planets[1]
   venusPlanet = planets[2]
   earthPlanet = planets[3]
   marsPlanet = planets[4]
   jupiterPlanet = planets[5]
   saturnusPlanet = planets[6]
   uranusPlanet = planets[7]
   neptunePlanet = planets[8]

   showPlanets(planets)
    } catch (error) {
    console.log('Unfortunately there is no milkyway')
}};

   

getPlanets();

// function that shows the planets and does so on click.
function showPlanets(planets) {

    for(let i = 0; i < planets.length; i++) {
        const planet = planets[i];
       //console.log(planet)


    }
}

// Function for closing the info window
function closeModal() {

    modal.addEventListener('click', (event) => {
        if(event !== modal) {
            modal.style.display = 'none'
        }
    })  
};

// Function that inserts planetary info
function displayPlanet(planet) {

    modalContent.innerHTML = `
    <article class="planet-name">
    <h2>${planet.name}</h2>
    <h3>${planet.latinName}</h3>
    </article>
    <p>${planet.desc}</p>
    <div class="grid-container">
    <article class="planet-circumference">
    <h2>Omkrets</h2>
    <p>${planet.circumference}</p>
    </article>
    <article class="distance">
    <h2>KM från solen</h2>
    <p>${planet.distance}</p>
    </article>
    <article class="day-temp">
    <h2>Max temperatur</h2>
    <p> ${planet.temp.day}</p>
    </article>
    <article class="night-temp">
    <h2>Min temperatur</h2>
    <p>${planet.temp.night}</p>
    </article>
    </div>
    <article class="moons">
    <h2>Månar</h2>
    <p>${planet.moons}</p>
    </article>
    `;

    modal.style.display = 'block';
}

// Funktion som visar solen
function showSun () {

    sunButton.addEventListener('click', () => {
        displayPlanet(sunPlanet)

    });
}

// Funktion som visar Merkurius
function showMercury () {

    mercuryButton.addEventListener('click', () => {
        displayPlanet(mercuryPlanet)
    });
}
// Funktion som visar venus
function showVenus () {

    venusButton.addEventListener('click', () => {
        displayPlanet(venusPlanet)
    });
}
// Funktion som visar Jorden
function showEarth () {

    earthButton.addEventListener('click', () => {
        displayPlanet(earthPlanet)
    });
}

// Funktion som visar Mars
function showMars () {

    marsButton.addEventListener('click', () => {
        displayPlanet(marsPlanet)
    });
}
// Funktion som visar Jupiter
function showJupiter () {

    jupiterButton.addEventListener('click', () => {
        displayPlanet(jupiterPlanet)
    });
}
// Funktion som visar Saturnus
function showSaturnus () {

    saturnusButton.addEventListener('click', () => {
        displayPlanet(saturnusPlanet)
    });
}
// Funktion som visar Uranus
function showUranus () {

    uranusButton.addEventListener('click', () => {
        displayPlanet(uranusPlanet)
    });
}

function showNeptune () {

    neptuneButton.addEventListener('click', () => {
        displayPlanet(neptunePlanet)
    });
}

planetData();
showMars ();    
showSun();  
showMercury();
showVenus();
showEarth();
showJupiter();
showSaturnus();
showUranus();
showNeptune();

closeModal();


// Får denna error efter ett tag: Uncaught (in promise) Error: A listener indicated an asynchronous response by returning true, but the message channel closed before a response was received