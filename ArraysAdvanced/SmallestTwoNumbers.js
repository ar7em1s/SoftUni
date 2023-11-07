/* Write a function that prints the two smallest elements from an array of numbers.
The input comes as an array of number elements.
The output is printed on the console on a single line, separated by space. */

function smallestNum(arr) {
    arr.sort((
        function(a, b) {
        return a - b
    }));

    console.log(arr[0], arr[1]);
}


smallestNum([30, 15, 50, 5]) // 5 15
smallestNum([3, 0, 10, 4, 7, 3]) // 0 3