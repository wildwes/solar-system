const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/


// This is also an array ".filter" is always an array
const ePlanets = planets.filter(planet => {
    if (planet.includes("e")) {
        return planet
    }
})
// turned the following variable into a function to reuse 
const capitalizeArray = (array) => array.map(planet => {
    return planet.charAt(0).toUpperCase() + planet.slice(1)
})
console.log(capitalizeArray(ePlanets))


const planetEl = document.getElementById("planets")
// forEach syntax
// array1.forEach(element => console.log(element));
capitalizeArray(ePlanets).forEach(sphere => planetEl.innerHTML += `<h1>${sphere}</h1>`)
/*
/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/




