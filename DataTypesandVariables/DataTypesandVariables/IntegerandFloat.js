/* You will receive 3 numbers. 
Your task is to find their sum and print result to the console in the following format: 
`{sum} - {type of the number (Integer or Float)}` */


function intFloat(n1, n2, n3) {
    let numSum = n1 + n2 + n3;

    if (numSum % 1 === 0) {
        console.log(`${numSum} - Integer`);
    } else {
        console.log(`${numSum} - Float`);
    }
}

intFloat(9, 100, 1.1);
console.log("---------------");
intFloat(100, 200, 303);
