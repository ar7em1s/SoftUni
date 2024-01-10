function math(n1, n2, operator) {
    let result;

    switch (operator) {
        case '+': result = n1 + n2; break;
        case '-': result = n1 - n2; break;
        case '*': result = n1 * n2; break;
        case '/': result = n1 / n2; break;
        case '%': result = n1 % n2; break;
        case '**': result = n1 ** n2; break;
    }

    console.log(result);
}

math(5, 6, '+');
console.log('-------');
math(3, 5.5, '*');
