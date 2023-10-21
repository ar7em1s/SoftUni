/* Write a function that checks if a given password is valid. Password validations are:
· The length should be 6 - 10 characters (inclusive)
· It should consist only of letters and digits
· It should have at least 2 digits
If a password is a valid print: "Password is valid".
If it is NOT valid, for every unfulfilled rule print a message:
· "Password must be between 6 and 10 characters"
· "Password must consist only of letters and digits"
· "Password must have at least 2 digits 
*/
function passwords(input) {
  let stringArr = input.split("");
  console.log(stringArr);

  function passLength(input) {
    if (stringArr.length >= 6 && stringArr.length <= 10) {
      return true;
    } else {
      console.log("The length should be 6 - 10 characters");
      return false;
    }
  }

  function passLettersCheck(input) {
    if ()
  }
}

passwords("logIn");
console.log("---------");
// passwords("MyPass123");
// console.log("---------");
// passwords("Pa$s$s");
