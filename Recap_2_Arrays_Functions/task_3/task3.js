'use strict';

const numberArray = [];

let userNum = '';

while (userNum !== 'done') {

    userNum = prompt('Enter a number or click "done":');
    numberArray.push(parseInt(userNum));
}

const evenNumbers = [];

for (const number of numberArray) {
    if (number % 2 === 0) {
        evenNumbers.push(number);
    }
}

console.log(evenNumbers);

let output = '';

if (evenNumbers.length > 0) {
    output = 'Even numbers: ' + evenNumbers;
} else {
    output = 'Even numbers: None';
}

document.querySelector('#answer').innerHTML = `
${output}
<br/>
This is the end of the program.
`;
