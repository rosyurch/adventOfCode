const data = require('./input.js');

const resultPart1 = data
    .split('\n')
    .map(num => Number(num))
    .reduce((acc, cur) => acc + cur);

// console.log(resultPart1);

// part 1 - sum of all 'frequencies'
// 466 - correct

const resultPart2 = data => {
    const hash = {};
    let sum = 0;
    let found = false;

    const input = data.split(/\n/g);

    while (!found) {
        for (const num of input) {
            sum += Number(num);
            if (hash[sum]) {
                found = true;
                return sum;
            }
            hash[sum] = true;
        }
    }
};

console.log(resultPart2(data));
