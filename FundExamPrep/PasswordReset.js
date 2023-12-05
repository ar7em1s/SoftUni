//50 / 100

function password(input) {
    let pass = input.shift();
    let rawPass = '';

    while (input[0] != 'Done') {
        let line = input.shift();
        let tokens = line.split(' ');
        let command = tokens[0];



        switch (command) {
            case 'TakeOdd':
                
                for (let i = 0; i < pass.length; i++) {
                    if (i % 2 != 0) {
                        rawPass += pass[i];
                    }
                }
                console.log(rawPass);
            break;

            case 'Cut': 
            let idx = Number(tokens[1]);
            let len = Number(tokens[2]);

            let subStr = rawPass.substring(idx, idx + len);
            let splStr = rawPass.split(subStr);
            rawPass = splStr[0] + splStr[1]
            console.log(rawPass);

            break;
            case 'Substitute': 
                let substring = tokens[1];
                let substitute = tokens[2];

                if (rawPass.includes(substring)) {
                    rawPass = rawPass.split(substring).join(substitute);
                    console.log(rawPass);

                } else {
                    console.log(`Nothing to replace!`);
                }
            break;
        }
    }
  console.log(`Your password is: ${rawPass}`);
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
"Substitute ? .!.",
"Done"]);

