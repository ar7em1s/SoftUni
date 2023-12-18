/* Write a function that displays numbers from given start to given end and their sum. 
The input comes as two number parameters. Print the result like the examples below: 
5 6 7 8 9 10 
Sum: 45 */

function printSum(num1, num2) {
    let str = ""; //easier resolution with an array
    let sum = 0;
    for (let i = num1; i <= num2; i++) {
        str += i + " "; // get num triangle if printed here
        sum += i;
    }
    console.log(str);
    console.log(`Sum: ${sum}`);
}

printSum(5, 10);
console.log("------------");
// printSum(0, 26);
// console.log("------------");
// printSum(50, 60);
