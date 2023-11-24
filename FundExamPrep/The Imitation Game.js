function imitation(input) {
    let encodedMessage = input.shift();

    while (input[0] !== 'Decode') {
        let line = input.shift();
        let tokens = line.split('|');
        let command = tokens[0];

        switch (command) {
            case 'Move': 
            let index = tokens[1];
            let textTBMoved = encodedMessage.slice(0, index); // 'llo'
            let restOfTheMess = encodedMessage.slice(index);
            encodedMessage = restOfTheMess + textTBMoved;
                break;
            case 'Insert':
                let idx = tokens[1];
                let first = encodedMessage.slice(0, idx);
                let second = encodedMessage.slice(idx);
                encodedMessage = first + tokens[2] + second;
                    break;
            case 'ChangeAll':
                let oldChar = tokens[1];
                let replacementChar = tokens[2];
                let parts = encodedMessage.split(oldChar);
                encodedMessage = parts.join(replacementChar);
                    break;
        }
    }

console.log(`The decrypted message is: ${encodedMessage}`);
}

imitation([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
    ]);
console.log('------------');
imitation([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are', 
    'Insert|9|?', 
    'Decode' 
    ]);
