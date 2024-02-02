function firstLast(inputArr) {
    let numArr = inputArr.map(x => Number(x))
    console.log(numArr[0] + numArr[numArr.length]);
}

firstLast(['20', '30', '40']);
console.log('------');
firstLast(['5', '10']);