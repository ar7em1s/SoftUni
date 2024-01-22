function sequence(n, k) {
    let arr = [1];

    for (let i = 1; i < n; i++) {
        let sum = arr.slice(-k)
                     .reduce((acc, val) => acc + val, 0);
        arr.push(sum);
    }
    return arr;
}

sequence(6, 3);
console.log('------');
sequence(8, 2);