//TakeOdd 

function password(input) {
    let str = input.shift();
    let newPass = '';

    while (input[0] !== 'Done') {
        let line = input.shift();
        let tokens = line.split(' ');
        let command = tokens[0];
        
        switch (command) {
            case 'TakeOdd':
                str = str.split('').filter((_, index) => index % 2 !== 0).join('');
                newPass += str;
                console.log(newPass);

            break;

            case 'Cut': 
            let idx = Number(tokens[1]); //2
            let strLength = Number(tokens[2]); //0
            let first = newPass.slice(0, idx); //Hel
            let second = newPass.slice(idx + strLength); //llo
            newPass = first + second;
            console.log(newPass);
            break;

            case 'Substitute':
                let substring = tokens[1];
                let substitute = tokens[2];

                if (newPass.includes(substring)) {
                newPass = newPass.split(substring).join(substitute);
                console.log(newPass);
                } else {
                console.log('Nothing to replace!');
                }

            break;
        }
    }
    console.log(`Your password is: ${newPass.trim()}`);
}

password(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
"TakeOdd",
"Cut 15 3",
"Substitute :: -",
"Substitute | ^",
"Done"]);
console.log('--------');
password(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
"TakeOdd",
"Cut 18 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done"]);

