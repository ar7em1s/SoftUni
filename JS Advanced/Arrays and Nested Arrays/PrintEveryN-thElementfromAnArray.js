function printEveryN(arr, n) {
    let resultArr = [];

    for (let i = 0; i < arr.length; i += n) {
        resultArr.push(arr[i]);
    }
    
    return resultArr;
}

printEveryN(['5', '20', '31', '4', '20'], 2);
console.log('--------');
printEveryN(['dsa', 'asd', 'test', 'tset'], 2);
console.log('--------');
printEveryN(['1', '2', '3', '4', '5'], 6);