/* Write a JS function that calculates the date of the next day by given year, month, and day.
The input comes as three number parameters. The first element is the year, 
the second is the month and the third is the day.
The output should be returned as a result of your function. */ 

function date(input) {
let currentDate = new Date(year, month - 1, day); // month is zero-based, so subtract 1
    
    currentDate.setDate(currentDate.getDate() + 1);
    let nextYear = currentDate.getFullYear();
    let nextMonth = currentDate.getMonth() + 1; // month is zero-based, so add 1
    let nextDay = currentDate.getDate();
    console.log(`${nextYear}-${nextMonth}-${nextDay}`);
}

getNextDay(2016, 9, 30);
console.log("-------------");
getNextDay(2020, 3, 24);
