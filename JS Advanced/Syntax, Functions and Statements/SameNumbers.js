/* Write a function that takes an integer number as an input and checks if all the digits in a given number are the same or not.
Print on the console true if all numbers are the same and false if not. On the next line, print the sum of all digits.
The input comes as an integer number.
The output should be printed on the console. */

function sameNumber(num) {
    let newNum = num.toString();
    //let numArr = newNum.split("");
    let same = true;
    let sum = 0;
    
    for (let i = 0; i < newNum.length; i++) {
        let firstDigit = parseInt(newNum[0], 10);
        let digit = parseInt(newNum[i], 10);

        if (firstDigit !== digit) {
            same = false;
        }
        sum += Number(newNum[i]);

    }
    if (same) {
        console.log(`true\n${sum}`);
    } else {
        console.log(`false\n${sum}`);
    }
}

sameNumber(2222222); // true 14
console.log('--------');
sameNumber(1234); // false