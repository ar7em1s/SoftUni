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
            let substring = tokens[1];
            let firstIdx = secretMessage.indexOf(substring);

            if (firstIdx == -1) {
                console.log('error');
                continue
            }
            let left = secretMessage.slice(0, firstIdx);
            let right = secretMessage.slice(firstIdx + substring.length);
            secretMessage = left + right + substring.split('').reverse().join('');
                break;
            case 'ChangeAll':
            let oldValue = tokens[1];
            let replacement = tokens[2]; 
            let parts = secretMessage.split(oldValue);
            secretMessage = parts.join(replacement);
                break;
            }
            console.log(secretMessage);
        }
        console.log(`You have a new text message: ${secretMessage}`);
    }


reveal([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
    ]);
console.log('------------');
reveal([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
    ]);
