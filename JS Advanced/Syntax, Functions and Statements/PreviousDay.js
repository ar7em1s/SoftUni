function previousDay(y, m, d) {
    let currentDate = new Date(y, m - 1, d);
    currentDate.setDate(currentDate.getDate() - 1);

    let previousDay = currentDate.getDate();
    let previousMonth = currentDate.getMonth() + 1;
    let previousYear = currentDate.getFullYear();

    console.log(previousYear + '-' + previousMonth + '-' + previousDay);
}

previousDay(2016, 9, 30);
console.log('--------');
previousDay(2015, 5, 10);