//Receive three numbers and you have to sort them in descending order. Print each number on a new line.

function sort(a, b, c) {
    let arr = [a, b, c];
     
    let sortedArr = arr.sort(
        function (a, b) { 
            return b - a; }
    );

    for (let i = 0; i < sortedArr.length; i++) {
        console.log(sortedArr[i]);
    }
}

sort(2, 3, 1); // a  b  c
console.log("--------------");
sort(-2, 1, 3);
console.log("--------------");
sort(0, 0, 2);