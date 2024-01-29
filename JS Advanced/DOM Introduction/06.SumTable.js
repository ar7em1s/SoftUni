function sumTable() {
    let priceSum = 0;
    let table = document.querySelectorAll('table tr');
    for (let i = 1; i < table.length; i++) {
        let columns = table[i].children;
        let cost = columns[columns.length - 1].textContent;
        priceSum += Number(cost);
    }
    document.getElementById('sum').textContent = priceSum;
}