// let products = [
//     {name: 'apple', expDate: '10/12/23', kcal: 200},
//     {name: 'chips', expDate: '11/15/23', kcal: 1200},
//     {name: 'banana', expDate: '10/20/23', kcal: 200}
// ]

function adAstra(input) {
  let str = input.shift();

  let pattern = /([#|])(?<food>[A-Za-z\s]+)\1(?<expdate>\d{2}\/\d{2}\/\d{2})\1(?<kcal>\d+)\1/g;

  let totalKcal = 0;
  let products = [];

  let matches = str.matchAll(pattern);

  for (let match of matches) {
    console.log(match);
    let { food, expdate, kcal } = match.groups;

    totalKcal += Number(kcal);
    products.push({ food, expdate, kcal });
  }
  let days = Math.floor(totalKcal / 2000);
  console.log(`You have food to last you for: ${days} days!`);

  products.forEach((product) => console.log(`Item: ${product.food}, Best before: ${product.expdate}, Nutrition: ${product.kcal}`));
}

adAstra(["#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|"]);
console.log("------------");
adAstra(["$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#IceCream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|"]);
console.log("------------");
adAstra(["Hello|#Invalid food#19/03/20#450|$5*(@"]);
