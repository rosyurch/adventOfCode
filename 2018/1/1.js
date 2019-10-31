const data = require('./input.js');

const input = data.split('\n');

const result = input.map(num => Number(num)).reduce((acc, cur) => acc + cur);

console.log(result);
