function reverse(a, b, c) {
    //console.log(`${c} ${b} ${a}`);
    let marr = [];
    marr.push(a, b, c);
    console.log(marr.reverse().join(" "));
}

reverse('A','B','C');
console.log("---------");
reverse('1','L','&');
