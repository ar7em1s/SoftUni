/* Write a program that receives a number n. 
For all numbers in the range [1…n] print the number and if it is special or not (True / False).
· A number is special when its sum of digits is 5, 7 or 11. 
To calculate the sum of digits of given number num, you might repeat the following: 
sum the last digit (num % 10) and remove it (sum = sum / 10) until num reaches 0. 
Use parseInt() while dividing to get only integer numbers. */

function whatMakesYouSpecial(num) {
    for (let i = 1; i <= num; i++) {
      let n = i % 10;
      let sum = n;
  
      if (i > 10) {
        let remainingDigits = parseInt(i / 10);
        sum += remainingDigits % 10;
      }
  
      if (sum === 5 || sum === 7 || sum === 11) {
        console.log(`${i} -> True`);
      } else {
        console.log(`${i} -> False`);
      }
    }
  }

whatMakesYouSpecial(15);
console.log("------------");
whatMakesYouSpecial(20);