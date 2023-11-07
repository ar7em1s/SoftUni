/* Write a JS function that calculates the distance between two points by given x and y coordinates.
The input comes as four number elements in the format x1, y1, x2, y2. 
Each pair of elements are the coordinates of a point in 2D space.
The output should be returned as a result of your function. */

function coordinates(x1, y1, x2, y2) {
    let point = Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) // C.pow(2) 
    let z = Math.sqrt(point);

    console.log(z);
}

coordinates(2, 4, 5, 0); //5
console.log("----------");
coordinates(2.34, 15.66, -13.55, -2.9985); //24.50778901186315