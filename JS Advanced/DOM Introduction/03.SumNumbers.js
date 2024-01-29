function calc() {
    let resultBox = document.getElementById("sum");
    let firstNum = document.getElementById("num1").value;
    let secondNum = document.getElementById("num2").value;
    let sum = Number(firstNum) + Number(secondNum);

    resultBox.value = sum;
}
