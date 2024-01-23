function rotate(arr, n) {
    let rotation = n % arr.length;

    let rotatedPart = arr.splice(arr.length - rotation, rotation);
    arr.unshift(...rotatedPart);

    console.log(arr.join(' '));
}

rotate(['1','2','3','4'], 2);
console.log('---------');
rotate(['Banana', 'Orange', 'Coconut', 'Apple'], 15);