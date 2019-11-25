const input = require('./input');

let numOfTwo = 0;
let numOfThree = 0;

const data = input.trim().split('\n');

for (const line of data) {
    if (hasPair(line)) numOfTwo++;
    if (hasTriple(line)) numOfThree++;
}

console.log(numOfThree * numOfTwo);

function hasPair(line) {
    const letterCount = {};
    for (const letter of line) {
        if (letterCount[letter]) return true;
        letterCount[letter] = true;
        // console.log(letterCount);
    }
    return false;
}
function hasTriple(line) {
    const letterCount = {};
    for (const letter of line) {
        if (!letterCount[letter]) letterCount[letter] = 1;
        else letterCount[letter]++;

        // console.log(letterCount);
        if (letterCount[letter] === 3) return true;
    }
    return false;
}
