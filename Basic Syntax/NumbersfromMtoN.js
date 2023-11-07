// Write a function that receives a number M and a number N (M will always be bigger than N). 
//Print all numbers from M to N.

function MtoN(M, N) {
    while (M >= N) {
        console.log(M);
        M--
    }
}

MtoN(6, 2);
console.log("-------");
MtoN(4, 1);