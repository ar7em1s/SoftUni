function oddPositions(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 != 0) {
            newArr.push(arr[i] * 2);
        }
    }
    console.log(newArr.reverse().join(' '));
}

oddPositions([10, 15, 20, 25]);
console.log('-----');
oddPositions([3, 0, 10, 4, 7, 3]);