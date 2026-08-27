'use strict';

const originalArray = [1,5,7,11,23,4,6];

console.log("Original Array: ", originalArray);

const ascendingArray = originalArray.sort((a,b) => a - b);


console.log("Ascending Array: ", ascendingArray);