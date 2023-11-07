/* Write a program that receives a string of number n and print all triples of the first n small Latin letters, ordered alphabetically: 
Perform 3 nested loops from 0 to n. For each number num print its corresponding Latin letter as follows:

The function String.fromCharCode() gets the value in decimal and transforms it to a character from the ASCII table. */ 



function latin(num) {
    let n = Number(num[0]);
    for (let i = 0; i < n; i++) {
        let charOne = String.fromCharCode(i + 97);

        for (let j = 0; j < n; j++) {
            let charTwo = String.fromCharCode(j + 97);

            for (let k = 0; k < n; k++) {
                let charThree = String.fromCharCode(k + 97);
                console.log(`${charOne}${charTwo}${charThree}`);
            }
        }
    }
}

latin("3");
//console.log("---------");
//latin("5");
/* function latin(n) {
    for(let i = 0; i < n; i++){
        let firstLetter = String.fromCharCode(i + 97);

        for(let j = 0; j < n; j++){
            let secondLetter = String.fromCharCode(j + 97);
            
            for(let k = 0; k < n; k++){
                let thirdLetter = String.fromCharCode(k + 97);
                console.log(`${firstLetter}${secondLetter}${thirdLetter}`);
            }
        }
    }
}

latin(3); */ 