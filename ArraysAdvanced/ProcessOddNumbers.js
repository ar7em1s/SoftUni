/* You are given an array of numbers. Write a function that prints the elements at odd positions from the array, doubled and in reverse order.
The input comes as an array of number elements.
The output is printed on the console on a single line, separated by space. */

function oddNumbers(initArr) {
    let newArr = [];

    for (let i = initArr.length - 1; i >= 0; i--) {
        if (i % 2 != 0) {
            newArr.push(initArr[i] * 2);
        }
    }
    console.log(newArr.join(" "));
}

oddNumbers([10, 15, 20, 25]); // 50 30
//           0   1   2   3
console.log("--------");
oddNumbers([3, 0, 10, 4, 7, 3]); // 6 8 0
//          0  1   2  3  4  5

