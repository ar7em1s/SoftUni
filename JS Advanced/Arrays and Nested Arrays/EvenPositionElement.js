function evenPosition(arr) {
    let strArr = '';
    for (let i = 0; i < arr.length; i += 2) {
        strArr += arr[i] += ' ';
    }
    console.log(strArr);
}

evenPosition(['20', '30', '40', '50', '60']);
console.log('-------');
evenPosition(['5', '10']);