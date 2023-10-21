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
  let isValidLength = passLength(input);
  let isValidSymbols = passLettersCheck(input);
  let isValidMinDigits = passMin2Digits(input);

  if (isValidLength && isValidSymbols && isValidMinDigits) {
    console.log("Password is valid");
  }

  function passLength(input) {
    if (input.length >= 6 && input.length <= 10) {
      return true;
    } else {
      console.log("Password must be between 6 and 10 characters");
      return false;
    }
  }

  function passLettersCheck(input) {
    for (let char of input) {
      let letter = char.charCodeAt(0);
      if (!((letter >= 48 && letter <= 57) || (letter >= 65 && letter <= 90) || (letter >= 97 && letter <= 122))) {
        console.log("Password must consist only of letters and digits");
        return false;
      }
    }
    return true;
  }

  function passMin2Digits(input) {
    let digits = 0;

    for (let currChar of input) {
      let code = currChar.charCodeAt(0);

      if (code >= 48 && code <= 57) {
        digits++;
      }
    }

    if (digits < 2) {
      console.log("Password must have at least 2 digits");
      return false;
    } else {
      return true;
    }
  }
}

passwords("logIn");
console.log("---------");
passwords("MyPass123");
console.log("---------");
passwords("Pa$s$s");
