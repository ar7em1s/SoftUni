function password(input) {
    let pass = input.shift();
    let arrPass = [];

    while (input[0] != 'Done') {
        let line = input.shift();
        let tokens = line.split(' ');
        let command = tokens[0];

        switch (command) {
            case 'TakeOdd':
                
            for (let i = 1; i < pass.length; i += 2) {
                arrPass.push(pass[i])
              }
            pass = arrPass.join('')
            console.log(pass);
            break;

            case 'Cut': 
            let idx = Number(tokens[1]);
            let len = Number(tokens[2]);

            let subStr = pass.substring(idx, idx + len);
            let substrIndex = pass.indexOf(subStr);

            pass = pass.substring(0, substrIndex) + pass.substring(substrIndex + subStr.length);
            console.log(pass);

            break;
            case 'Substitute': 
                let substring = tokens[1];
                let substitute = tokens[2];

                if (pass.includes(substring)) {
                    pass = pass.split(substring).join(substitute);
                    console.log(pass);

                } else {
                    console.log(`Nothing to replace!`);
                }
            break;
        }
    }
  console.log(`Your password is: ${pass}`);
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
