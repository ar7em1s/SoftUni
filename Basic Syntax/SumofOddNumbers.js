// Write a program that prints the next n odd numbers (starting from 1) and on the last row prints the sum of them.
// Input: You will receive a number – n. This number shows how many odd numbers you should print.
// Output: Print the next n odd numbers, starting from 1, separated by newlines.
// On the last line, print the sum of these numbers in the following format: `Sum: {total sum}`

function oddNumbers(n) {
    let oddNum = 0;
    for (let i = 0; i <= n * 2; i++) {
      if (i % 2 != 0) {
        console.log(i);
        oddNum += i;
      }
    }
    console.log(`Sum: ${oddNum}`);
  }

oddNumbers(3); //how many odd numbers you should print
console.log("------");
oddNumbers(5);
