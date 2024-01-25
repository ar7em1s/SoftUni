function sortNums(arr) {
    arr.sort((a, b) => a - b);

    const resultArr = [];

    for (let i = 0, j = arr.length - 1; i <= j; i++, j--) {
        if (i !== j) {          // If there are still elements to process, add the smaller one
            resultArr.push(arr[i]);
            resultArr.push(arr[j]);
        } else {                // If there is only one element left, add it to the result
            resultArr.push(arr[i]);
        }
    }
    return resultArr;
}

sortNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
console.log('--------');
sortNums([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]);