// Write a function that receives a text as a first parameter and a single word as a second. 
// Find all occurrences of that word in the text and replace them with the corresponding count of '*'.

function censor(string, word) {
    let censor = '*'.repeat(word.length);
    let result = string;

    while (result.includes(word)) {
        result = result.replace(word, censor);
    }

    console.log(result);
}

censor('A small sentence with some words', 'small');
console.log('----------');
censor('Find the hidden word', 'hidden');
console.log('----------');
censor('hello world hello hi', 'hello');
