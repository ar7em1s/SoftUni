function subset(arr) {
    let resultArr = [];
    let currBiggest = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= currBiggest) {
            resultArr.push(arr[i]);
            currBiggest = arr[i];
        } else {
            continue;
        }
    }
    return resultArr;
    // console.log(resultArr);
}


subset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
console.log('--------');
subset([1, 2, 3, 4]);
console.log('--------');
subset([20, 3, 2, 15, 6, 1]);