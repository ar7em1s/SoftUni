function repeating(chars) {
    let noRepeatStr = '';
    let prevChar = '';


    for (let currChar of chars) {
        if (currChar !== prevChar) {
            noRepeatStr += currChar;
            prevChar = currChar;
        }
    }
    console.log(noRepeatStr);
}

repeating('aaaaabbbbbcdddeeeedssaa');
console.log('------');
repeating('qqqwerqwecccwd');

// function repeating(chars) {
//     let newStr = '';

//     let splitStr = chars.split('');
//     for (let i = 0; i < splitStr.length; i++) {
//         if (splitStr[i] !== splitStr[i - 1]) {
//             newStr += splitStr[i]
//         }
//     }
//     console.log(newStr);
// }