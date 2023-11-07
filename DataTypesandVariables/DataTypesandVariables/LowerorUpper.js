function lowerToUpper(letter) {
    let char = letter.charCodeAt(); 

    if (char >= 65 && char <= 90) {
        console.log("upper-case");
    } else if (char >= 97 && char <= 122) {
        console.log("lower-case");
    }
}

lowerToUpper('L');
console.log("----------");
lowerToUpper('f');