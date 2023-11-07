/* Write a function to help Ivan calculate how many hours a day he has to spend reading the necessary literature from the list given for the summer vacation.
As input, you will receive 3 parameters:
· Number of pages of the current book - integer [1… 1000]
· Pages read in 1 hour - integer [1… 1000]
· The number of days for which you must read the book - integer [1… 1000]
Total time to read the book: 212 pages / 20 pages per hour = 10.6 hours 
Required hours per day: 10.6 hours / 2 days = 5.3 hours per day
As output print on the console the number of hours, that Ivan has to read each day. */


function Ivan(pages, pagesPerHour, days) {
    let totalTime = pages / pagesPerHour;
    let requiredHours = totalTime / days;

    console.log(requiredHours);
}

Ivan(212, 20 , 2);
console.log("-------------");
Ivan(432, 15 , 4);




