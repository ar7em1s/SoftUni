function length(a, b, c) {
    let strLen = a.length + b.length + c.length;
    console.log(`${strLen}\n${(strLen / 3).toFixed(0)}`);
}

length('chocolate', 'ice cream', 'cake');
console.log('--------');
length('pasta', '5', '22.3');