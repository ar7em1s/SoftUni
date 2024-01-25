function biggestElement(arr) {
    let biggestEl = arr[0][0];

    for (let row = 0; row < arr.length; row++) {
        for (let column = 0; column < arr[row].length; column++) {
            if (arr[row][column] >= biggestEl) {
                biggestEl = arr[row][column];
            }
        }
    }
    console.log(biggestEl);
}

biggestElement([[20, 50, 10],
                [8, 33, 145]]);
console.log('------');
biggestElement([[3, 5, 7, 12], 
                [-1, 4, 33, 2], 
                [8, 3, 100, 4]]);
