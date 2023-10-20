// function trades(input) {
//   let city = input[0];
//   let sales = Number(input[1]);

//   let commission = 0;
//   switch (city) {
//     case "Sofia":
//       if (sales >= 0 && sales <= 500) {
//         commission = sales * 0.05;
//       } else if (sales > 500 && sales <= 1000) {
//         commission = sales * 0.07;
//       } else if (sales > 1000 && sales <= 10000) {
//         commission = sales * 0.08;
//       } else if (sales > 10000) {
//         commission = sales * 0.12;
//       } else {
//         console.log("error");
//       }
//       break;
//     case "Varna":
//       if (sales >= 0 && sales <= 500) {
//         commission = sales * 0.045;
//       } else if (sales > 500 && sales <= 1000) {
//         commission = sales * 0.075;
//       } else if (sales > 1000 && sales <= 10000) {
//         commission = sales * 0.1;
//       } else if (sales > 10000) {
//         commission = sales * 0.13;
//       } else {
//         console.log("error");
//       }
//       break;
//     case "Plovdiv":
//       if (sales >= 0 && sales <= 500) {
//         commission = sales * 0.055;
//       } else if (sales > 500 && sales <= 1000) {
//         commission = sales * 0.08;
//       } else if (sales > 1000 && sales <= 10000) {
//         commission = sales * 0.12;
//       } else if (sales > 10000) {
//         commission = sales * 0.145;
//       } else {
//         console.log("error");
//       }
//       break;
//     default:
//       console.log("error");
//   }
//   if (commission != 0) {
//     console.log(commission.toFixed(2));
//   }
// }
// trades(["Sofia", "1500"]);
// trades(["Plovdiv", "499.99"]);
// trades(["Varna", "3874.50"]);
// trades(["Kaspichan", "-50"]);

function tradeCommission(input) {
  let town = input[0];
  let salesVol = Number(input[1]);

  let tradeCom = 0;
  switch (town) {
    case "Sofia":
      if (salesVol >= 0 && salesVol <= 500) {
        tradeCom = 0.05 * salesVol;
      } else if (salesVol > 500 && salesVol <= 1000) {
        tradeCom = 0.07 * salesVol;
      } else if (salesVol > 1000 && salesVol <= 10000) {
        tradeCom = 0.08 * salesVol;
      } else if (salesVol > 10000) {
        tradeCom = 0.12 * salesVol;
      } else {
        console.log("error");
      }
      break;
    case "Varna":
      if (salesVol >= 0 && salesVol <= 500) {
        tradeCom = 0.045 * salesVol;
      } else if (salesVol > 500 && salesVol <= 1000) {
        tradeCom = (7, 5 / 100) * salesVol;
      } else if (salesVol > 1000 && salesVol <= 10000) {
        tradeCom = 0.1 * salesVol;
      } else if (salesVol > 10000) {
        tradeCom = 0.13 * salesVol;
      } else {
        console.log("error");
      }
      break;
    case "Plovdiv":
      if (salesVol >= 0 && salesVol <= 500) {
        tradeCom = 0.055 * salesVol;
      } else if (salesVol > 500 && salesVol <= 1000) {
        tradeCom = 0.08 * salesVol;
      } else if (salesVol > 1000 && salesVol <= 10000) {
        tradeCom = 0.12 * salesVol;
      } else if (salesVol > 10000) {
        tradeCom = 0.145 * salesVol;
      } else {
        console.log("error");
      }
      break;
    default:
      console.log("error");
      break;
  }
  if (tradeCom != 0) {
    console.log(tradeCom.toFixed(2));
  }
}

tradeCommission(["Sofia", "1500"]);
tradeCommission(["Plovdiv", "499.99"]);
tradeCommission(["Varna", "3874.50"]);
tradeCommission(["Kaspichan", "-50"]);
