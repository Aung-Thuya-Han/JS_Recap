'use strict';

const originalArray = [1,5,7,11,23,4,6];

console.log("Original Array: ", originalArray);

function sortArray(numbers, order) {
    if (order === 'asc') {
        return numbers.sort((a, b) => a - b);
    } else if (order === 'desc') {
        return numbers.sort((a,b) => b - a);
    }
}

console.log('Ascending Array: ', sortArray(originalArray, 'asc'));
console.log('Descending Array: ', sortArray(originalArray, 'desc'));