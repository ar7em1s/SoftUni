function subtract() {
    let a = document.getElementById('firstNumber').value;
    let b = document.getElementById('secondNumber').value;
    a = Number(a);
    b = Number(b);
    
    let sum = a - b;
    document.createElement('value');
    document.getElementById('result').append(sum);
}
