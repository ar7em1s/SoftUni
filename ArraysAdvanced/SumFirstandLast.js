/* Write a function that calculates and prints the sum of the first and the last elements in an array.
The input comes as an array of string elements holding numbers.
The output is printed on the console. */

function arraysSum(input) {
    let newArr = input.map(Number);
    let a = newArr.shift();
    let b = newArr.pop();

    console.log(a + b);
}

arraysSum(['20', '30', '40']);
arraysSum(['5', '10']);


