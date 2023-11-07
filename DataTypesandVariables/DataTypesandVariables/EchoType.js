function echo(input) {
    let type = typeof input;
    if (type === "string" || type === "number") {
        console.log(type);
        console.log(input);
    } else {
        console.log(type);
        console.log("Parameter is not suitable for printing");
    }
}

echo('Hello, JavaScript!');
console.log("-------------");
echo(18);
console.log("-------------");
echo(null);
