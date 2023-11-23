/// IN PROGRESS

function reveal(input) {
    let secretMessage = input.shift();
    
    while(input[0] != 'Reveal') {
        let line = input.shift();
        let tokens = line.split(':|:');
        let command = tokens[0];
        

        switch (command) {
            case 'InsertSpace': 
            let idx = Number(tokens[1]);
            let firstHalf = secretMessage.slice(0, idx);
            let secondHalf = secretMessage.slice(idx);
            secretMessage = firstHalf + ' ' + secondHalf;
                break;
            case 'Reverse': 
            let initWord = tokens[1];
                if (secretMessage.includes(initWord) === true) {
                let wordToBeReversed = initWord.split('').reverse().join(''); // !gnil
                let newSecretMessage = secretMessage.replace(initWord, wordToBeReversed);
                console.log(secretMessage);
            } else {
                console.log('error');
            }


                break;
            case 'ChangeAll': // heVVo dar!gniV
            let oldValue = tokens[1]; // 'V'
            let replacement = tokens[2]; // 'l'
            let parts = secretMessage.split(oldValue);
            
            }
                break;
            
        }
    }

    // 2. Reverse
        // - check if the meesage contains the given string
        // -- if not, print 'error'
        // -- if yes, cut it out, reverse it and add it at the end of the messag


reveal([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
    ]);
console.log('------------');
// reveal([
//     'Hiware?uiy',
//     'ChangeAll:|:i:|:o',
//     'Reverse:|:?uoy',
//     'Reverse:|:jd',
//     'InsertSpace:|:3',
//     'InsertSpace:|:7',
//     'Reveal'
//     ]);
