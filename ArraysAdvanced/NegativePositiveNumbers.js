/* Write a function that processes the elements in an array one by one and produces a new array. 
Prepend each negative element at the front of the array (as the first element) and append each positive (or 0) element at the end of the array.

The input comes as an array of string elements holding numbers.
The output is printed on the console, each element on a new line. */

function negPosNum(arrInput) {
    let newArr = arrInput.map(Number);
    let resultArr = [];
    
    for (let el of newArr) {
        if (el < 0) {
            resultArr.unshift(el);
        } else {
            resultArr.push(el);
        }
    }
    console.log(resultArr.join("\n"));
}

negPosNum(['7', '-2', '8', '9']);
console.log("-----------");
negPosNum(['3', '-2', '0', '-1']);
