function positiveNegative(inputArr) {
    let newArr = [];

    for (let i = 0; i < inputArr.length; i++) {
        if (inputArr[i] < 0) {
            newArr.unshift(inputArr[i]);
        } else {
            newArr.push(inputArr[i]);
        }
    }
    console.log(newArr);
}

positiveNegative([7, -2, 8, 9]);
console.log('-------');
positiveNegative([3, -2, 0, -1]);