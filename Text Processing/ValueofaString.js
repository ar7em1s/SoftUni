function value(input) {
    let letterCase = input[1];
    let string = input[0].split('');

    let sum = 0;
    if (letterCase === 'LOWERCASE') {
        for (let el of string) {
            if (el.charCodeAt() >= 97 && el.charCodeAt() <= 122) {
                sum += el.charCodeAt();
            }
        }
    } else {
        for (let el of string) {
            if (el.charCodeAt() >= 65 && el.charCodeAt() <= 90) {
                sum += el.charCodeAt();
            }
        }
    }
    console.log(`The total sum is: ${sum}`);
}


value(['HelloFromMyAwesomePROGRAM', 'LOWERCASE']);
console.log('----------');
value(['AC/DC', 'UPPERCASE']);