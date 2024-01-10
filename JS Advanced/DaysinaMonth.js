function month(month, year) {
    // Create a new Date object with the given month and year
    let date = new Date(year, month - 1); // Month is 0-indexed in JS Date object

    // Move to the next month and subtract 1 day to get the last day of the current month
    date.setMonth(date.getMonth() + 1);
    date.setDate(date.getDate() - 1);

    //Print the day of the month, which gives the number of days in the current month
    console.log(date.getDate());
}

month(1, 2012);
console.log('--------');
month(2, 2021);