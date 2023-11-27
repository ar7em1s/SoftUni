function barcodes(input) {
  let count = input.shift();
  let pattern = /(@[#]+)([A-Z][A-Za-z0-9]{5,})\1/g; // 5+ ???
  let ifInt = /\d/g;
  let match = pattern.test(input);

  for (let i = 0; i < count; i++) {
    let currStr = input[i];
    console.log(match);
    match = pattern.test(currStr);
  }
  //   if (match) {
  //     console.log(match);
  //     match = pattern.test(input);
  //     let barcodeTxt = match[2];
  //     let digitCheck = ifInt.test(barcodeTxt);

  //     if (digitCheck === false) {
  //     console.log("Product group: 00");
  //     } else {}
  //   } else {
  //     console.log(match);
  //   }
}

barcodes(["3", "@#FreshFisH@#", "@###Brea0D@###", "@##Che4s6E@##"]);
// console.log("--------");
// barcodes(["6", "@###Val1d1teM@###", "@#ValidIteM@#", "##InvaliDiteM##", "@InvalidIteM@", "@#Invalid_IteM@#", "@#ValiditeM@#"]);
