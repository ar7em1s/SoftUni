function triangle(a, b, c) {
    let p = 0.5 * (a + b + c);
    let area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    
    return area;
}

triangle(2, 3.5, 4);
console.log("----------");
triangle(3, 5.5, 4);