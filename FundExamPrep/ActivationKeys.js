function activationKey(input) {
    let key = input.shift();

    while (input[0] != 'Generate') {
        let line = input.shift();
        let tokens = line.split('>>>');
        let command = tokens[0];
        

        switch (command) {
            case 'Contains': 
                if (key.includes(tokens[1])) {
                    console.log(`${key} contains ${tokens[1]}`);
                } else {
                    console.log('Substring not found!');
                }
            break;

            case 'Flip': 
                let start = Number(tokens[2]);
                let end = Number(tokens[3]);

                if (tokens[1] == "Upper") {
                    let firstHalf = key.slice(0, start);
                    let strToBelipped = key.slice(start, end);
                    let secondHalf = key.slice(end);

                    key = firstHalf + strToBelipped.toUpperCase() +secondHalf;
                    console.log(key);
                } else {
                    let firstHalf = key.slice(0, start);
                    let strToBelipped = key.slice(start, end);
                    let secondHalf = key.slice(end);

                    key = firstHalf + strToBelipped.toLowerCase() +secondHalf;
                    console.log(key);
                }
            
            break;
            case 'Slice': 
                let startIdx = Number(tokens[1]);
                let endIdx = Number(tokens[2]);

                let first = key.slice(0, startIdx);
                let second = key.slice(endIdx);

                key = first + second;
                console.log(key);
            break;
        }
    }
    console.log(`Your activation key is: ${key}`);
}

activationKey(["abcdefghijklmnopqrstuvwxyz",
"Slice>>>2>>>6",
"Flip>>>Upper>>>3>>>14",
"Flip>>>Lower>>>5>>>7",
"Contains>>>def",
"Contains>>>deF",
"Generate"]);
console.log('-----------');
activationKey(["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"]);
