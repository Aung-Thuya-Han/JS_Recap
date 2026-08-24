'use strict';

const celsius = parseFloat(prompt('Enter the temperature in celsius: '));
const fahrenheit = ((celsius * 9) / 5 ) + 32;
const kelvin = celsius + 273.15;

document.querySelector('#answers').innerHTML = `
Temperature in Celsius: ${celsius} 
<br/>
Temperature in Fahrenheit: ${fahrenheit}
<br/>
Temperature in Kelvin: ${kelvin}
`;

