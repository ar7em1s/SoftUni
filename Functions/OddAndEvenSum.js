// You will receive a single number.
// You have to write a function, that returns the sum of all even and all odd digits from that number.

function oddEven(input) {
  let numArr = input.toString().split("");

  let evenSum = 0;
  let oddSum = 0;
  for (let i = 0; i < numArr.length; i++) {
    let n = Number(numArr[i]);
    if (n % 2 == 0) {
      evenSum += n;
    } else {
      oddSum += n;
    }
  }
  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddEven(1000435);
oddEven(3495892137259234);
