/* Write a function, which as input will receive a number.
Check and print if it is amazing or not into the following format:
"{number} Amazing? {True or False}"
An amazing number includes the digit 9 the sum of its digits.
Examples for amazing numbers are 1233 (1 + 2 + 3 + 3 = 9), 583472 (5 + 8 + 3 + 4 + 7 + 2 = 29) */ 

function amazingNum(num) {
    let numToStr = num.toString().split("");
    
    let numSum = 0;
    for (let i = 0; i < numToStr.length; i++) {
        numSum += Number(numToStr[i])
    }
    let result = numSum.toString().includes("9");
    result === true? console.log(`${num} Amazing? True`) : console.log(`${num} Amazing? False`);

}

amazingNum(1233);
console.log("---------");
amazingNum(999);