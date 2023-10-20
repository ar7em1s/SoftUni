function rakia(params) {
  let days = Number(params[0]);

  let allLiters = 0;
  let accDegrees = 0;
  let allDegreesAllLiters = 0;

  for (let i = 1; i < params.length; i += 2) {
    allLiters += Number(params[i]);
    accDegrees += Number(params[i + 1]);
    allDegreesAllLiters += Number(params[i]) * Number(params[i + 1]);
  }

  let avgDegree = allDegreesAllLiters / allLiters; // 42.17

  console.log(`Liter: ${allLiters.toFixed(2)}`);
  console.log(`Degrees: ${avgDegree.toFixed(2)}`);

  if (avgDegree < 38) {
    console.log("Not good, you should baking!");
  } else if (avgDegree >= 38 && avgDegree <= 42) {
    console.log("Super!");
  } else {
    console.log("Dilution with distilled water!");
  }
}

rakia(["3", "100", "45", "50", "55", "150", "36"]);
console.log("---------");
rakia(["2", "200", "43", "200", "40"]); // 41.50
