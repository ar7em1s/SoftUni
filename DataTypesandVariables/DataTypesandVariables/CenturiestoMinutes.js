/* Write a program that receives a number of centuries and converts it to years, days, hours, and minutes.
Examples
Input Output
1 centuries = 100 years = 36524 days = 876576 hours = 52594560 minutes
5 centuries = 500 years = 182621 days = 4382904 hours = 262974240 minutes
Hint · Assume that a year has 365.2422 days on average (the Tropical year). */

function centruriesToMinutes(cent) {
    let years = cent * 100; // 100
    let days = Math.trunc(years * 365.2422); // 36524.22
    let hours = days * 24; // 876581.28
    let minutes = hours * 60; // 52594876.80000004
    console.log(`${cent} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);

}

centruriesToMinutes(1);
console.log("------------");
centruriesToMinutes(5);
