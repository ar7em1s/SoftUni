function GPD(a, b) {
    while (b !== 0) {
        let c = a % b ;
        a = b;
        b = c;
    }
    console.log(a);
}

GPD(15, 5);
console.log('-----');
GPD(2154, 458);