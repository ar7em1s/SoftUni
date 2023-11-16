/* The input will be a single string.
Find all special words starting with #. 
If the found special word does not consist only of letters, then it is invalid and should not be printed.
Finally, print out all the special words you found without the label (#) on a new line.*/ 

function hashtags(string) {
    let words = string.split(' ');
    let hashWords = words.filter(word => word.startsWith('#') && word.length > 1);

    for (let el of hashWords) {
        el = el.slice(1);
        let isValid = true;

        for (let char of el) {
            if (!/[A-Za-z]/.test(char)) {
                isValid = false;
                break;
            }
        }

        if (isValid) {
            console.log(el);
        }
    }
}

hashtags('Nowadays everyone uses # to tag a #special word in #socialMedia and it is #2anno1ing');
console.log('--------');