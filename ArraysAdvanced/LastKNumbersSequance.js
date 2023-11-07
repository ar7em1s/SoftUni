/* You are given two integers n and k. Write a function that generates and prints the following sequence:
· The first element is 1.
· Every following element equals the sum of the previous k elements.
· The length of the sequence is n elements.
The input comes as two number arguments. The first element represents the number n, and the second – the number k. The output is printed on the console on a single line, separated by space. */

function sequence(n, k) {
    let sequenceArr = [1];
  
    for (let i = 1; i < n; i++) {
      let sum = 0;
      for (let j = Math.max(0, i - k); j < i; j++) {
        sum += sequenceArr[j];
      }
  
      sequenceArr.push(sum);
    }
  
    console.log(sequenceArr.join(' '));
  }

  sequence(6, 3);
  sequence(8, 2);