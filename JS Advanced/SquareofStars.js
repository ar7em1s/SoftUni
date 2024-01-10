function star(num) {
    for (let i = 1; i <= num; i++) {
        console.log('* '.repeat(num));
    }
}

star(2);
console.log('-----');
star(5);
console.log('-----');
star(7);