function triangle(rows) {
  for (let num = 1; num <= rows; num++) {
    let str = "";
    for (let row = 1; row <= num; row++) {
      str += num + " ";
    }
    console.log(str);
  }
}

triangle(6);
/*console.log("------");
  triangle(5);
  console.log("------");
  triangle(6);*/
