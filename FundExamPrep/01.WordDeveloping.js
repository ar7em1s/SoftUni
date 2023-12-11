//90/100

function word(input) {
    let word = '';

    while (input[0] != 'End') {
    let line = input.shift();
    let tokens = line.split(' ');
    let command = tokens[0];

    switch (command) {
        case 'Add': 
        word += tokens[1];
        break;

        case 'Upgrade': 
        let subString = Number(tokens[1].charCodeAt());
        let oldChar = String.fromCharCode(subString);
        let substitute = String.fromCharCode(subString + 1);

        word = word.split(oldChar).join(substitute); 
        break;

        case 'Print': 
        console.log(word);
        break;

        case 'Index': 
        let char = tokens[1];
        let idxs = [];
        if (word.indexOf(char) >= 0) {
            for (let i = 0; i < word.length; i++) {
                if (word[i] == char) {
                    idxs.push(i);
                } 
            }
            console.log(idxs.join(' '));
        } else {
            console.log('None');
        }
        break;

        case 'Remove': 
        let subStr = tokens[1];
        word = word.replace(subStr, '');

        break;
    }
    }
}


word((["Add University",
"Print",
"Upgrade n",
"Print",
"Index i",
"Remove sity",
"Print",
"End"]));
console.log('-------');
word((["Add HelloWorld",
"Upgrade e",
"Print",
"Index b",
"Remove rl",
"Print",
"End"]));
