/* Write a program, that takes an integer as a parameter and prints the corresponding month. 
If the number is more than 12 or less than 1 print "Error!"
Input: You will receive a single number. */

function month(input) {
    if (input == 1) {
        console.log("January");
    } else if (input == 2) {
        console.log("February");
    } else if (input == 3) {
        console.log("March");
    } else if (input == 4) {
        console.log("April");
    } else if (input == 5) {
        console.log("May");
    } else if (input == 6) {
        console.log("June");
    } else if (input == 7) {
        console.log("July");
    } else if (input == 8) {
        console.log("August");
    } else if (input == 9) {
        console.log("September");
    } else if (input == 10) {
        console.log("October");
    } else if (input == 11) {
        console.log("November");
    }  else if (input == 12) {
        console.log("December");
    } else {
        console.log("Error!");

    }
}

month(2);
console.log("------")
month(13);
console.log("------")
month(7);
console.log("------")
month(52);



