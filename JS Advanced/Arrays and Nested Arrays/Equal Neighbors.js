function neighbors(matrix) {
    let count = 0;

    function areEqual(el1, el2) {
        return el1 === el2;
    }

    for (let i = 0; i < matrix.length; i++) { //row
        for (let j = 0; j < matrix[i].length; j++) { //column
            if (j < matrix[i].length - 1 && areEqual(matrix[i][j], matrix[i][j + 1])) {
                count++;
            }

            if (i < matrix.length - 1 && areEqual(matrix[i][j], matrix[i + 1][j])) {
                count++;
            }
        }
    }
    
    console.log(count);
}

neighbors([['2', '3', '4', '7', '0'],
            ['4', '0', '5', '3', '4'],
            ['2', '3', '5', '4', '2'],
            ['9', '8', '7', '5', '4']]);
console.log('-------');
neighbors([['test', 'yes', 'yo', 'ho'], 
            ['well', 'done', 'yo', '6'], 
            ['not', 'done', 'yet', '5']]);