'use strict';

const firstSide = parseFloat(prompt('Enter the first side of the triangle:'));
const secondSide = parseFloat(prompt('Enter the second side of the triangle:'));
const thirdSide = parseFloat(prompt('Enter the third side of the triangle:'));

let triangle;

if (firstSide == secondSide && secondSide == thirdSide) {
    triangle = 'equilateral';
} else if (firstSide == secondSide || secondSide == thirdSide || firstSide == thirdSide) {
    triangle = 'isosceles';
} else if (firstSide != secondSide && secondSide != thirdSide && firstSide != thirdSide) {
    triangle = 'scalene';
}

document.querySelector('#result').innerHTML = `
The first side is ${firstSide}.
<br/>
The second side is ${secondSide}.
<br/>
The third side is ${thirdSide}.
<br/>
Therefore, the triangle is ${triangle}.
`;