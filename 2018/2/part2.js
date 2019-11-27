const input = require('./input');

const data = input.trim().split('\n');

for (const i of data) {
    for (const j of data) {
        if (levenshtein(i, j) === 1) {
            let commonLetters = '';
            i.split('').forEach((letter, index) => {
                if (letter === j.charAt(index)) commonLetters += letter;
            });
            console.log(commonLetters);
        }
    }
}

function levenshtein(a, b) {
    // levenstein distance algorithm, Algorithms and Their Habitat by Vitalii Bobrov | JSConf Budapest 2019 15:36, https://www.youtube.com/watch?v=We3YDTzNXEk
    const matrix = [];

    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }

    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }

    for (i = 1; i <= b.length; i++) {
        for (j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j] + 1);
            }
        }
    }
    return matrix[b.length][a.length];
}
