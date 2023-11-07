function sum(input) {
    let strFromNum = input.toString().split(""); //[ '2', '4', '5', '6', '7', '8' ]

    let digitSum = 0;
    for (let i = 0; i < strFromNum.length; i++) {
        digitSum += Number(strFromNum[i]);
    }
console.log(digitSum);

}

sum(245678);
console.log("-----------");
sum(97561);
console.log("-----------");
sum(543);