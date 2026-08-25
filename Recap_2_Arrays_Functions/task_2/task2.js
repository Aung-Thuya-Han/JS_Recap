'use strict';

const numbers = [];

for (let i = 1; i <= 5; i++) {
    const userNum = parseInt(prompt('Enter number ' + i + ':'));

    numbers.push(userNum);
};

console.log('Numbers:', numbers);

const searchNum = parseInt(prompt('Enter a number to search; '));

if (numbers.includes(searchNum)) {
    alert('Number ' + searchNum + ' is found in the array.');
} else {
    alert('Number ' + searchNum + ' is not found in the array.');
};

numbers.pop();

console.log('Updated Numbers:', numbers);

numbers.sort((a,b) => a - b);

console.log('Sorted Numbers:', numbers);




