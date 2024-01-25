function circle(param) {
    let result = typeof param;
    
    if (result !== 'number') {
        console.log(`We can not calculate the circle area, because we receive a ${result}.`);
    } else {
        console.log((Math.PI * Math.pow(Number(param), 2)).toFixed(2));
    }

}

circle(5);
console.log('-----');
circle('circle');
