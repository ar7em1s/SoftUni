function primeNumbers(n) {
    if (n % 2 == 0 || n % 3 == 0 || n % 5 == 0) {
        console.log("false");
    } else {
        console.log("true");
    }
}

primeNumbers(7);
primeNumbers(8);
primeNumbers(81);