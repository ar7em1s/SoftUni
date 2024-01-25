function biggerHalf(inputArr) {
    let sortedArr = inputArr.sort((a, b) => a - b);
    let resultArr = [];

    for (let i = Math.floor(sortedArr.length / 2); i < sortedArr.length; i++) {
        resultArr.push(sortedArr[i]);
    }

    return resultArr;
}

biggerHalf([4, 7, 2, 5]);
console.log('------');
biggerHalf([3, 19, 14, 7, 2, 19, 6]);