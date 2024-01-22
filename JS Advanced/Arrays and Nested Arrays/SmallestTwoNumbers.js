function smallestNumber(inputArr) {
    let newArr = inputArr.sort((a, b) => a - b);
    console.log(newArr[0] + ' ' + newArr[1]);
}

smallestNumber([30, 15, 50, 5]);
console.log('--------');
smallestNumber([3, 0, 10, 4, 7, 3]);