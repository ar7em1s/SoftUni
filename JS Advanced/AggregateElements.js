function elements(arr) {
    let sum = 0;
    let invertSum = 0;
    let str = '';

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        invertSum += 1 / arr[i];
        str += arr[i];
    }
    console.log(`${sum}\n${invertSum}\n${str}`);
}

elements([1, 2, 3]); // 6, 1.83333333, 123
console.log('-------');
elements([2, 4, 8, 16]); // 30, 0.9375, 24816
