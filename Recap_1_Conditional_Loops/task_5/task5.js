'use strict';

const userNum = parseInt(prompt('Enter an integer number:'));

let sum = 0;

for (let i = 1; i <= userNum; i++) {
    sum += i;
};

document.querySelector('#answer').innerHTML = `
The toal sum of numbers up to ${userNum} is ${sum}.
`;