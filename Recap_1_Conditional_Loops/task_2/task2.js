'use strict';

const userPoints = String(prompt('Enter 4 points separated by spacebar:'));

const pointAx = userPoints.split(' ')[0];
const pointAy = userPoints.split(' ')[1];
const pointBx = userPoints.split(' ')[2];
const pointBy = userPoints.split(' ')[3];

const xDifference = pointBx - pointAx;
const yDifference = pointBy - pointAy;


const distance = Math.sqrt((xDifference ** 2) + (yDifference ** 2));

document.querySelector('#distance').innerHTML = `
The first point is (${pointAx},${pointAy}).
<br/>
The second point is (${pointBx},${pointBy}).
<br/>
The distance between 2 points is ${distance.toFixed(2)}.
`;
