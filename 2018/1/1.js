const data = require('./input.js');

const resultPart1 = data
    .split('\n')
    .map(num => Number(num))
    .reduce((acc, cur) => acc + cur);

// console.log(resultPart1);

// part 1 - sum of all 'frequencies'
// 466 - correct

const resultPart2 = data => {
    // const set = new Set();
    const hash = {};
    // let sum = 0;
    let firstRepeated;

    data.split('\n')
        .map(num => Number(num))
        .reduce((acc, cur) => {});

    // data.split('\n')
    //     .map(num => {
    //         num = Number(num);
    //         sum += num;
    //         set.add(sum);

    //         return num;
    //     })
    //     .reduce((acc, cur) => {
    //         if (set.has(acc + cur)) firstRepeated = acc + cur;
    //         // console.log(set.has(res));

    //         return acc + cur;
    //     });

    // console.log(set);
    return firstRepeated;
};

console.log(resultPart2(data));
