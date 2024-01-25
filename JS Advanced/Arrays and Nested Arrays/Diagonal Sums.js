/* A square matrix of numbers comes as an array of arrays, each array holding numbers. 
Write a function that finds the sum at the main and the secondary diagonals.
The input comes as an array of arrays, containing number elements (2D matrix of numbers).
The output is printed on the console, on a single line separated by space. 
First print the sum at the main diagonal, then the sum at the secondary diagonal. */

function diagonalSum(arr) {
    let firstSum = 0;
    let secondSum = 0;

    for (let i = 0; i < arr.length; i++) {
        firstSum += arr[i][i];
        secondSum += arr[i][arr.length - 1 - i];
    }
    console.log(firstSum + ' ' +  secondSum);
}

// diagonalSum([[20, 40], 
//             [10, 60]]); //  80 50
console.log('-------');
diagonalSum([[3, 5, 17], 
            [-1, 7, 14], 
            [1, -8, 89]]); // 99 25

// diagonalSum([[3, 5, 17, 35], // [0] + [-1]
//             [-1, 7, 14, 7], 
//             [1, -8, 89, 10],
//             [11, 4, 25, 20]]) // [0] + [-1]