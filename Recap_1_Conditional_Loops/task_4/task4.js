'use strict';

const userScore = parseInt(prompt('Enter your score in integer:'));

let grade;

if (userScore >= 88) {
    grade = 5;
} else if (userScore >= 76) {
    grade = 4;
} else if (userScore >= 64) {
    grade = 3;
} else if (userScore >= 52) {
    grade = 2;
} else if (userScore >= 40) {
    grade = 1;
} else {
    grade = 0;
}

document.querySelector('#result').innerHTML = `
User score is ${userScore}.
<br/>
Grade is ${grade}.
`;