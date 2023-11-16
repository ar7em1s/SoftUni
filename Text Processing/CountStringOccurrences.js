function occurrences(str, searchedWord) {
    let separatedStr = str.split(' ');
    let counter = 0;

    for (let word of separatedStr) {
        if (word == searchedWord) {
            counter++;
        }
    }
    console.log(counter);
}

occurrences('This is a word and it also is a sentence', 'is');
console.log('----------');
occurrences('softuni is great place for learning new programming languages', 'softuni');