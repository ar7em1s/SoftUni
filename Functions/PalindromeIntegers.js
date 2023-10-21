function palindrome(arr) {
  for (let i = 0; i < arr.length; i++) {
    let initN = arr[i];
    let nNum = arr[i].toString().split("").reverse().join("");

    if (initN == nNum) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}

palindrome([123, 323, 421, 121]);
console.log("---------");
palindrome([32, 2, 232, 1010]);
