'use strict';

const userNum = parseInt(prompt('Enter an integer number:'));

let row;
let column;
let tableContent = '';

for (row = 1; row <= userNum; row++) {
    tableContent += '<tr>';

    for (column = 1; column <= userNum; column++) {
        tableContent += '<td>' + (row * column) + '</td>';

    }

    tableContent += '</tr>';
}

document.querySelector('#number').innerHTML = `
Enter a positive integer: ${userNum}
`;

document.querySelector('#multipliTable').innerHTML = `
${tableContent}
`;