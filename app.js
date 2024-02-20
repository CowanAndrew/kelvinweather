// constant of kelvin
const kelvin = 0;

// constant of celsius
const celsius = kelvin - 273;

// fahrenheit to celsius
let fahrenheit = celsius * (9 / 5) + 32;

// Math = fahrenheit
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Convert to Newton
let newton = celsius * (33 / 100);

// Round down
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`)
