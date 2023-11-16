/* Write a function, which receives two parameters.
The first parameter will be a string with some words separated by ', '.
The second parameter will be a string that contains templates containing '*'.
Find the word with the same length as the template and replace it. */

function reveal(revealedWord, string) {
    let words = revealedWord.split(', ');

    for (let word of words) {
        let repeatCount = word.length;
        let starTemp = '*'.repeat(repeatCount);

        string = string.replace(starTemp, word);
    }
    console.log(string);
}

reveal('great', 'softuni is ***** place for learning new programming languages');
console.log('--------');
reveal('great, learning', 'softuni is ***** place for ******** new programming languages');